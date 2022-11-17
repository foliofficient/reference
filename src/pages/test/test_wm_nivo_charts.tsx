import React from 'react'
import { Mosaic, MosaicWindow } from 'react-mosaic-component'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import NivoMarimekko from '@/components/charting/nivo/NivoMarimekko'
import NivoBar from '@/components/charting/nivo/NivoBar'
import NivoChoropleth from '@/components/charting/nivo/NivoChoropleth'
import NivoLine from '@/components/charting/nivo/NivoLine'
import NivoTreeMap from '@/components/charting/nivo/NivoTreeMap'
import NivoHeatmap from '@/components/charting/nivo/NivoHeatmap'

export type ViewId = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'new'

const TestWMSimpleCharts = () => {
  const TITLE_MAP: Record<ViewId, string> = {
    a: 'Marimekko',
    b: 'NivoBar',
    c: 'Choropleth',
    d: 'Line Chart',
    e: 'Tree Map',
    f: 'Heat Map',
    new: 'Github Data',
  }

  const ELEMENT_MAP: Record<ViewId, JSX.Element> = {
    a: (
      <ParentSize>
        {({ width, height }) => <NivoMarimekko height={height} width={width} />}
      </ParentSize>
    ),
    b: (
      <ParentSize>
        {({ width, height }) => <NivoBar height={height} width={width} />}
      </ParentSize>
    ),
    c: (
      <ParentSize>
        {({ width, height }) => (
          <NivoChoropleth height={height} width={width} />
        )}
      </ParentSize>
    ),
    d: (
      <ParentSize>
        {({ width, height }) => <NivoLine height={height} width={width} />}
      </ParentSize>
    ),
    e: (
      <ParentSize>
        {({ width, height }) => <NivoTreeMap height={height} width={width} />}
      </ParentSize>
    ),
    f: (
      <ParentSize>
        {({ width, height }) => <NivoHeatmap height={height} width={width} />}
      </ParentSize>
    ),
    new: <h1>New Things go here</h1>,
  }

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
        first: {
          direction: 'row',
          first: 'a',
          second: 'b',
        },
        second: {
          direction: 'row',
          first: {
            direction: 'column',
            first: 'c',
            second: 'f',
          },
          second: {
            direction: 'column',
            first: 'd',
            second: 'e',
          },
        },
      }}
    />
  )
}

export default TestWMSimpleCharts
