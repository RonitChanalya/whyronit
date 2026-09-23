import { motion, useReducedMotion } from 'framer-motion';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Intro from '../components/Intro/Intro';
import Navbar from '../components/Navbar/Navbar';
import ProjectShowcase from '../components/ProjectShowcase/ProjectShowcase';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/Timeline/Timeline';

export default function Home() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div id="top" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduceMotion ? {} : { opacity: 0 }} transition={{ duration: 0.35 }}>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Intro />
        <ProjectShowcase />
        <About />
        <Technologies />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
