import { motion } from 'motion/react';
import { Music, Users, Star } from 'lucide-react';

export function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-brand-orange font-medium tracking-wider uppercase mb-3 text-sm">A Atmosfera</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Muito mais que uma refeição, <span className="text-brand-yellow">um momento.</span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-brand-orange">
                  <Music size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Música ao Vivo</h4>
                  <p className="text-zinc-400 font-light">
                    Trilha sonora perfeita para sua noite. Apresentações diárias dos melhores artistas locais tocando MPB e Pop.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-brand-orange">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Ambiente Familiar</h4>
                  <p className="text-zinc-400 font-light">
                    Um espaço acolhedor e seguro, projetado para receber famílias, casais e grupos de amigos com todo o conforto.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-brand-orange">
                  <Star size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Atendimento Humanizado</h4>
                  <p className="text-zinc-400 font-light">
                    Nossa equipe é treinada para oferecer uma experiência personalizada, fazendo você se sentir em casa.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Ambiente do restaurante" 
                  className="w-full h-48 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Música ao vivo" 
                  className="w-full h-64 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop" 
                  alt="Amigos brindando" 
                  className="w-full h-64 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
                  alt="Detalhe do restaurante" 
                  className="w-full h-48 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
