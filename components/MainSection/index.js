import Image from 'next/image';
import styles from './MainSection.module.css';
import brandRecognition from "../../public/icon-brand-recognition.svg";
import detailedRecords from "../../public/icon-detailed-records.svg";
import fullyCustomizable from "../../public/icon-fully-customizable.svg";

const MainSection = () => {
  return ( 
    <main className={styles.container}>
      <article className={styles.mainArticle}>
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with
          our advanced statistics dashboard.
        </p>
      </article>
      <ul className={styles.cardList}>
        <li>
          <article className={styles.card}>
            <div><Image src={brandRecognition} alt='' aria-hidden='true' role='presentation'/></div>
            <h3>Brand Recognition</h3>
            <p>Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instil confidence
              in your content.
            </p>
          </article>
        </li>
        <li>
          <article className={styles.card}>
            <div><Image src={detailedRecords} alt='' aria-hidden='true' role='presentation'/></div>
            <h3>Detailed Records</h3>
            <p>Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better decisions.
            </p>
          </article>
        </li>
        <li>
          <article className={styles.card}>
            <div><Image src={fullyCustomizable} alt='' aria-hidden='true' role='presentation'/></div>
            <h3>Fully Customizable</h3>
            <p>Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </li>
        <span className={styles.listRule}></span>
      </ul>
    </main>
  );
}
 
export default MainSection;