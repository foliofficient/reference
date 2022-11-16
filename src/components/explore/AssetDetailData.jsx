import React, { useEffect, useState } from 'react'
import Chart from '@qognicafinance/react-lightweight-charts'
import axios from 'axios'
import _ from 'lodash'
import moment from 'moment'

var darkTheme = {
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
    topColor: 'rgba(32, 226, 47, 0.56)',
    bottomColor: 'rgba(32, 226, 47, 0.04)',
    lineColor: 'rgba(32, 226, 47, 1)',
  },
}
let red = darkTheme
red.series = {
  topColor: 'rgba(226, 32, 47, 0.56)',
  bottomColor: 'rgba(226, 32,  47, 0.04)',
  lineColor: 'rgba(226, 32, 47, 1)',
}

var areaSeries = {
  topColor: 'rgba(33, 150, 243, 0.56)',
  bottomColor: 'rgba(33, 150, 243, 0.04)',
  lineColor: 'rgba(33, 150, 243, 1)',
  lineWidth: 2,
}

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

const AssetDetailData = ({ priceInfo, discordGuildId, githubParam }) => {
  const [data, setData] = useState([])
  const [posSentiment, setPosSentiment] = useState([])
  const [negSentiment, setNegSentiment] = useState([])
  const [priceData, setPriceData] = useState([])
  useEffect(() => {
    const retrieveOHLCVdata = async (protocol) => {
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

  return data && data.length > 0 ? (
    <div className="flex flex-col  bg-slate-600">
      <div className="flex flex-row bg-slate-300">
        <Chart
          darkTheme={true}
          options={options}
          candlestickSeries={[{ data: priceData }]}
          height={400}
          autoWidth={true}
        />
      </div>
      <div className="flex flex-row justify-center bg-slate-300">
        <Chart
          darkTheme={true}
          options={options}
          areaSeries={[{ data: data }]}
          height={200}
          autoWidth={true}
        />
      </div>
      <div className="flex flex-row justify-center bg-slate-300">
        <Chart
          darkTheme={true}
          options={options}
          areaSeries={[{ data: posSentiment }]}
          height={200}
          autoWidth={true}
        />
      </div>
      <div className="flex flex-row justify-center bg-slate-300">
        <Chart
          darkTheme={true}
          options={red}
          areaSeries={[{ data: negSentiment }]}
          height={200}
          autoWidth={true}
        />
      </div>
    </div>
  ) : null
}

export default AssetDetailData
