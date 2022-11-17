import React from 'react'
import { Mosaic, MosaicWindow } from 'react-mosaic-component'
import assetMap from '@/components/explore/assetMap'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import VSimpleBar from '@/components/charting/victory/VSimpleBar'

export type ViewId = 'a' | 'b' | 'c' | 'new'

const TestWMSimpleCharts = () => {
  const assetInfo = assetMap['ethereum']
  const { priceInfo, discordGuildId, githubParam } = assetInfo

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
