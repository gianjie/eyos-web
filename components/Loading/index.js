import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Home({title, type, onClick, style}) {
  return (
    <div className={styles.loading} onClick={onClick} style={style}>
      <Image src="/eyos-loader.gif" alt="eyos one logo" width={100} height={100} />
    </div>
  )
}
