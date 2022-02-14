import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '../../styles/Guitar.module.css';

export default function Guitar({ guitar }) {
  const { description, image, name, price } = guitar[0];

  return (
    <Layout page={`Guitar ${name}`}>
      <div className={styles.guitar}>
        <Image
          priority='true'
          src={image[0].url}
          layout='responsive'
          width={133}
          height={310}
          alt={`guitarra ${name}`}
        />
        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.descritpion}>{description}</p>
          <p className={styles.price}>${price}</p>
          <form className={styles.form}>
            <label>Cantidad</label>
            <select>
              <option value='' key=''>
                Seleccione
              </option>
              <option value='1' key='1'>
                1
              </option>
              <option value='2' key='2'>
                2
              </option>
              <option value='3' key='3'>
                3
              </option>
              <option value='4' key='4'>
                4
              </option>
              <option value='5' key='5'>
                5
              </option>
            </select>

            <input type='submit' value='agregar al carrito' />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const urlGuitar = `${process.env.API_URL}/guitars?url=${url}`;
  const response = await fetch(urlGuitar);
  const guitar = await response.json();
  return {
    props: { guitar },
  };
}
