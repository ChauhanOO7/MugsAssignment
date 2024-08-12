import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Testimonials.module.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: '/images/test1.png',
      text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
      name: 'Name 1',
      position: 'CEO',
    },
    {
      id: 2,
      image: '/images/hero.png',
      text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
      name: 'Name 2',
      position: 'CEO',
    },
    {
      id: 3,
      image: '/images/test1.png',
      text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
      name: 'Name 3',
      position: 'CEO',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={styles.testimonialsContainer}>
      <h2 className={styles.heading}>Testimonials</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      <div className={styles.slider}>
        <div className={styles.testimonial}>
          <div className={styles.testimonialContent}>
            <Image
              src={testimonials[currentIndex].image}
              alt={`Testimonial from ${testimonials[currentIndex].name}`}
              width={200}
              height={200}
              className={styles.image}
            />
            <div>
              <p className={styles.text}>&ldquo;{testimonials[currentIndex].text}&rdquo;</p>
              <p className={styles.name}>{testimonials[currentIndex].name}</p>
              <p className={styles.position}>{testimonials[currentIndex].position}</p>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <button onClick={prevSlide} className={styles.prevButton}>&lt;</button>
        <button onClick={nextSlide} className={styles.nextButton}>&gt;</button>
      </div>
    </div>
  );
}

