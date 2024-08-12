import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <Image src="/images/logo.png" alt="Logo" width={170} height={70} />
      <ul className={styles.nav}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/testimonials">Testimonials</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className={styles.socialIcons}>
        <Link href="#"><Image src="/images/facebook.png" alt="Facebook" /></Link>
        <Link href="#"><Image src="/images/twitter.png" alt="Twitter" /></Link>
        <Link href="#"><Image src="/images/instagram.png" alt="Instagram" /></Link>
        <Link href="#"><Image src="/images/linkedin.png" alt="LinkedIn" /></Link>
      </div>
    </div>
    <p className={styles.copyright}>
      © 2023<span> Mumair</span> All Rights Reserved.
    </p>
  </footer>
);

export default Footer;
