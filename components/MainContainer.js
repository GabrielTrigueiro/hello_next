import styles from "../styles/MainContainer.module.css"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function MainContainer({children}){
    return(
        <>
            <Navbar/>
            <div className={styles.container}>{children}</div>
            <Footer/>
        </>
    )
}