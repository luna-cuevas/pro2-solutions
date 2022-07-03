import '../styles/globals.css'
import Layout from '../components/Layout'

const _app = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default _app

