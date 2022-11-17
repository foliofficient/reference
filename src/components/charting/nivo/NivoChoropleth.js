/**
 * https://nivo.rocks/marimekko/
 */

import { ResponsiveChoropleth } from '@nivo/geo'
import worldCountries from './worldCountries'
const sampleData = [
  {
    id: 'AFG',
    value: 21522,
  },
  {
    id: 'AGO',
    value: 938855,
  },
  {
    id: 'ALB',
    value: 631273,
  },
  {
    id: 'ARE',
    value: 784918,
  },
  {
    id: 'ARG',
    value: 509335,
  },
  {
    id: 'ARM',
    value: 97710,
  },
  {
    id: 'ATA',
    value: 172516,
  },
  {
    id: 'ATF',
    value: 405422,
  },
  {
    id: 'AUT',
    value: 218323,
  },
  {
    id: 'AZE',
    value: 439755,
  },
  {
    id: 'BDI',
    value: 962362,
  },
  {
    id: 'BEL',
    value: 546592,
  },
  {
    id: 'BEN',
    value: 555684,
  },
  {
    id: 'BFA',
    value: 972834,
  },
  {
    id: 'BGD',
    value: 940350,
  },
  {
    id: 'BGR',
    value: 44487,
  },
  {
    id: 'BHS',
    value: 533971,
  },
  {
    id: 'BIH',
    value: 432445,
  },
  {
    id: 'BLR',
    value: 936138,
  },
  {
    id: 'BLZ',
    value: 193182,
  },
  {
    id: 'BOL',
    value: 387215,
  },
  {
    id: 'BRN',
    value: 354181,
  },
  {
    id: 'BTN',
    value: 656632,
  },
  {
    id: 'BWA',
    value: 266992,
  },
  {
    id: 'CAF',
    value: 51128,
  },
  {
    id: 'CAN',
    value: 808218,
  },
  {
    id: 'CHE',
    value: 624617,
  },
  {
    id: 'CHL',
    value: 646708,
  },
  {
    id: 'CHN',
    value: 802216,
  },
  {
    id: 'CIV',
    value: 732169,
  },
  {
    id: 'CMR',
    value: 827424,
  },
  {
    id: 'COG',
    value: 892466,
  },
  {
    id: 'COL',
    value: 427367,
  },
  {
    id: 'CRI',
    value: 552137,
  },
  {
    id: 'CUB',
    value: 256893,
  },
  {
    id: '-99',
    value: 604680,
  },
  {
    id: 'CYP',
    value: 307178,
  },
  {
    id: 'CZE',
    value: 511824,
  },
  {
    id: 'DEU',
    value: 852725,
  },
  {
    id: 'DJI',
    value: 767076,
  },
  {
    id: 'DNK',
    value: 677974,
  },
  {
    id: 'DOM',
    value: 398769,
  },
  {
    id: 'DZA',
    value: 849874,
  },
  {
    id: 'ECU',
    value: 790862,
  },
  {
    id: 'EGY',
    value: 794161,
  },
  {
    id: 'ERI',
    value: 734893,
  },
  {
    id: 'ESP',
    value: 15548,
  },
  {
    id: 'EST',
    value: 239616,
  },
  {
    id: 'ETH',
    value: 2036,
  },
  {
    id: 'FIN',
    value: 404068,
  },
  {
    id: 'FJI',
    value: 74215,
  },
  {
    id: 'FLK',
    value: 959361,
  },
  {
    id: 'FRA',
    value: 66334,
  },
  {
    id: 'GAB',
    value: 626800,
  },
  {
    id: 'GBR',
    value: 747805,
  },
  {
    id: 'GEO',
    value: 235667,
  },
  {
    id: 'GHA',
    value: 208238,
  },
  {
    id: 'GIN',
    value: 245599,
  },
  {
    id: 'GMB',
    value: 923164,
  },
  {
    id: 'GNB',
    value: 236983,
  },
  {
    id: 'GNQ',
    value: 573007,
  },
  {
    id: 'GRC',
    value: 392234,
  },
  {
    id: 'GTM',
    value: 960278,
  },
  {
    id: 'GUY',
    value: 21128,
  },
  {
    id: 'HND',
    value: 654974,
  },
  {
    id: 'HRV',
    value: 623847,
  },
  {
    id: 'HTI',
    value: 197485,
  },
  {
    id: 'HUN',
    value: 966663,
  },
  {
    id: 'IDN',
    value: 704038,
  },
  {
    id: 'IND',
    value: 805575,
  },
  {
    id: 'IRL',
    value: 798455,
  },
  {
    id: 'IRN',
    value: 672556,
  },
  {
    id: 'IRQ',
    value: 705151,
  },
  {
    id: 'ISL',
    value: 354526,
  },
  {
    id: 'ISR',
    value: 198284,
  },
  {
    id: 'ITA',
    value: 243953,
  },
  {
    id: 'JAM',
    value: 501265,
  },
  {
    id: 'JOR',
    value: 970468,
  },
  {
    id: 'JPN',
    value: 684414,
  },
  {
    id: 'KAZ',
    value: 558265,
  },
  {
    id: 'KEN',
    value: 690691,
  },
  {
    id: 'KGZ',
    value: 951436,
  },
  {
    id: 'KHM',
    value: 238420,
  },
  {
    id: 'OSA',
    value: 818089,
  },
  {
    id: 'KWT',
    value: 228565,
  },
  {
    id: 'LAO',
    value: 741018,
  },
  {
    id: 'LBN',
    value: 126406,
  },
  {
    id: 'LBR',
    value: 645083,
  },
  {
    id: 'LBY',
    value: 851489,
  },
  {
    id: 'LKA',
    value: 187336,
  },
  {
    id: 'LSO',
    value: 947337,
  },
  {
    id: 'LTU',
    value: 105657,
  },
  {
    id: 'LUX',
    value: 375167,
  },
  {
    id: 'LVA',
    value: 30669,
  },
  {
    id: 'MAR',
    value: 526734,
  },
  {
    id: 'MDA',
    value: 842939,
  },
  {
    id: 'MDG',
    value: 785065,
  },
  {
    id: 'MEX',
    value: 497869,
  },
  {
    id: 'MKD',
    value: 456473,
  },
  {
    id: 'MLI',
    value: 410443,
  },
  {
    id: 'MMR',
    value: 582441,
  },
  {
    id: 'MNE',
    value: 568471,
  },
  {
    id: 'MNG',
    value: 608823,
  },
  {
    id: 'MOZ',
    value: 325187,
  },
  {
    id: 'MRT',
    value: 41229,
  },
  {
    id: 'MWI',
    value: 451235,
  },
  {
    id: 'MYS',
    value: 151306,
  },
  {
    id: 'NAM',
    value: 574710,
  },
  {
    id: 'NCL',
    value: 217438,
  },
  {
    id: 'NER',
    value: 949891,
  },
  {
    id: 'NGA',
    value: 525392,
  },
  {
    id: 'NIC',
    value: 322533,
  },
  {
    id: 'NLD',
    value: 373450,
  },
  {
    id: 'NOR',
    value: 748022,
  },
  {
    id: 'NPL',
    value: 707587,
  },
  {
    id: 'NZL',
    value: 961863,
  },
  {
    id: 'OMN',
    value: 511478,
  },
  {
    id: 'PAK',
    value: 530080,
  },
  {
    id: 'PAN',
    value: 979978,
  },
  {
    id: 'PER',
    value: 811244,
  },
  {
    id: 'PHL',
    value: 565139,
  },
  {
    id: 'PNG',
    value: 173020,
  },
  {
    id: 'POL',
    value: 244005,
  },
  {
    id: 'PRI',
    value: 6390,
  },
  {
    id: 'PRT',
    value: 911009,
  },
  {
    id: 'PRY',
    value: 35865,
  },
  {
    id: 'QAT',
    value: 617077,
  },
  {
    id: 'ROU',
    value: 508516,
  },
  {
    id: 'RUS',
    value: 611476,
  },
  {
    id: 'RWA',
    value: 719845,
  },
  {
    id: 'ESH',
    value: 372238,
  },
  {
    id: 'SAU',
    value: 598574,
  },
  {
    id: 'SDN',
    value: 987878,
  },
  {
    id: 'SDS',
    value: 508502,
  },
  {
    id: 'SEN',
    value: 26220,
  },
  {
    id: 'SLB',
    value: 482599,
  },
  {
    id: 'SLE',
    value: 487730,
  },
  {
    id: 'SLV',
    value: 490462,
  },
  {
    id: 'ABV',
    value: 280254,
  },
  {
    id: 'SOM',
    value: 899348,
  },
  {
    id: 'SRB',
    value: 14609,
  },
  {
    id: 'SUR',
    value: 458124,
  },
  {
    id: 'SVK',
    value: 328784,
  },
  {
    id: 'SVN',
    value: 529907,
  },
  {
    id: 'SWZ',
    value: 19258,
  },
  {
    id: 'SYR',
    value: 657090,
  },
  {
    id: 'TCD',
    value: 300233,
  },
  {
    id: 'TGO',
    value: 599574,
  },
  {
    id: 'THA',
    value: 954788,
  },
  {
    id: 'TJK',
    value: 567347,
  },
  {
    id: 'TKM',
    value: 892754,
  },
  {
    id: 'TLS',
    value: 943341,
  },
  {
    id: 'TTO',
    value: 915934,
  },
  {
    id: 'TUN',
    value: 713430,
  },
  {
    id: 'TUR',
    value: 915315,
  },
  {
    id: 'TWN',
    value: 66937,
  },
  {
    id: 'TZA',
    value: 444722,
  },
  {
    id: 'UGA',
    value: 209345,
  },
  {
    id: 'UKR',
    value: 596686,
  },
  {
    id: 'URY',
    value: 290638,
  },
  {
    id: 'USA',
    value: 638475,
  },
  {
    id: 'UZB',
    value: 261072,
  },
  {
    id: 'VEN',
    value: 211341,
  },
  {
    id: 'VNM',
    value: 211101,
  },
  {
    id: 'VUT',
    value: 352531,
  },
  {
    id: 'PSE',
    value: 419998,
  },
  {
    id: 'YEM',
    value: 849345,
  },
  {
    id: 'ZAF',
    value: 360177,
  },
  {
    id: 'ZMB',
    value: 939444,
  },
  {
    id: 'ZWE',
    value: 240118,
  },
  {
    id: 'KOR',
    value: 432501,
  },
]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const ChloroplethChart = ({ data = sampleData }) => (
  <ResponsiveChoropleth
    data={data}
    features={worldCountries.features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="nivo"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    enableGraticule={true}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
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
      {
        id: 'gradient',
        type: 'linearGradient',
        colors: [
          {
            offset: 0,
            color: '#000',
          },
          {
            offset: 100,
            color: 'inherit',
          },
        ],
      },
    ]}
    fill={[
      {
        match: {
          id: 'CAN',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'CHN',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'ATA',
        },
        id: 'gradient',
      },
    ]}
    legends={[
      {
        anchor: 'bottom-left',
        direction: 'column',
        justify: true,
        translateX: 20,
        translateY: -100,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: 'left-to-right',
        itemTextColor: '#444444',
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000000',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
)

export default function NivoChoropleth({ width, height }) {
  return (
    <div style={{ width, height }}>
      <ChloroplethChart />
    </div>
  )
}
