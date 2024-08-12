import styles from '../styles/Contact.module.css';

const Contact = () => (
  <section className={styles.contact}>
    <h2>Let&apos;s Design Together</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
      Aliquet donec morbi convallis pretium.
    </p>
    <form className={styles.contactForm}>
      <input type="email" placeholder="Enter Your Email" required />
      <button type="submit">Contact Me</button>
    </form>
  </section>
);

export default Contact;
