import Input from '../components/Input';
import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css';

export default function Blog({ inputs }) {
  return (
    <Layout page='Blog'>
      <main className='contenedor'>
        <h2 className='heading'>Blog</h2>
        <div className={styles.blog}>
          {inputs.map((input) => (
            <Input key={input.id} input={input} />
          ))}
        </div>
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
