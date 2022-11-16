import { withSize } from 'react-sizeme'
import dynamic from 'next/dynamic'

const TVChartContainer = dynamic(
  () =>
    import('@/components/metric/TVChartContainer').then(
      (mod) => mod.TVChartContainer
    ),
  { ssr: false }
)

function TVPriceMarketDataChart({ size }) {
  console.log('This is in PriceMarketDataChart')
  return (
    <div>
      <h1>Width: {size.width}</h1>
      <h1>Height: {size.height}</h1>
      <TVChartContainer />
    </div>
  )
}

export default withSize({
  monitorHeight: true,
})(TVPriceMarketDataChart)
