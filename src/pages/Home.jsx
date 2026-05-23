import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import PopularRoutes from '../components/PopularRoutes.jsx';
import Testimonials from '../components/Testimonials.jsx';
// import Gallery from '../components/Gallery.jsx';
import Contact from '../components/Contact.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <PopularRoutes />
      <Testimonials />
      {/* <Gallery /> */}
      <Contact />
    </main>
  );
}
