import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Us.module.css';

export default function Us() {
  return (
    <Layout page='Us'>
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div>
          <div className={styles.content}>
            <Image
              layout='responsive'
              width={600}
              height={450}
              src='/img/nosotros.jpg'
              alt='imagen sobre nosotros'
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              turpis leo, tempor vitae condimentum non, mollis non ligula.
              Aliquam ac lorem nec nulla accumsan luctus. Nulla facilisi.
              Quisque tincidunt leo a placerat mattis. Nam aliquet condimentum
              imperdiet. Duis dui dui, imperdiet non faucibus vel, aliquet vitae
              nisl. Nulla facilisi. Quisque gravida, lacus non tristique varius,
              urna est blandit sapien, ac rutrum magna arcu eu risus. Nunc
              accumsan nisi id nisi posuere, id congue turpis porttitor.
              Pellentesque vulputate, neque id eleifend porta, orci orci
              malesuada sem, in accumsan nulla sapien et sem. Curabitur accumsan
              tempus vestibulum. Sed dapibus lectus ac metus consectetur
              vulputate. Etiam ac arcu auctor, vestibulum nulla nec, dictum mi.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
