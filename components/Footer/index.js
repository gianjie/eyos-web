import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.title}
        style={{fontWeight:400, fontSize: 12}}
      >
        Powered by {' '}
        <span className={styles.logo} style={{paddingTop: 2.5}}>
          <Image src="/eyos-logo.png" alt="eyos one logo" width={40} height={15} />
        </span>
      </a>
  </footer>
  )
}
