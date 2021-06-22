import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Home({title, type, onClick, style}) {
  return (
    <div className={styles[type]} onClick={onClick} style={style}>
      <span>
        {title}
      </span>
    </div>
  )
}
