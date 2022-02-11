import Image from 'next/image';
import Layout from '../../components/Layout';
import { formateDate } from '../../helpers';
import styles from '../../styles/Input.module.css';

export default function BlogInput({ input }) {
  const { id, title, content, image, published_at } = input;

  return (
    <Layout
      page={title}
    >
      <main className='contenedor'>
        <h1 className='heading'>{title}</h1>
        <article className={styles.input}>
          <Image
            layout='responsive'
            width={800}
            height={600}
            src={image.url}
            alt={`Imagen entrada ${title}`}
          />
          <div className={styles.content}>
            <p className={styles.date}>{formateDate(published_at)}</p>
            <p className={styles.text}>{content}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const response = await fetch(url);
  const inputs = await response.json();
  const paths = inputs.map((input) => ({
    params: {
      url: input.url,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const urlRequest = `${process.env.API_URL}/blogs?url=${url}`;
  const response = await fetch(urlRequest);
  const input = await response.json();
  return {
    props: { input: input[0] },
  };
}
