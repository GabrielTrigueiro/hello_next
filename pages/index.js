import styles from "../styles/Home.module.css"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
        <meta name="keyowords" content="Roupas, Calçados, Boné"></meta>
        <meta name="description" content="Encontre a melhor roupa para você"></meta>
      </Head>
      <div> 
        <h1 className={styles.tittle}>Hello next</h1>
      </div>
    </>
  )
}
