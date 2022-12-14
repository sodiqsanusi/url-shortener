import styles from './Footer.module.css';
import Image from "next/image";
import Link from "next/link";
import logoImage from '../../public/logo.svg';
import facebookLogo from '../../public/icon-facebook.svg';
import twitterLogo from '../../public/icon-twitter.svg';
import pinterestLogo from '../../public/icon-pinterest.svg';
import instaLogo from '../../public/icon-instagram.svg';

const Footer = () => {
  return ( 
    <footer className={styles.container}>
      <Link href='/'>
        <a className={styles.footerImg}><Image src={logoImage} alt='Click to go to the homepage'/></a>
      </Link>
      <ul className={styles.mainListContainer}>
        <li className={styles.linkList}>
          <h3>Features</h3>
          <ul>
            <li><Link href='#'><a>Link Shortening</a></Link></li>
            <li><Link href='#'><a>Branded Links</a></Link></li>
            <li><Link href='#'><a>Analytics</a></Link></li>
          </ul>
        </li>
        <li className={styles.linkList}>
          <h3>Resources</h3>
          <ul>
            <li><Link href='#'><a>Blog</a></Link></li>
            <li><Link href='#'><a>Developers</a></Link></li>
            <li><Link href='#'><a>Support</a></Link></li>
          </ul>
        </li>
        <li className={styles.linkList}>
          <h3>Company</h3>
          <ul>
            <li><Link href='#'><a>About</a></Link></li>
            <li><Link href='#'><a>Our Team</a></Link></li>
            <li><Link href='#'><a>Careers</a></Link></li>
            <li><Link href='#'><a>Contact</a></Link></li>
          </ul>
        </li>
      </ul>
      <ul className={styles.imgList}>
        <li><a href="https://github.com/sodiqsanusi" target='_blank' rel='noreferrer'><Image src={facebookLogo} alt='Click to go to Github profile of the developer.'/></a></li>
        <li><Link href='#'><a><Image src={twitterLogo} alt='Click to go to the Twitter page'/></a></Link></li>
        <li><Link href='#'><a><Image src={pinterestLogo} alt='Click to go to the Pinterest page'/></a></Link></li>
        <li><Link href='#'><a><Image src={instaLogo} alt='Click to go to the Instagram page'/></a></Link></li>
      </ul>
    </footer>
  );
}
 
export default Footer;
