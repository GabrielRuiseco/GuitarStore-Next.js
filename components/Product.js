import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitar.module.css';

const Product = ({ guitar }) => {
  const { url, description, image, name, price } = guitar;
  return (
    <div className={styles.guitar}>
      <Image
        priority='true'
        src={image[0].url}
        layout='responsive'
        width={150}
        height={350}
        alt={`guitarra ${name}`}
      />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.descritpion}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link href={`/guitars/${url}`}>Ver producto</Link>
      </div>
    </div>
  );
};

export default Product;
