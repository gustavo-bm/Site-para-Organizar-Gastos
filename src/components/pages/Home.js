import styles from './Home.module.css';
import finances from '../layout/img/finances.jpg';
import LinkButton from '../layout/LinkButton';
import NewProject from './NewProject';

function Home() {
  return (
    <section className={styles.header}>
      <div className={styles.container}>
        <h1>Seja bem-vindo ao <span>Finances!</span></h1>
        <p>Comece a gerenciar suas contas pessoais ou empresariais agora mesmo!</p>
        <LinkButton para="/newproject" text="Nova" />
        <img className={styles.finances} src={finances} alt="Imagem de Finanças" />
      </div>
    </section>
  );
}

export default Home;
