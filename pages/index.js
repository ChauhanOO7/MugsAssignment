import Head from 'next/head';

import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/Herosection';
import AboutMe from '../components/AboutMe';
import Services from '../components/Services';
import Projects from '../components/projects';
import Testimonials from '../components/testimonials';
import Contact from '../components/Contact';

const Home = () => (
  <>
      <Head>
      <title>Muhammad Umair - UI/UX Designer</title>
      <meta name="description" content="Portfolio of Muhammad Umair, a UI/UX Designer." />
      </Head>
      <Header />
      <HeroSection />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
  </>
);

export default Home;
