import { Mosaic, MosaicWindow } from 'react-mosaic-component'
import PriceMarketDataChart from '@/components/metric/PriceMarketDataChart'

export type ViewId = 'a' | 'b' | 'new'

const TestMosaicSize = () => {
  const TITLE_MAP: Record<ViewId, string> = {
    a: 'Market Data BTC',
    b: 'Market Data ETH',
    new: 'New Window',
  }

  const ELEMENT_MAP: Record<ViewId, JSX.Element> = {
    a: <PriceMarketDataChart />,
    b: <PriceMarketDataChart />,
    new: <div>This is new</div>,
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
        second: 'b',
      }}
    />
  )
}

export default TestMosaicSize
