import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout
      page='Inicio'
    >
      <h1>Desde Inicio</h1>
      <Link href='/us'>Ir a Nosotros</Link>
    </Layout>
  );
}
