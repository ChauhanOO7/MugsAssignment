import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import Button from '../components/Button';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <Image
            src="/images/logo.png" 
            alt="Project 1"
            width={240}
            height={37}
            className={styles.projectImage}
        />
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/testimonials">Testimonials</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <Button>Download CV</Button>
    </nav>
  </header>
);

export default Header;
