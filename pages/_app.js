import '../styles/globals.css'
import 'react-virtualized/styles.css';

import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Footer from '../components/Footer';
import NavHeader from '../components/Nav';
import SideBar from '../components/SideBar';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>

      <NextNprogress
        color="rgb(255, 105, 0)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <Head>
        <link rel="icon" href="/eyos-favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>

      <NavHeader/>
      
      <main className={styles.main}>
        <SideBar/>
        <div style={{width:'100%', height:'100%', overflow:"auto"}}>
          <Component {...pageProps} />
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default MyApp
