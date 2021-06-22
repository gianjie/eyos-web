import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="icon" href="/eyos-favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
