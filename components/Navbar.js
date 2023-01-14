import styles from "../styles/Navbar.module.css"
import Link from "next/link";

export default function Navbar(){
    return(
        <ul className={styles.navbar}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/products">Produtos</Link>
            </li>
            <li>
                <Link href="/about">Sobre nós</Link>
            </li>
            <li>
                <Link href="/contact">Contatos</Link>
            </li>
        </ul>
    )
}