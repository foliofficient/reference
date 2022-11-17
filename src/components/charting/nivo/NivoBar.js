// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'

const sampleData = [
  {
    country: 'AD',
    'hot dog': 126,
    'hot dogColor': 'hsl(48, 70%, 50%)',
    burger: 125,
    burgerColor: 'hsl(128, 70%, 50%)',
    sandwich: 174,
    sandwichColor: 'hsl(19, 70%, 50%)',
    kebab: 13,
    kebabColor: 'hsl(120, 70%, 50%)',
    fries: 139,
    friesColor: 'hsl(225, 70%, 50%)',
    donut: 75,
    donutColor: 'hsl(38, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 14,
    'hot dogColor': 'hsl(124, 70%, 50%)',
    burger: 13,
    burgerColor: 'hsl(320, 70%, 50%)',
    sandwich: 163,
    sandwichColor: 'hsl(101, 70%, 50%)',
    kebab: 111,
    kebabColor: 'hsl(346, 70%, 50%)',
    fries: 160,
    friesColor: 'hsl(174, 70%, 50%)',
    donut: 165,
    donutColor: 'hsl(57, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 27,
    'hot dogColor': 'hsl(22, 70%, 50%)',
    burger: 184,
    burgerColor: 'hsl(57, 70%, 50%)',
    sandwich: 135,
    sandwichColor: 'hsl(18, 70%, 50%)',
    kebab: 75,
    kebabColor: 'hsl(5, 70%, 50%)',
    fries: 5,
    friesColor: 'hsl(149, 70%, 50%)',
    donut: 5,
    donutColor: 'hsl(158, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 78,
    'hot dogColor': 'hsl(348, 70%, 50%)',
    burger: 177,
    burgerColor: 'hsl(324, 70%, 50%)',
    sandwich: 178,
    sandwichColor: 'hsl(259, 70%, 50%)',
    kebab: 94,
    kebabColor: 'hsl(70, 70%, 50%)',
    fries: 166,
    friesColor: 'hsl(352, 70%, 50%)',
    donut: 169,
    donutColor: 'hsl(272, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 44,
    'hot dogColor': 'hsl(115, 70%, 50%)',
    burger: 160,
    burgerColor: 'hsl(34, 70%, 50%)',
    sandwich: 115,
    sandwichColor: 'hsl(157, 70%, 50%)',
    kebab: 186,
    kebabColor: 'hsl(266, 70%, 50%)',
    fries: 5,
    friesColor: 'hsl(354, 70%, 50%)',
    donut: 165,
    donutColor: 'hsl(281, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 80,
    'hot dogColor': 'hsl(220, 70%, 50%)',
    burger: 4,
    burgerColor: 'hsl(179, 70%, 50%)',
    sandwich: 27,
    sandwichColor: 'hsl(186, 70%, 50%)',
    kebab: 8,
    kebabColor: 'hsl(341, 70%, 50%)',
    fries: 17,
    friesColor: 'hsl(209, 70%, 50%)',
    donut: 15,
    donutColor: 'hsl(127, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 129,
    'hot dogColor': 'hsl(10, 70%, 50%)',
    burger: 18,
    burgerColor: 'hsl(137, 70%, 50%)',
    sandwich: 115,
    sandwichColor: 'hsl(219, 70%, 50%)',
    kebab: 67,
    kebabColor: 'hsl(43, 70%, 50%)',
    fries: 147,
    friesColor: 'hsl(134, 70%, 50%)',
    donut: 118,
    donutColor: 'hsl(112, 70%, 50%)',
  },
]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const ResponsiveNivoBar = ({ data = sampleData }) => (
  <ResponsiveBar
    data={data}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'fries',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'sandwich',
        },
        id: 'lines',
      },
    ]}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function (e) {
      return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
    }}
  />
)

export default function NivoBar({ width, height }) {
  return (
    <div
      style={{
        width,
        height,
      }}
    >
      <ResponsiveNivoBar />
    </div>
  )
}
