import React, { useEffect, useState } from 'react'
import TVPriceMarketDataChart from '@/components/metric/TVPriceMarketDataChart'
import { DNAHead } from '@/components/Head'
import dynamic from 'next/dynamic'

const TVChartContainer = dynamic(
  () =>
    import('@/components/metric/TVChartContainer').then(
      (mod) => mod.TVChartContainer
    ),
  { ssr: false }
)

const TestHarness = () => {
  return (
    <>
      <main>
        <TVPriceMarketDataChart />
      </main>
    </>
  )
}

export default TestHarness
