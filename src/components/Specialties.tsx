import { motion } from 'motion/react';

const specialties = [
  {
    id: 'pizza',
    title: 'Pizzas Artesanais',
    description: 'Nosso carro-chefe. Massas de longa fermentação com ingredientes nobres e combinações artísticas.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
    icon: '🍕'
  },
  {
    id: 'sushi',
    title: 'Sushi Premium',
    description: 'A delicadeza da culinária oriental preparada com peixes frescos e técnica impecável.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop',
    icon: '🍣'
  },
  {
    id: 'panelinhas',
    title: 'Panelinhas',
    description: 'O sabor do Brasil servido fumegante. Um sucesso absoluto que conforta e surpreende.',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4f43b4850?q=80&w=2070&auto=format&fit=crop',
    icon: '🍲'
  }
];

export function Specialties() {
  return (
    <section id="especialidades" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-medium tracking-wider uppercase mb-3 text-sm">Nosso Cardápio</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Obras de Arte para Degustar
          </h3>
          <p className="text-zinc-400 text-lg font-light">
            Da tradição italiana à precisão japonesa, passando pelo calor da culinária brasileira. 
            Uma variedade pensada para agradar a todos os paladares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
                
                <div className="absolute bottom-4 right-4 text-4xl filter drop-shadow-lg">
                  {item.icon}
                </div>
              </div>
              
              <div className="p-8 relative z-10 -mt-10">
                <h4 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">
                  {item.title}
                </h4>
                <p className="text-zinc-400 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <a 
                  href="https://wa.me/5594992360069" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-orange font-medium hover:text-brand-yellow transition-colors"
                >
                  Pedir agora <span className="ml-2">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
