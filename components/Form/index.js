import styles from './Form.module.css';

const Form = () => {

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log('Link submitted')
  }

  return ( 
    <form noValidate onSubmit={handleSubmit} className={styles.container}>
      <div>
        <input
         type="url" placeholder="Shorten a link here..."
        />
        <p className={styles.errMessage}></p>
      </div>
      <button>Shorten it!</button>
    </form>
  );
}
 
export default Form;