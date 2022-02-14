import styles from '../styles/Blog.module.css';
import Input from './Input';
const BlogList = ({ inputs }) => {
  return (
    <>
      <h2 className='heading'>Blog</h2>
      <div className={styles.blog}>
        {inputs.map((input) => (
          <Input key={input.id} input={input} />
        ))}
      </div>
    </>
  );
};

export default BlogList;
