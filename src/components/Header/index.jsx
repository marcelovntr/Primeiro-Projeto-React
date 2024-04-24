import styles from "./style.module.css"
import { Link } from "react-router-dom";

function Header() {
  return ( 
    <header className={styles.header}>
      <Link to="/" className={styles.link}><h4>Adveture Trails FD</h4> </Link>
      <nav className={styles.nav}>
      {/* <a href="#" className={styles.link}>Explorar Trilhas</a> <--- ANTERIOR OU OUTLET E LINK */}
        <Link to="/lista" className={styles.link}>Explorar Trilhas</Link>
        {/* <a href="#" className={styles.link}>Cadastrar Trilhas</a> <--- ANTERIOR OU OUTLET E LINK*/}
        <Link to="/cadastro-trilha" className={styles.link}>Cadastrar Trilhas </Link>
      </nav>
    </header>
  );
}

export default Header;