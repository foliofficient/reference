import Head from 'next/head'
import { AuthLayout } from '@/components/AuthLayout'
import Link from 'next/link'

const Index = () => {
  return (
    <>
      <Head>
        <title>Reference Implementations</title>
      </Head>
      <AuthLayout
        title="Reference Implementation List"
        subtitle={<>Click on any of these demos</>}
      >
        <>
          <ul>
            {/*<li>*/}
            {/*  <Link href={'/test/test_harness'}>Test Harness</Link>*/}
            {/*</li>*/}
            <li>
              <Link href={'/test/test_mosaic_size'}>Mosaic Size</Link>
            </li>
            <li>
              <Link href={'/test/test_trading_view'}>Trading View</Link>
            </li>
            <li>
              <Link href={'/test/test_wm'}>Test Window Manager</Link>
            </li>
            <li>
              <Link href={'/test/test_wm_abnb_charts'}>Airbnb Charts</Link>
            </li>
            <li>
              <Link href={'/test/test_wm_nivo_charts'}>Nivo Charts</Link>
            </li>
            <li>
              <Link href={'/test/test_wm_victory_charts'}>Victory Charts</Link>
            </li>
          </ul>
        </>
      </AuthLayout>
    </>
  )
}

export default Index
