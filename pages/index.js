import styles from "../styles/Home.module.css"
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div> 
      <h1 className={styles.tittle}>Hello next</h1>
    </div>
  )
}
