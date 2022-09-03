const ShortenedLinks = ({data}) => {


  return ( 
    <section>
      {data.map(shortenedLink => (
        <div>
          {shortenedLink.result.full_short_link && <p>{shortenedLink.result.full_short_link}</p>}
          {shortenedLink.result.original_link && <p>{shortenedLink.result.original_link}</p>}
        </div>
      ))}
    </section>  
  );
}
 
export default ShortenedLinks;