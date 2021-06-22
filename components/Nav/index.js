import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.navHeader}>
      <Link href={'/'}>
        <a className={styles.logo} style={{paddingLeft: 0}}>
          <Image src="/eyos-connect.svg" alt="eyos one logo" width={161} height={24} />
        </a>
      </Link>
      <h1 style={{fontSize:16, fontFamily:'poppins', fontWeight:'400', marginLeft: 50}}>
        Merchant Management Portal
      </h1>
    </div>
  )
}
