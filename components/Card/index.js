import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Home({current, increaseBy, title}) {
  return (
    <div className={styles.card}>

      <div style={{display:'flex', justifyContent:'flex-start'}}>
        <h1>
          {current}
        </h1>
        {increaseBy && <span className={styles.logo} style={{paddingLeft: 0}}>
          <Image src="/green-arrow-up.svg" alt="eyos one logo" width={22} height={22} />
          <span style={{color:'#35c930', fontSize: 12}}>{increaseBy}</span>
        </span>}
      </div>

      <h3>
        {title}
      </h3>
    </div>
  )
}
