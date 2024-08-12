import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <Image src="/images/logo.png" alt="Logo" width={170} height={70} />
      <ul className={styles.nav}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Me</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/testimonials">Testimonials</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className={styles.socialIcons}>
        <a href="#"><img src="/images/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="/images/twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="/images/instagram.png" alt="Instagram" /></a>
        <a href="#"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
      </div>
    </div>
    <p className={styles.copyright}>
      © 2023<span> Mumair</span> All Rights Reserved.
    </p>
  </footer>
);

export default Footer;
