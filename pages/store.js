import Layout from '../components/Layout';
import MyList from '../components/MyList';

export default function Store({ guitars }) {
  return (
    <Layout page='Store'>
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección</h1>
        <MyList guitars={guitars} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitars`;
  const response = await fetch(url);
  const guitars = await response.json();
  return {
    props: {
      guitars,
    },
  };
}
