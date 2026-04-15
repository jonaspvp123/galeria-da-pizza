import { useState, useEffect } from 'react';
import { Menu, X, Pizza } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'História', href: '#historia' },
    { name: 'Avaliações', href: '#avaliacoes' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3 shadow-lg shadow-black/50' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-brand-orange hover:text-brand-yellow transition-colors">
          <Pizza size={32} strokeWidth={1.5} />
          <span className="font-serif text-2xl font-bold tracking-tight text-white">
            Galeria <span className="text-brand-orange">da Pizza</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 hover:text-brand-yellow transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5594992360069"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all transform hover:scale-105 shadow-lg shadow-brand-orange/20"
          >
            Pedir Agora
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-t border-zinc-800 overflow-hidden"
          >
            <ul className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium text-zinc-300 hover:text-brand-yellow transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 mt-2 border-t border-zinc-800">
                <a
                  href="https://wa.me/5594992360069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center bg-brand-orange hover:bg-orange-600 text-white px-5 py-3 rounded-full font-medium transition-colors"
                >
                  Pedir no WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
