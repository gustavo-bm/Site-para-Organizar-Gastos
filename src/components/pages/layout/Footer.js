import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer} >
            <div className={styles.content} >
                <ul className={styles.social_list} >
                    <li>
                        <a href="https://www.google.com/" target="blank">
                            <FaFacebook className={styles.icon}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/" target="blank">
                            <FaInstagram className={styles.icon}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/" target="blank">
                            <FaLinkedin  className={styles.icon}/>
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