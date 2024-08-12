import styles from '../styles/HeroSection.module.css';
import Image from 'next/image';
import Button from '../components/Button';

const HeroSection = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <h1>Hi I am <span className={styles.highlight}>Muhammad Umair</span></h1>
      <h2 className={styles.title}>UI & UX <span>Designer</span></h2>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.</p>
      <Button>Hire Me</Button>
    </div>
    <div className={styles.imageContainer}>
      <Image 
        src="/images/hero.png" 
        alt="Muhammad Umair" 
        width={450} 
        height={510} 
        className={styles.heroImage}
      />
      <div className={styles.overlay}></div>
      <div className={styles.socialIcons}>
        <a href="#"><img src="/images/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="/images/twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="/images/instagram.png" alt="Instagram" /></a>
        <a href="#"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
      </div>
    </div>
  </section>
);

export default HeroSection;

