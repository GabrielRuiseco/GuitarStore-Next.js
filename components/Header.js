import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='contenedor'>
        <div className={styles.bar}>
          <Link href='/' passHref={true}>
            <Image alt='logo' width={400} height={100} src='/img/logo.svg' />
          </Link>
          <nav className={styles.navigation}>
            <Link href='/'>Inicio</Link>
            <Link href='/us'>Nosotros</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/store'>Tienda</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
