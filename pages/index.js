import MyList from '../components/MyList';
import Layout from '../components/Layout';
import Bloc from '../components/Bloc';
import BlogList from '../components/BlogList';

export default function Home({ guitars, bloc, inputs }) {
  return (
    <Layout page='Inicio'
    guitar={guitars[3]}>
      <main className='contenedor'>
        <h1 className='heading'>Nuestra coleccion</h1>
        <MyList guitars={guitars} />
      </main>
      <Bloc bloc={bloc} />
      <section className='contenedor'>
        <BlogList inputs={inputs} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlGuitar = `${process.env.API_URL}/guitars`;
  const urlBloc = `${process.env.API_URL}/bloc`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitars, resBloc, resBlog] = await Promise.all([
    fetch(urlGuitar),
    fetch(urlBloc),
    fetch(urlBlog),
  ]);
  const [guitars, bloc, inputs] = await Promise.all([
    resGuitars.json(),
    resBloc.json(),
    resBlog.json(),
  ]);
  return {
    props: {
      guitars,
      bloc,
      inputs,
    },
  };
}
