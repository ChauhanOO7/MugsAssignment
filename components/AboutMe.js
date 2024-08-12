import Image from 'next/image';
import styles from '../styles/AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero3.png"
          alt="About Me"
          layout="fill" 
          objectFit="cover" 
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.info}>
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <div className={styles.skill}>
          <span className={styles.skillTitle}>UX</span>
          <div className={styles.skillBar}>
            <div className={styles.ux}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <span className={styles.skillTitle}>Website Design</span>
          <div className={styles.skillBar}>
            <div className={styles.website}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <span className={styles.skillTitle}>App Design</span>
          <div className={styles.skillBar}>
            <div className={styles.app}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <span className={styles.skillTitle}>Graphic Design</span>
          <div className={styles.skillBar}>
            <div className={styles.graphic}></div>
          </div>
        </div>
      </div>
    </div>
  );
}


