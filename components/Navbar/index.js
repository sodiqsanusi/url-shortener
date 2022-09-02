import Image from "next/image";
import Link from "next/link";
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
      <Link href="/"><a className={styles.logo}><Image src={logoImage} alt='The Shortly logo' priority/></a></Link>
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
            <Link href="#"><a>Features</a></Link>
            <Link href="#"><a>Pricing</a></Link>
            <Link href="#"><a>Resources</a></Link>
          </ul>
          <Link href="#"><a>Login</a></Link>      
          <button>Sign Up</button>
        </aside>
      )}
    </nav>
  );
}
 
export default Navbar;