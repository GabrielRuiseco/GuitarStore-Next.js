import Course from '../components/Course';
import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css';

export default function Courses({ inputs }) {
  return (
    <Layout>
      <main className='contenedor'>
        <h1 className='heading'>Cursos</h1>
        <div className={styles.blog}>
          {inputs.map((input) => (
            <Course key={input.id} input={input} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}/courses?_sort=created_at:desc`;
  const response = await fetch(url);
  const inputs = await response.json();
  return {
    props: { inputs },
  };
}
