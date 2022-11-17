import { ResponsiveHeatMap } from '@nivo/heatmap'

const sampleData = [
  {
    id: 'Japan',
    data: [
      {
        x: 'Train',
        y: 45802,
      },
      {
        x: 'Subway',
        y: -26938,
      },
      {
        x: 'Bus',
        y: 70033,
      },
      {
        x: 'Car',
        y: -10142,
      },
      {
        x: 'Boat',
        y: -63193,
      },
      {
        x: 'Moto',
        y: -67414,
      },
      {
        x: 'Moped',
        y: -46328,
      },
      {
        x: 'Bicycle',
        y: -90753,
      },
      {
        x: 'Others',
        y: 38758,
      },
    ],
  },
  {
    id: 'France',
    data: [
      {
        x: 'Train',
        y: -10180,
      },
      {
        x: 'Subway',
        y: 99629,
      },
      {
        x: 'Bus',
        y: -39621,
      },
      {
        x: 'Car',
        y: 68292,
      },
      {
        x: 'Boat',
        y: -23046,
      },
      {
        x: 'Moto',
        y: 95134,
      },
      {
        x: 'Moped',
        y: -28203,
      },
      {
        x: 'Bicycle',
        y: 25142,
      },
      {
        x: 'Others',
        y: 31469,
      },
    ],
  },
  {
    id: 'US',
    data: [
      {
        x: 'Train',
        y: 15526,
      },
      {
        x: 'Subway',
        y: 88896,
      },
      {
        x: 'Bus',
        y: -78357,
      },
      {
        x: 'Car',
        y: 25597,
      },
      {
        x: 'Boat',
        y: -30403,
      },
      {
        x: 'Moto',
        y: 90208,
      },
      {
        x: 'Moped',
        y: -49507,
      },
      {
        x: 'Bicycle',
        y: 98410,
      },
      {
        x: 'Others',
        y: -82900,
      },
    ],
  },
  {
    id: 'Germany',
    data: [
      {
        x: 'Train',
        y: -97121,
      },
      {
        x: 'Subway',
        y: 83476,
      },
      {
        x: 'Bus',
        y: -77781,
      },
      {
        x: 'Car',
        y: -2033,
      },
      {
        x: 'Boat',
        y: -73586,
      },
      {
        x: 'Moto',
        y: -41897,
      },
      {
        x: 'Moped',
        y: 7959,
      },
      {
        x: 'Bicycle',
        y: -44966,
      },
      {
        x: 'Others',
        y: 88887,
      },
    ],
  },
  {
    id: 'Norway',
    data: [
      {
        x: 'Train',
        y: -28078,
      },
      {
        x: 'Subway',
        y: -70834,
      },
      {
        x: 'Bus',
        y: -28605,
      },
      {
        x: 'Car',
        y: 11669,
      },
      {
        x: 'Boat',
        y: -3911,
      },
      {
        x: 'Moto',
        y: -48577,
      },
      {
        x: 'Moped',
        y: 72298,
      },
      {
        x: 'Bicycle',
        y: -85232,
      },
      {
        x: 'Others',
        y: 59589,
      },
    ],
  },
  {
    id: 'Iceland',
    data: [
      {
        x: 'Train',
        y: 14117,
      },
      {
        x: 'Subway',
        y: -33868,
      },
      {
        x: 'Bus',
        y: 69278,
      },
      {
        x: 'Car',
        y: 16920,
      },
      {
        x: 'Boat',
        y: -19194,
      },
      {
        x: 'Moto',
        y: 88037,
      },
      {
        x: 'Moped',
        y: -33380,
      },
      {
        x: 'Bicycle',
        y: -86774,
      },
      {
        x: 'Others',
        y: -93740,
      },
    ],
  },
  {
    id: 'UK',
    data: [
      {
        x: 'Train',
        y: -22258,
      },
      {
        x: 'Subway',
        y: 37340,
      },
      {
        x: 'Bus',
        y: 5621,
      },
      {
        x: 'Car',
        y: 19553,
      },
      {
        x: 'Boat',
        y: 11197,
      },
      {
        x: 'Moto',
        y: -40143,
      },
      {
        x: 'Moped',
        y: -40690,
      },
      {
        x: 'Bicycle',
        y: -69186,
      },
      {
        x: 'Others',
        y: 41063,
      },
    ],
  },
  {
    id: 'Vietnam',
    data: [
      {
        x: 'Train',
        y: -39461,
      },
      {
        x: 'Subway',
        y: 5855,
      },
      {
        x: 'Bus',
        y: -58357,
      },
      {
        x: 'Car',
        y: -95437,
      },
      {
        x: 'Boat',
        y: 72384,
      },
      {
        x: 'Moto',
        y: 9253,
      },
      {
        x: 'Moped',
        y: 58375,
      },
      {
        x: 'Bicycle',
        y: -16140,
      },
      {
        x: 'Others',
        y: 66925,
      },
    ],
  },
]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const HeatMapChart = ({ data = sampleData }) => (
  <ResponsiveHeatMap
    data={data}
    margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
    valueFormat=">-.2s"
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -90,
      legend: '',
      legendOffset: 46,
    }}
    axisRight={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 70,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: -72,
    }}
    colors={{
      type: 'diverging',
      scheme: 'red_yellow_blue',
      divergeAt: 0.5,
      minValue: -100000,
      maxValue: 100000,
    }}
    emptyColor="#555555"
    legends={[
      {
        anchor: 'bottom',
        translateX: 0,
        translateY: 30,
        length: 400,
        thickness: 8,
        direction: 'row',
        tickPosition: 'after',
        tickSize: 3,
        tickSpacing: 4,
        tickOverlap: false,
        tickFormat: '>-.2s',
        title: 'Value →',
        titleAlign: 'start',
        titleOffset: 4,
      },
    ]}
  />
)

export default function NivoHeatmap({ width, height }) {
  return (
    <div style={{ width, height }}>
      <HeatMapChart />
    </div>
  )
}
