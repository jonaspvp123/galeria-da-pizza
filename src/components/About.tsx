import { motion } from 'motion/react';
import { Palette, UtensilsCrossed, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop" 
                alt="Chef preparando pizza artesanal" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl max-w-[240px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <Palette size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-white">Arte em Fatias</h4>
                </div>
              </div>
              <p className="text-sm text-zinc-400">Sabores inspirados em Da Vinci, Picasso e Monalisa.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-orange font-medium tracking-wider uppercase mb-3 text-sm">Sobre a Galeria</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Uma obra-prima <br /> em cada pedaço.
            </h3>
            
            <div className="space-y-6 text-zinc-300 text-lg font-light">
              <p>
                A Galeria da Pizza não é apenas um restaurante, é um ateliê de sabores. Desde 2017, transformamos ingredientes selecionados em verdadeiras obras de arte gastronômicas no coração de Marabá.
              </p>
              <p>
                Nossa proposta une a paixão pela culinária com a inspiração artística. Cada pizza do nosso cardápio carrega a essência de grandes mestres da arte, oferecendo uma experiência que alimenta o corpo e a alma.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="flex gap-4">
                <div className="text-brand-yellow mt-1">
                  <UtensilsCrossed size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Ingredientes Premium</h4>
                  <p className="text-sm text-zinc-400">Selecionamos apenas os melhores insumos para nossas criações.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-brand-yellow mt-1">
                  <Heart size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Feito com Paixão</h4>
                  <p className="text-sm text-zinc-400">Massa artesanal de longa fermentação, aberta à mão.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
