import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              Galeria <span className="text-brand-orange">da Pizza</span>
            </h3>
            <p className="text-zinc-400 font-light mb-6">
              Onde a arte encontra o sabor. A melhor experiência gastronômica de Marabá, unindo tradição, qualidade e atendimento humanizado.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/galeria.dapizza/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-orange transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/galeriadapizza/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-orange transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.tiktok.com/@galeriadapizza" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-orange transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#sobre" className="text-zinc-400 hover:text-brand-orange transition-colors">Sobre Nós</a></li>
              <li><a href="#especialidades" className="text-zinc-400 hover:text-brand-orange transition-colors">Cardápio</a></li>
              <li><a href="#experiencia" className="text-zinc-400 hover:text-brand-orange transition-colors">Experiência</a></li>
              <li><a href="#historia" className="text-zinc-400 hover:text-brand-orange transition-colors">Nossa História</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <Phone size={20} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span>(94) 99236-0069</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <Mail size={20} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <a href="mailto:reykovskempresa@gmail.com" className="hover:text-brand-orange transition-colors">
                  reykovskempresa@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin size={20} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span>Marabá - PA</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Horário de Funcionamento</h4>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Segunda a Quinta</span>
                <span className="text-white">18:00 - 23:30</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Sexta a Domingo</span>
                <span className="text-white">18:00 - 00:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-900 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Galeria da Pizza. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-xs">
            Desenvolvido com excelência.
          </p>
        </div>
      </div>
    </footer>
  );
}
