import Image from "next/image";
import { useState } from "react";
import logoImage from '../../public/logo.svg';
import styles from './Navbar.module.css'


const Navbar = () => {

  let [isMobileNavOpen, toggleMobileNav] = useState(false);
  let navButtonClicked = () => {
    toggleMobileNav(!isMobileNavOpen)
  }

  return ( 
    <nav className={styles.container}>
      <a href="/" className={styles.logo}><Image src={logoImage} alt='The Shortly logo' /></a>
      <button className={styles.navButton} onClick={navButtonClicked}>
        {!isMobileNavOpen && (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
        {isMobileNavOpen && (
          <>
            <span className={styles.closeNav}></span>
            <span className={styles.closeNav}></span>
          </>
        )}
      </button>
      {isMobileNavOpen && (
        <aside className={styles.mobileNav}>
          <ul>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </ul>
          <a href="#">Login</a>
          <button>Sign Up</button>
        </aside>
      )}
    </nav>
  );
}
 
export default Navbar;