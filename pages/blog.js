import BlogList from '../components/BlogList';
import Layout from '../components/Layout';

export default function Blog({ inputs }) {
  return (
    <Layout page='Blog'>
      <main className='contenedor'>
        <BlogList inputs={inputs} />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const response = await fetch(url);
  const inputs = await response.json();
  return {
    props: { inputs },
  };
}
