import styles from "../styles/Home.module.css"
import Head from "next/head"
import Image from "next/image"

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
        <Image src="/images/city.jpg" width={400} height={500} alt="cidade a noite"/>
      </div>
    </>
  )
}
