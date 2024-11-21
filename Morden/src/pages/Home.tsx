import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { AboutPreview } from '../components/AboutPreview';
import { ContactCTA } from '../components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}