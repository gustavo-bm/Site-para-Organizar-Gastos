import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer} >
            <div className={styles.content} >
                <ul className={styles.social_list} >
                    <li>
                        <a href="https://www.google.com/" target="blank">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/" target="blank">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/" target="blank">
                            <FaLinkedin  />
                        </a>
                    </li>
                </ul>
                <p className={styles.copyright} >
                    <span>Finances</span> &copy; 2024 
                </p>
            </div>
        </footer>
        
            
    )
}

export default Footer