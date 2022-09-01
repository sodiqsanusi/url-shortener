import { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {

  let [url, setUrl] = useState('')
  let [isUrlInvalid, changeValidation] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log('Link submitted')
    let isUrlValid = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(url);
    if(isUrlValid){
      console.log('A URL!')
      changeValidation(false);
      // todo: Use the API here to shorten the valid link!
    } else{
      console.log('Not a url')
      changeValidation(true);
      // todo: Put in the errors
    }
  }

  return ( 
    <form noValidate onSubmit={handleSubmit} className={styles.container}>
      <div>
        <input
         type="url" placeholder="Shorten a link here..."
         value={url}
         onChange={(e) => setUrl(e.target.value)}
         className={styles[isUrlInvalid]}
        />
        {isUrlInvalid && <p className={styles.errMessage}>Please add a valid link</p>}
      </div>
      <button>Shorten it!</button>
    </form>
  );
}
 
export default Form;