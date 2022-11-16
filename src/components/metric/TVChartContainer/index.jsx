import * as React from 'react'
import styles from './index.module.css'
import { widget, version } from '../../../../public/static/charting_library'
import { makeApiRequest, parseFullSymbol } from './helpers'

function getLanguageFromURL() {
  const regex = new RegExp('[\\?&]lang=([^&#]*)')
  const results = regex.exec(window.location.search)
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

const config = {
  supported_resolutions: ['D'],
}

const lastBarsCache = new Map()

const DataFeed = {
  /* mandatory methods for realtime chart */
  onReady: (cb) => {
    console.log('DataFeed.onReady')
    setTimeout(() => cb(config), 0)
  },
  // only need searchSymbols when search is enabled
  searchSymbols: (userInput, exchange, symbolType, onResultReadyCallback) => {
    console.log('DataFeed.searchSymbols')
  },
  resolveSymbol: (
    symbolName,
    onSymbolResolvedCallback,
    onResolveErrorCallback
  ) => {
    console.log('DataFeed.resolveSymbol')
    var split_data = symbolName.split(/[:/]/)

    var symbol_stub = {
      name: symbolName,
      description: '',
      type: 'crypto',
      session: '24x7',
      timezone: 'America/New_York',
      ticker: symbolName,
      minmov: 1,
      pricescale: 100000000,
      has_intraday: true,
      intraday_multipliers: ['1', '60'],
      supported_resolution: ['D'],
      volume_precision: 8,
      data_status: 'streaming',
    }
    if (split_data[2].match(/USD|EUR|JPY|AUD|GBP|KRW|CNY/)) {
      symbol_stub.pricescale = 100
    }

    setTimeout(function () {
      onSymbolResolvedCallback(symbol_stub)
    }, 0)
  },
  getBars: async (
    symbolInfo,
    resolution,
    periodParams,
    onHistoryCallback,
    onErrorCallback
  ) => {
    console.log('DataFeed.getBars')
    const { from, to, firstDataRequest } = periodParams
    console.log('[getBars]: Method call', symbolInfo, resolution, from, to)
    const parsedSymbol = parseFullSymbol(symbolInfo.full_name)
    const urlParameters = {
      e: parsedSymbol.exchange,
      fsym: parsedSymbol.fromSymbol,
      tsym: parsedSymbol.toSymbol,
      toTs: to,
      limit: 2000,
    }
    const query = Object.keys(urlParameters)
      .map((name) => `${name}=${encodeURIComponent(urlParameters[name])}`)
      .join('&')
    try {
      const data = await makeApiRequest(`data/histoday?${query}`)
      if (
        (data.Response && data.Response === 'Error') ||
        data.Data.length === 0
      ) {
        // "noData" should be set if there is no data in the requested period.
        onHistoryCallback([], {
          noData: true,
        })
        return
      }
      let bars = []
      data.Data.forEach((bar) => {
        if (bar.time >= from && bar.time < to) {
          bars = [
            ...bars,
            {
              time: bar.time * 1000,
              low: bar.low,
              high: bar.high,
              open: bar.open,
              close: bar.close,
            },
          ]
        }
      })
      if (firstDataRequest) {
        lastBarsCache.set(symbolInfo.full_name, {
          ...bars[bars.length - 1],
        })
      }
      console.log(`[getBars]: returned ${bars.length} bar(s)`)
      onHistoryCallback(bars, {
        noData: false,
      })
    } catch (error) {
      console.log('[getBars]: Get error', error)
      onErrorCallback(error)
    }
  },
  subscribeBars: (
    symbolInfo,
    resolution,
    onRealtimeCallback,
    subscribeUID,
    onResetCacheNeededCallback
  ) => {
    console.log('DataFeed.subscribeBars')
  },
  unsubscribeBars: (subscriberUID) => {
    console.log('DataFeed.unsubscribeBars')
  },

  /* optional methods */
  getServerTime: (cb) => {
    console.log('DataFeed.getServerTime')
  },
  calculateHistoryDepth: (resolution, resolutionBack, intervalBack) => {
    console.log('DataFeed.calculateHistoryDepth')
  },
  getMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
    console.log('DataFeed.getMarks')
  },
  getTimeScaleMarks: (
    symbolInfo,
    startDate,
    endDate,
    onDataCallback,
    resolution
  ) => {
    console.log('DataFeed.getTimeScaleMarks')
  },
}
export class TVChartContainer extends React.PureComponent {
  static defaultProps = {
    symbol: 'Bitfinex:BTC/USD', // default symbol
    // symbol: 'Coinbase:BTC/USD', // default symbol
    datafeed: DataFeed,
    interval: '1D',
    libraryPath: '/static/charting_library/',
    chartsStorageUrl: 'https://saveload.tradingview.com',
    chartsStorageApiVersion: '1.1',
    clientId: 'tradingview.com',
    userId: 'neosavvy',
    fullscreen: true,
    autosize: true,
    studiesOverrides: {},
  }

  tvWidget = null

  constructor(props) {
    super(props)
    console.log('Constructor')
    this.ref = React.createRef()
  }

  componentDidMount() {
    console.log('CompDidMount')
    const widgetOptions = {
      symbol: this.props.symbol,
      // BEWARE: no trailing slash is expected in feed URL
      // datafeed: Datafeed,
      datafeed: this.props.datafeed,
      interval: this.props.interval,
      container: this.ref.current,
      library_path: this.props.libraryPath,
      theme: 'dark',

      locale: getLanguageFromURL() || 'en',
      disabled_features: [
        'use_localstorage_for_settings',
        'header_symbol_search',
        'symbol_search_hot_key',
        'header_resolutions',
        'header_interval_dialog_button',
        'show_interval_dialog_on_key_press',
        'header_chart_type',
        'header_settings',
        'header_indicators',
        'header_compare',
        'header_undo_redo',
        'header_screenshot',
        'header_fullscreen_button',
        'border_around_the_chart',
        'header_saveload',
        'left_toolbar',
        'control_bar',
        'timeframes_toolbar',
        'object_tree_legend_mode',
        'drawing_templates',
        'insert_indicator_dialog_shortcut',
        'study_templates',
      ],
      enabled_features: [],
      charts_storage_url: this.props.chartsStorageUrl,
      charts_storage_api_version: this.props.chartsStorageApiVersion,
      client_id: this.props.clientId,
      user_id: this.props.userId,
      fullscreen: this.props.fullscreen,
      autosize: this.props.autosize,
      studies_overrides: this.props.studiesOverrides,
      // custom_indicators_getter: customIndicator
    }

    const tvWidget = new widget(widgetOptions)
    this.tvWidget = tvWidget

    tvWidget.onChartReady(() => {
      tvWidget.headerReady().then(() => {
        const button = tvWidget.createButton()
        button.setAttribute('title', 'Click to show a notification popup')
        button.classList.add('apply-common-tooltip')
        button.addEventListener('click', () =>
          tvWidget.showNoticeDialog({
            title: 'Notification',
            body: 'TradingView Charting Library API works correctly',
            callback: () => {
              console.log('Noticed!')
            },
          })
        )

        button.innerHTML = 'Show Sentiment'
      })
    })
  }

  componentWillUnmount() {
    if (this.tvWidget !== null) {
      this.tvWidget.remove()
      this.tvWidget = null
    }
  }

  render() {
    console.log('Render!!')
    return (
      <>
        <header className={styles.VersionHeader} />
        <div ref={this.ref} className={styles.TVChartContainer} />
      </>
    )
  }
}
