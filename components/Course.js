import Image from 'next/image';
import Link from 'next/link';
import { formateDate } from '../helpers';
import styles from '../styles/Input.module.css';

const Course = ({ input }) => {
  const { name, starting, ending, cost, image, description } = input;
  return (
    <div className={styles.content}>
      <Image
        priority='true'
        layout='responsive'
        width={800}
        height={600}
        alt={`imagen curso ${name}`}
        src={image.url}
      />
      <h3>{name}</h3>
      <p className={styles.resume}>{description}</p>
      <p className={styles.paragraph}>
        Fecha de inicio:{' '}
        <span className={styles.date}>{formateDate(starting)}</span>
      </p>
      <p className={styles.paragraph}>
        Fecha de terminación:{' '}
        <span className={styles.date}>{formateDate(ending)}</span>
      </p>
      <p className={styles.paragraph}>Costo: ${cost}</p>
      <Link href={`/courses/`}>Ver curso</Link>
    </div>
  );
};

export default Course;
