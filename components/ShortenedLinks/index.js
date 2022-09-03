import styles from './ShortenedLinks.module.css';

const ShortenedLinks = ({data}) => {

  let handleClick = (shortUrl, e) => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      e.target.innerText = 'Copied!';
      setTimeout(() => {
       e.target.innerText = 'Copy';
      }, 4000);
    })
  }

  return ( 
    <section className={styles.container}>
      {data.map(shortenedLink => (
        <div className={styles.card} key={shortenedLink.result.code}>
          {shortenedLink.result.original_link && <p>{shortenedLink.result.original_link}</p>}
          {shortenedLink.result.full_short_link && <a href={shortenedLink.result.full_short_link} target='_blank' rel='noreferrer'>{shortenedLink.result.full_short_link}</a>}
          <button onClick={(e) => handleClick(shortenedLink.result.full_short_link, e)}>Copy</button>
        </div>
      ))}
    </section>  
  );
}
 
export default ShortenedLinks;