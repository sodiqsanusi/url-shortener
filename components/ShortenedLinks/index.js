import styles from './ShortenedLinks.module.css';

const ShortenedLinks = ({data}) => {

  return ( 
    <section className={styles.container}>
      {data.map(shortenedLink => (
        <div className={styles.card} key={shortenedLink.result.code}>
          {shortenedLink.result.original_link && <p>{shortenedLink.result.original_link}</p>}
          {shortenedLink.result.full_short_link && <a href={shortenedLink.result.full_short_link} target='_blank' rel='noreferrer'>{shortenedLink.result.full_short_link}</a>}
          <button>Copy</button>
        </div>
      ))}
    </section>  
  );
}
 
export default ShortenedLinks;