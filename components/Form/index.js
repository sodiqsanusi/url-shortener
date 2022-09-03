import { useState, useContext } from 'react';
import {GlobalContext} from '../../GlobalContext';
import styles from './Form.module.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Form = () => {

  let {changeShortenedLinks} = useContext(GlobalContext)

  let [url, setUrl] = useState('')
  let [isUrlInvalid, changeValidation] = useState(false);
  let [isFetchInvalid, changeFetchValidation] = useState(false);
  let [isLoading, setLoading] = useState(false);


  let handleSubmit = (e) => {
    e.preventDefault();
    let isUrlValid = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(url);
    if(isUrlValid){
      changeValidation(false);
      setLoading(true);
      //* Fetching the short link of the inputted URL.
      fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then(
        res => {
          setLoading(false);
          return res.json()
        }
      ).then(
        data => {
          if(data.ok == false){
            throw Error
          }
          changeFetchValidation(false);
          changeShortenedLinks(allShortenedLinks => [data, ...allShortenedLinks])
        }
      ).catch(
        err => {
          console.log(err);
          changeFetchValidation(true);
        }
      )
    } else{
      changeValidation(true);
      changeFetchValidation(false);
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
          {isFetchInvalid && <p className={styles.errMessage}>This link can't be shortened for security reasons</p>}
        </div>
        <button>Shorten it!</button>
      </form>
      {isLoading && <div className={styles.loader}></div>}
    </div>  
  );
}
 
export default Form;