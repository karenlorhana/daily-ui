import type { AppProps } from 'next/app'
import '../styles/day001.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
