import { ResponsiveLine } from '@nivo/line'

const sampleData = [
  {
    id: 'japan',
    color: 'hsl(254, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 90,
      },
      {
        x: 'helicopter',
        y: 162,
      },
      {
        x: 'boat',
        y: 298,
      },
      {
        x: 'train',
        y: 80,
      },
      {
        x: 'subway',
        y: 264,
      },
      {
        x: 'bus',
        y: 291,
      },
      {
        x: 'car',
        y: 217,
      },
      {
        x: 'moto',
        y: 82,
      },
      {
        x: 'bicycle',
        y: 102,
      },
      {
        x: 'horse',
        y: 127,
      },
      {
        x: 'skateboard',
        y: 43,
      },
      {
        x: 'others',
        y: 286,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(271, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 168,
      },
      {
        x: 'helicopter',
        y: 10,
      },
      {
        x: 'boat',
        y: 160,
      },
      {
        x: 'train',
        y: 294,
      },
      {
        x: 'subway',
        y: 2,
      },
      {
        x: 'bus',
        y: 35,
      },
      {
        x: 'car',
        y: 130,
      },
      {
        x: 'moto',
        y: 170,
      },
      {
        x: 'bicycle',
        y: 137,
      },
      {
        x: 'horse',
        y: 244,
      },
      {
        x: 'skateboard',
        y: 234,
      },
      {
        x: 'others',
        y: 52,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(280, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 243,
      },
      {
        x: 'helicopter',
        y: 75,
      },
      {
        x: 'boat',
        y: 36,
      },
      {
        x: 'train',
        y: 234,
      },
      {
        x: 'subway',
        y: 23,
      },
      {
        x: 'bus',
        y: 277,
      },
      {
        x: 'car',
        y: 144,
      },
      {
        x: 'moto',
        y: 11,
      },
      {
        x: 'bicycle',
        y: 84,
      },
      {
        x: 'horse',
        y: 297,
      },
      {
        x: 'skateboard',
        y: 273,
      },
      {
        x: 'others',
        y: 272,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(317, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 1,
      },
      {
        x: 'helicopter',
        y: 228,
      },
      {
        x: 'boat',
        y: 298,
      },
      {
        x: 'train',
        y: 214,
      },
      {
        x: 'subway',
        y: 221,
      },
      {
        x: 'bus',
        y: 52,
      },
      {
        x: 'car',
        y: 256,
      },
      {
        x: 'moto',
        y: 105,
      },
      {
        x: 'bicycle',
        y: 196,
      },
      {
        x: 'horse',
        y: 165,
      },
      {
        x: 'skateboard',
        y: 182,
      },
      {
        x: 'others',
        y: 25,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(213, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 271,
      },
      {
        x: 'helicopter',
        y: 55,
      },
      {
        x: 'boat',
        y: 264,
      },
      {
        x: 'train',
        y: 107,
      },
      {
        x: 'subway',
        y: 231,
      },
      {
        x: 'bus',
        y: 263,
      },
      {
        x: 'car',
        y: 229,
      },
      {
        x: 'moto',
        y: 242,
      },
      {
        x: 'bicycle',
        y: 29,
      },
      {
        x: 'horse',
        y: 85,
      },
      {
        x: 'skateboard',
        y: 43,
      },
      {
        x: 'others',
        y: 52,
      },
    ],
  },
]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const LineChart = ({ data = sampleData }) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}
export default function NivoLine({ width, height }) {
  return (
    <div style={{ width, height }}>
      <LineChart />
    </div>
  )
}
