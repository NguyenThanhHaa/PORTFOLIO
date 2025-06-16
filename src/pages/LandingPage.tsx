import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </>
  );
};

export default LandingPage;