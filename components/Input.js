import Image from 'next/image';
import Link from 'next/link';
import { formateDate } from '../helpers';
import styles from '../styles/Input.module.css';

const Input = ({ input }) => {
  const { id, title, resume, content, image, published_at, url } = input;

  return (
    <article>
      <div className={styles.content}>
        <Image
          priority='true'
          layout='responsive'
          width={800}
          height={600}
          alt={`imagen blog ${title}`}
          src={image.url}
        />
        <h3>{title}</h3>
        <p className={styles.date}>{formateDate(published_at)}</p>
        <p className={styles.resume}>{resume}</p>
        <Link href={`/blog/${url}`}>Leer entrada</Link>
      </div>
    </article>
  );
};

export default Input;
