import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/NotFound.module.css';

export default function NotFound() {
  return (
      <div className={styles.not_found}>
        <h1 className='heading'>pagina no encontrada</h1>
        <Link href='/'>Volver al incio</Link>
      </div>
  );
}
