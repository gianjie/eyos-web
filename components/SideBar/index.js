import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

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

  const merchantLinks = [
    {
      title: 'Approved Merchants',
      url: '/Merchants'
    },
    {
      title: 'Pending Approvals',
      url: '/Merchants/Pending'
    },
  ]

  return (
    <div className={styles.sideBarContainer}>
      <ul style={{margin:0, padding:0 }}>
        {sideLinks.map((e, idx) => {
          if(pathName.includes('Merchants') && e.title.includes('Merchants')){
            return (
              <div key={idx} style={{position:'relative'}}>
                <li className={styles.activeSideBar} key={idx}>
                  <Link href={e.url}>
                    <a>{e.title}</a>
                  </Link>
                </li>
                <span style={{position:'absolute', bottom: 55, left: 30}}>
                  <Image src="/l-bar.svg" alt="eyos one logo" width={9} height={39} />
                </span>
                <span style={{position:'absolute', bottom: 15, left: 30}}>
                  <Image src="/l-bar.svg" alt="eyos one logo" width={9} height={43} />
                </span>
                {merchantLinks.map((ee, index) => {
                  return (
                    <li className={pathName === ee.url ? styles.activeMiniNav: styles.miniNav} key={index}>
                      <Link href={ee.url}>
                        <a>{ee.title}</a>
                      </Link>
                    </li>
                  )
                })}
              </div>
            )
          } else {
            return (
              <li className={pathName === e.url? styles.activeSideBar : styles.sideBar} key={idx}>
                <Link href={e.url}>
                  <a>{e.title}</a>
                </Link>
              </li>
            )
          }}
        )}
      </ul>
    </div>
  )
}
