import { Head, Html, Main, NextScript } from 'next/document'

const GA_PROJECT = process.env.GOOGLE_ANALYTICS_PROJECT_ID

export default function Document() {
  const GA_TM_URL = `https://www.googletagmanager.com/gtag/js?id=${GA_PROJECT}`
  const GA_TM_SCRIPT = `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_PROJECT}');`
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head>
        <script async src={GA_TM_URL}></script>
        <script dangerouslySetInnerHTML={{ __html: GA_TM_SCRIPT }} />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
