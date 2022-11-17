import { ResponsiveTreeMap } from '@nivo/treemap'

const sampleData = {
  name: 'nivo',
  color: 'hsl(3, 70%, 50%)',
  children: [
    {
      name: 'viz',
      color: 'hsl(246, 70%, 50%)',
      children: [
        {
          name: 'stack',
          color: 'hsl(85, 70%, 50%)',
          children: [
            {
              name: 'cchart',
              color: 'hsl(128, 70%, 50%)',
              loc: 129859,
            },
            {
              name: 'xAxis',
              color: 'hsl(206, 70%, 50%)',
              loc: 174098,
            },
            {
              name: 'yAxis',
              color: 'hsl(350, 70%, 50%)',
              loc: 131825,
            },
            {
              name: 'layers',
              color: 'hsl(111, 70%, 50%)',
              loc: 167596,
            },
          ],
        },
        {
          name: 'ppie',
          color: 'hsl(251, 70%, 50%)',
          children: [
            {
              name: 'chart',
              color: 'hsl(288, 70%, 50%)',
              children: [
                {
                  name: 'pie',
                  color: 'hsl(65, 70%, 50%)',
                  children: [
                    {
                      name: 'outline',
                      color: 'hsl(8, 70%, 50%)',
                      loc: 19785,
                    },
                    {
                      name: 'slices',
                      color: 'hsl(42, 70%, 50%)',
                      loc: 51810,
                    },
                    {
                      name: 'bbox',
                      color: 'hsl(228, 70%, 50%)',
                      loc: 18356,
                    },
                  ],
                },
                {
                  name: 'donut',
                  color: 'hsl(222, 70%, 50%)',
                  loc: 139575,
                },
                {
                  name: 'gauge',
                  color: 'hsl(220, 70%, 50%)',
                  loc: 22134,
                },
              ],
            },
            {
              name: 'legends',
              color: 'hsl(70, 70%, 50%)',
              loc: 197865,
            },
          ],
        },
      ],
    },
    {
      name: 'colors',
      color: 'hsl(221, 70%, 50%)',
      children: [
        {
          name: 'rgb',
          color: 'hsl(284, 70%, 50%)',
          loc: 68212,
        },
        {
          name: 'hsl',
          color: 'hsl(199, 70%, 50%)',
          loc: 98575,
        },
      ],
    },
    {
      name: 'utils',
      color: 'hsl(154, 70%, 50%)',
      children: [
        {
          name: 'randomize',
          color: 'hsl(227, 70%, 50%)',
          loc: 98390,
        },
        {
          name: 'resetClock',
          color: 'hsl(305, 70%, 50%)',
          loc: 189361,
        },
        {
          name: 'noop',
          color: 'hsl(289, 70%, 50%)',
          loc: 107894,
        },
        {
          name: 'tick',
          color: 'hsl(270, 70%, 50%)',
          loc: 96163,
        },
        {
          name: 'forceGC',
          color: 'hsl(255, 70%, 50%)',
          loc: 19590,
        },
        {
          name: 'stackTrace',
          color: 'hsl(23, 70%, 50%)',
          loc: 43294,
        },
        {
          name: 'dbg',
          color: 'hsl(65, 70%, 50%)',
          loc: 86916,
        },
      ],
    },
    {
      name: 'generators',
      color: 'hsl(56, 70%, 50%)',
      children: [
        {
          name: 'address',
          color: 'hsl(192, 70%, 50%)',
          loc: 32934,
        },
        {
          name: 'city',
          color: 'hsl(105, 70%, 50%)',
          loc: 157740,
        },
        {
          name: 'animal',
          color: 'hsl(319, 70%, 50%)',
          loc: 10676,
        },
        {
          name: 'movie',
          color: 'hsl(72, 70%, 50%)',
          loc: 4442,
        },
        {
          name: 'user',
          color: 'hsl(204, 70%, 50%)',
          loc: 2996,
        },
      ],
    },
    {
      name: 'set',
      color: 'hsl(35, 70%, 50%)',
      children: [
        {
          name: 'clone',
          color: 'hsl(218, 70%, 50%)',
          loc: 95727,
        },
        {
          name: 'intersect',
          color: 'hsl(78, 70%, 50%)',
          loc: 6694,
        },
        {
          name: 'merge',
          color: 'hsl(309, 70%, 50%)',
          loc: 199602,
        },
        {
          name: 'reverse',
          color: 'hsl(214, 70%, 50%)',
          loc: 120162,
        },
        {
          name: 'toArray',
          color: 'hsl(57, 70%, 50%)',
          loc: 88848,
        },
        {
          name: 'toObject',
          color: 'hsl(137, 70%, 50%)',
          loc: 7485,
        },
        {
          name: 'fromCSV',
          color: 'hsl(289, 70%, 50%)',
          loc: 136081,
        },
        {
          name: 'slice',
          color: 'hsl(14, 70%, 50%)',
          loc: 141825,
        },
        {
          name: 'append',
          color: 'hsl(156, 70%, 50%)',
          loc: 85724,
        },
        {
          name: 'prepend',
          color: 'hsl(328, 70%, 50%)',
          loc: 181226,
        },
        {
          name: 'shuffle',
          color: 'hsl(356, 70%, 50%)',
          loc: 181956,
        },
        {
          name: 'pick',
          color: 'hsl(208, 70%, 50%)',
          loc: 11701,
        },
        {
          name: 'plouc',
          color: 'hsl(118, 70%, 50%)',
          loc: 100542,
        },
      ],
    },
    {
      name: 'text',
      color: 'hsl(334, 70%, 50%)',
      children: [
        {
          name: 'trim',
          color: 'hsl(347, 70%, 50%)',
          loc: 88758,
        },
        {
          name: 'slugify',
          color: 'hsl(202, 70%, 50%)',
          loc: 91954,
        },
        {
          name: 'snakeCase',
          color: 'hsl(133, 70%, 50%)',
          loc: 50265,
        },
        {
          name: 'camelCase',
          color: 'hsl(37, 70%, 50%)',
          loc: 196024,
        },
        {
          name: 'repeat',
          color: 'hsl(220, 70%, 50%)',
          loc: 16675,
        },
        {
          name: 'padLeft',
          color: 'hsl(21, 70%, 50%)',
          loc: 169524,
        },
        {
          name: 'padRight',
          color: 'hsl(291, 70%, 50%)',
          loc: 16223,
        },
        {
          name: 'sanitize',
          color: 'hsl(147, 70%, 50%)',
          loc: 51791,
        },
        {
          name: 'ploucify',
          color: 'hsl(279, 70%, 50%)',
          loc: 80868,
        },
      ],
    },
    {
      name: 'misc',
      color: 'hsl(342, 70%, 50%)',
      children: [
        {
          name: 'greetings',
          color: 'hsl(195, 70%, 50%)',
          children: [
            {
              name: 'hey',
              color: 'hsl(220, 70%, 50%)',
              loc: 199515,
            },
            {
              name: 'HOWDY',
              color: 'hsl(25, 70%, 50%)',
              loc: 134007,
            },
            {
              name: 'aloha',
              color: 'hsl(186, 70%, 50%)',
              loc: 64572,
            },
            {
              name: 'AHOY',
              color: 'hsl(299, 70%, 50%)',
              loc: 64869,
            },
          ],
        },
        {
          name: 'other',
          color: 'hsl(360, 70%, 50%)',
          loc: 112749,
        },
        {
          name: 'path',
          color: 'hsl(105, 70%, 50%)',
          children: [
            {
              name: 'pathA',
              color: 'hsl(176, 70%, 50%)',
              loc: 17619,
            },
            {
              name: 'pathB',
              color: 'hsl(334, 70%, 50%)',
              children: [
                {
                  name: 'pathB1',
                  color: 'hsl(348, 70%, 50%)',
                  loc: 105035,
                },
                {
                  name: 'pathB2',
                  color: 'hsl(97, 70%, 50%)',
                  loc: 2668,
                },
                {
                  name: 'pathB3',
                  color: 'hsl(101, 70%, 50%)',
                  loc: 123404,
                },
                {
                  name: 'pathB4',
                  color: 'hsl(231, 70%, 50%)',
                  loc: 62832,
                },
              ],
            },
            {
              name: 'pathC',
              color: 'hsl(288, 70%, 50%)',
              children: [
                {
                  name: 'pathC1',
                  color: 'hsl(334, 70%, 50%)',
                  loc: 154513,
                },
                {
                  name: 'pathC2',
                  color: 'hsl(223, 70%, 50%)',
                  loc: 42800,
                },
                {
                  name: 'pathC3',
                  color: 'hsl(88, 70%, 50%)',
                  loc: 103594,
                },
                {
                  name: 'pathC4',
                  color: 'hsl(352, 70%, 50%)',
                  loc: 21430,
                },
                {
                  name: 'pathC5',
                  color: 'hsl(5, 70%, 50%)',
                  loc: 181674,
                },
                {
                  name: 'pathC6',
                  color: 'hsl(98, 70%, 50%)',
                  loc: 199916,
                },
                {
                  name: 'pathC7',
                  color: 'hsl(280, 70%, 50%)',
                  loc: 165684,
                },
                {
                  name: 'pathC8',
                  color: 'hsl(106, 70%, 50%)',
                  loc: 46118,
                },
                {
                  name: 'pathC9',
                  color: 'hsl(274, 70%, 50%)',
                  loc: 23350,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const TreeMapChart = ({ data = sampleData }) => (
  <ResponsiveTreeMap
    data={data}
    identity="name"
    value="loc"
    valueFormat=".02s"
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    labelSkipSize={12}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 1.2]],
    }}
    parentLabelPosition="left"
    parentLabelTextColor={{
      from: 'color',
      modifiers: [['darker', 2]],
    }}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.1]],
    }}
  />
)

export default function NivoTreeMap({ width, height }) {
  return (
    <div style={{ width, height }}>
      <TreeMapChart />
    </div>
  )
}
