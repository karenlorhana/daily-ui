import type { AppProps } from 'next/app'
import '../styles/day002.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
