import { motion } from 'motion/react';

export function History() {
  return (
    <section id="historia" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-orange font-medium tracking-wider uppercase mb-3 text-sm">Nossa Trajetória</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            De um sonho à consolidação
          </h3>
          <p className="text-zinc-400 text-lg font-light">
            Fundada por um jovem administrador recém-formado, natural de Marabá, 
            a Galeria da Pizza é fruto de dedicação, resiliência e amor pela gastronomia.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 -translate-x-1/2"></div>

          {/* 2017 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 pl-12 md:pl-0"
          >
            <div className="md:w-5/12 md:text-right pr-0 md:pr-8 mb-4 md:mb-0">
              <h4 className="text-3xl font-serif font-bold text-brand-yellow mb-2">Março de 2017</h4>
              <h5 className="text-xl font-bold text-white mb-2">O Início</h5>
              <p className="text-zinc-400 font-light">
                Abrimos nossas portas com um sonho grande e uma equipe pequena: apenas 3 colaboradores apaixonados pelo que faziam.
              </p>
            </div>
            
            {/* Timeline Dot */}
            <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-brand-orange border-4 border-zinc-950 -translate-x-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
            
            <div className="md:w-5/12 pl-0 md:pl-8 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" 
                alt="Início da pizzaria" 
                className="w-full h-48 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Today */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between pl-12 md:pl-0"
          >
            <div className="md:w-5/12 pr-0 md:pr-8 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop" 
                alt="Equipe atual" 
                className="w-full h-48 object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-brand-yellow border-4 border-zinc-950 -translate-x-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
            
            <div className="md:w-5/12 pl-0 md:pl-8">
              <h4 className="text-3xl font-serif font-bold text-brand-orange mb-2">Hoje</h4>
              <h5 className="text-xl font-bold text-white mb-2">Operação Consolidada</h5>
              <p className="text-zinc-400 font-light">
                Crescemos para mais de 100 funcionários, mantendo intacta nossa essência: qualidade impecável, experiência memorável e atendimento humanizado.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
