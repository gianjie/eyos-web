import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.navHeader}>
      <span className={styles.logo}>
        <Image src="/eyos-connect.svg" alt="eyos one logo" width={161} height={24} />
      </span>
      <h1 style={{fontSize:16, fontFamily:'poppins', fontWeight:'400', marginLeft: 50}}>
        Merchant Management Portal
      </h1>
    </div>
  )
}
