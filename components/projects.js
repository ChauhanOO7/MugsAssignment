import Image from 'next/image';
import styles from '../styles/Project.module.css';

export default function MyProjects() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.filterButtons}>
        <button className={styles.active}>All</button>
        <button>UI/UX</button>
        <button className={styles.active}>Web Design</button>
        <button>App Design</button>
        <button>Graphic Design</button>
      </div>
      <div className={styles.projects}>
        <div className={styles.project}>
          <Image
            src="/images/myproject1.png" 
            alt="Project 1"
            width={400}
            height={500}
            className={styles.projectImage}
          />
        </div>
        <div className={styles.project}>
          <Image
            src="/images/myproject2.png"
            alt="Project 2"
            width={400}
            height={500}
            className={styles.projectImage}
          />
        </div>
        <div className={styles.project}>
          <Image
            src="/images/myproject3.png" 
            alt="Project 3"
            width={400}
            height={500}
            className={styles.projectImage}
          />
        </div>
      </div>
    </div>
  );
}
