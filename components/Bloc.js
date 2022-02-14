import Link from 'next/link';
import styles from '../styles/Bloc.module.css';

const Bloc = ({ bloc }) => {
  const { title, content, image } = bloc;

  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className='heading'>{title}</h2>
          <p className={styles.text}>{content}</p>
          <Link href='/courses'>Más información</Link>
        </div>
      </div>
      <style jsx>{`
        section {
          padding: 10rem 0;
          margin-top: 10rem;
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.65),
              rgb(0 0 0 / 0.7)
            ),
            url(${image.url});
          background-size: cover;
          background-position: 50%;
        }
      `}</style>
    </section>
  );
};

export default Bloc;
