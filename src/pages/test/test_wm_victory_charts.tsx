import React, { useEffect, useRef, useState } from 'react'
import { Mosaic, MosaicWindow } from 'react-mosaic-component'
import Chart from '@qognicafinance/react-lightweight-charts'
import axios from 'axios'
import _ from 'lodash'
import assetMap from '@/components/explore/assetMap'
import moment from 'moment/moment'
import ABNBSimpleStaticBarChart from '@/components/charting/airbnb/ABNBSimpleStaticBarChart'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import ABNBSimpleCurveChart from '@/components/charting/airbnb/ABNBSimpleCurveChart'
import ABNBSimpleAreaClosed from '@/components/charting/airbnb/ABNBSimpleAreaClosed'
import VSimpleBar from '@/components/charting/victory/VSimpleBar'

export type ViewId = 'a' | 'b' | 'c' | 'new'

let options = {
  areaSeries: {
    topColor: 'rgba(33, 150, 243, 0.56)',
    bottomColor: 'rgba(33, 150, 243, 0.04)',
    lineColor: 'rgba(33, 150, 243, 1)',
    lineWidth: 2,
  },
  alignLabels: true,
  crosshairMarkerVisible: false,
  crosshairMarkerRadius: 3,
  // crosshairMarkerBorderColor: 'rgb(255, 255, 255, 1)',
  // crosshairMarkerBackgroundColor: 'rgb(34, 150, 243, 1)',
  watermark: {
    color: 'rgba(33, 150, 243, 0.56)',
    visible: true,
    text: 'Open Eco Research',
    fontSize: 22,
    horzAlign: 'left',
    vertAlign: 'bottom',
  },
  handleScroll: {
    mouseWheel: false,
    pressedMouseMove: false,
  },
  handleScale: {
    axisPressedMouseMove: false,
    mouseWheel: false,
    pinch: false,
  },
  chart: {
    layout: {
      backgroundColor: '#2B2B43',
      lineColor: '#2B2B43',
      textColor: '#D9D9D9',
    },
    watermark: {
      color: 'rgba(0, 0, 0, 0)',
    },
    crosshair: {
      color: '#758696',
    },
    grid: {
      vertLines: {
        color: '#2B2B43',
      },
      horzLines: {
        color: '#363C4E',
      },
    },
  },
  series: {
    topColor: 'rgba(226, 32, 47, 0.56)',
    bottomColor: 'rgba(226, 32,  47, 0.04)',
    lineColor: 'rgba(226, 32, 47, 1)',
  },
}

const TestWMSimpleCharts = () => {
  const assetInfo = assetMap['ethereum']
  const { priceInfo, discordGuildId, githubParam } = assetInfo
  const [posSentiment, setPosSentiment] = useState([])
  const [negSentiment, setNegSentiment] = useState([])
  const [priceData, setPriceData] = useState([])
  const [data, setData] = useState([])
  const [resize, setResize] = useState(false)

  const TITLE_MAP: Record<ViewId, string> = {
    a: 'Market Data',
    b: 'Positive Sentiment',
    c: 'Negative Sentiment',
    new: 'Github Data',
  }

  const ELEMENT_MAP: Record<ViewId, JSX.Element> = {
    a: (
      <ParentSize>
        {({ width, height }) => <VSimpleBar height={height} width={width} />}
      </ParentSize>
    ),
    b: (
      <ParentSize>
        {({ width, height }) => <VSimpleBar height={height} width={width} />}
      </ParentSize>
    ),
    c: (
      <ParentSize>
        {({ width, height }) => <VSimpleBar height={height} width={width} />}
      </ParentSize>
    ),
    new: <h1>New Things go here</h1>,
  }

  useEffect(() => {
    const retrieveOHLCVdata = async () => {
      const result = await axios({
        method: 'get',
        url: `/api/${priceInfo}`,
      })

      if (result) {
        console.log('result: ', result)
        const mappedData = result.data.history.map((item) => {
          const dateObject = new Date(item.time_seconds * 1000)
          const dateTime = moment(dateObject).format('YYYY-MM-DD')

          let obj = {}
          obj['time'] = `${dateTime}`
          obj['open'] = item.open
          obj['high'] = item.high
          obj['low'] = item.low
          obj['close'] = item.close
          return obj
        })

        const filtered = _.filter(mappedData, (item) => {
          return true //return moment(item.time).isAfter('2022-07-31')
        })
        setPriceData(filtered)
      } else {
        return []
      }
    }

    retrieveOHLCVdata()
  }, [])

  return (
    <Mosaic<ViewId>
      blueprintNamespace={'mosaic-blueprint-theme bp3-dark'}
      renderTile={(id, path) => (
        <MosaicWindow<ViewId>
          path={path}
          createNode={() => 'new'}
          title={TITLE_MAP[id]}
        >
          {ELEMENT_MAP[id]}
        </MosaicWindow>
      )}
      initialValue={{
        direction: 'column',
        first: 'a',
        second: {
          direction: 'row',
          first: 'b',
          second: 'c',
        },
      }}
    />
  )
}

export default TestWMSimpleCharts
