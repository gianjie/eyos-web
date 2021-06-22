import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  const pathName = router.pathname;
  const sideLinks = [
    {
      title: 'Dashboard',
      url: '/'
    },
    {
      title: 'Merchants',
      url: '/Merchants'
    },
    {
      title: 'Agencies',
      url: '/Agencies'
    },
    {
      title: 'Settings',
      url: '/Settings'
    }
  ]

  return (
    <div className={styles.sideBarContainer}>
      <ul style={{listStyle:'none', margin:0, padding:0 }}>
        {sideLinks.map((e, idx) => 
          <li className={pathName === e.url? styles.activeSideBar : styles.sideBar} key={idx}>
            <Link href={e.url}>
              <a>{e.title}</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}
