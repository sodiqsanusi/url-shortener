import { useState } from 'react';
import styles from './Form.module.css';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Form = () => {

  let [url, setUrl] = useState('')
  let [isUrlInvalid, changeValidation] = useState(false);
  let [test, setTest] = useState(false);


  let handleSubmit = (e) => {
    e.preventDefault();
    let isUrlValid = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(url);
    if(isUrlValid){
      changeValidation(false);
      // todo: Use the API here to shorten the valid link!
    } else{
      changeValidation(true);
      // todo: Put in the errors
    }
  }

  return ( 
    <div className={styles.formContainer}>
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
    </div>  
  );
}
 
export default Form;