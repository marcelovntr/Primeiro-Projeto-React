import styles from "./style.module.css"

function Footer() {

return(


    <footer className={styles.footer}>
        <span className={styles.esquerda}>Adventure Trails FD

        </span>
        <span className={styles.direita}>
            <img src="../githubiconsmall.png" alt="icone github" />
            <img src="../linkediniconsmall.png" alt="icone linkedin" />
            <img src="../instagramiconsmall.png" alt="icone instagram" />
        </span>
    </footer>

);
}

export default Footer