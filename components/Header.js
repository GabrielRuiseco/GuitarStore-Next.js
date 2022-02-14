import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

const Header = ({ guitar }) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className='contenedor'>
        <div className={styles.bar}>
          <Link href='/' passHref={true}>
            <a>
              <Image alt='logo' width={400} height={100} src='/img/logo.svg' />
            </a>
          </Link>
          <nav className={styles.navigation}>
            <Link href='/'>Inicio</Link>
            <Link href='/us'>Nosotros</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/store'>Tienda</Link>
          </nav>
        </div>
        {guitar && (
          <div className={styles.model}>
            <h2>Modelo {guitar.name}</h2>
            <p>{guitar.description}</p>
            <p className={styles.price}>${guitar.price}</p>
            <Link href={`/guitars/${guitar.url}`}>Ver producto</Link>
          </div>
        )}
      </div>
      {router.pathname === '/' && (
        <div className={styles.guitar}>
          <Image
            width={500}
            height={1200}
            src='/img/header_guitarra.png'
            alt='gutarra header'
          />
        </div>
      )}
    </header>
  );
};

export default Header;
