import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialties } from './components/Specialties';
import { Experience } from './components/Experience';
import { History } from './components/History';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col font-sans text-zinc-100 selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Specialties />
        <Experience />
        <History />
        <Reviews />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
