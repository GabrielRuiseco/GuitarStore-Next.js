import Product from './Product';
import styles from '../styles/List.module.css';


const MyList = ({ guitars }) => {
  console.log(guitars);
  return (
    <div className={styles.list}>
      {guitars.map((guitar) => (
        <Product key={guitar.id} guitar={guitar} />
      ))}
    </div>
  );
};

export default MyList;
