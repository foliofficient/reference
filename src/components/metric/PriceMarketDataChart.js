import { withSize } from 'react-sizeme'

function PriceMarketDataChart({ size }) {
  console.log('This is in PriceMarketDataChart')
  return (
    <div>
      <h1>Width: {size.width}</h1>
      <h1>Height: {size.height}</h1>
    </div>
  )
}

export default withSize({
  monitorHeight: true,
})(PriceMarketDataChart)
