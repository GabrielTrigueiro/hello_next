import Head from "next/head"
import styles from "../styles/Contact.module.css"

export default function Contact() {
    return(
        <>
            <Head>
                <title>Contatos</title>
                {/* <meta name="keyowords" content="Roupas, Calçados, Boné"></meta>
                <meta name="description" content="Encontre a melhor roupa para você"></meta> */}
            </Head>
            <div> 
                <h1 className={styles.title}>Página de contato</h1>
            </div>
        </>
    )
}