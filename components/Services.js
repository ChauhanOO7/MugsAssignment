import styles from '../styles/Service.module.css';
import Image from 'next/image';

const services = [
  { title: 'UI/UX', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Web Design', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'App Design', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet consectetur.' },
];

const Services = () => (
  <section className={styles.services}>
    <h2>Services</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
      Aliquet donec morbi convallis pretium.
    </p>
    <div className={styles.serviceList}>
      {services.map((service, index) => (
        <div key={index} className={styles.service}>
            <Image
            src="/images/services1.png"
            alt="service"
            width={47}
            height={82}
            className={styles.projectImage}
          />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
