import { VictoryBar } from 'victory'

export default function VSimpleBar({ width, height }) {
  return (
    <div className="container m-10 p-20">
      <VictoryBar height={height} width={width} />
    </div>
  )
}
