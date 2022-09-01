import Image from "next/image";
import headerImage from '../../public/illustration-working.svg';
import styles from './Header.module.css';

const Header = () => {
  return ( 
    <header className={styles.header}>
      <div className={styles.headerImage}><Image src={headerImage} alt='' aria-hidden='true' role='presentation'/></div>
      <article className={styles.headerArticle}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing
        </p>
        <button>Get Started</button>
      </article>
    </header>
  );
}
 
export default Header;