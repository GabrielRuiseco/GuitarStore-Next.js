import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.content}`}>
        <nav className={styles.navigation}>
          <Link href='/'>Inicio</Link>
          <Link href='/us'>Nosotros</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/store'>Tienda</Link>
        </nav>
        <p className={styles.copyright}>Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
