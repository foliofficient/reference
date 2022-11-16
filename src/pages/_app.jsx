import 'focus-visible'

import '@/styles/tailwind.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import 'react-mosaic-component/react-mosaic-component.css'
import '@/styles/harness.css'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App
