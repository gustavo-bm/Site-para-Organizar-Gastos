import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from './img/dolar.png'

function Navbar() {
  return (
    <nav class={styles.navbar} >
      <Container>
        <Link to="/" > 
          <img  className={styles.logo} src={logo} alt="finances"/>
        </Link>
        <ul className={styles.list}>
          <li class={styles.item}>
            <Link to="/" >Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects" >Despesas</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company" >Empresa </Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact" >Contato</Link>
          </li>
          
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar