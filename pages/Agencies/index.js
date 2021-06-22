import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import NavHeader from '../../components/Nav';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>eyos one dashboard</title>
        <meta name="description" content="Generated by a team of passionate individual" />
      </Head>
  
      <main className={styles.main}>
        <NavHeader/>
        <div>
          <SideBar/>





        </div>
      </main>
      <Footer/>
    </div>
  )
}
