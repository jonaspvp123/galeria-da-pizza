import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Mariana Silva',
    text: 'A melhor pizza de Marabá, sem dúvidas! O ambiente é super agradável e a música ao vivo faz toda a diferença. Recomendo a pizza Da Vinci.',
    rating: 5
  },
  {
    id: 2,
    name: 'João Pedro',
    text: 'Fui comemorar meu aniversário e o atendimento foi impecável. O sushi é fresquinho e as panelinhas são maravilhosas. Voltarei mais vezes!',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Costa',
    text: 'Lugar perfeito para ir com a família. Espaço acolhedor, comida de altíssima qualidade e um cardápio muito variado. Nota 1000!',
    rating: 5
  }
];

export function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-medium tracking-wider uppercase mb-3 text-sm">Depoimentos</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            O que dizem nossos clientes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-zinc-800 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              
              <p className="text-zinc-300 font-light italic mb-6 relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-brand-orange font-bold">
                  {review.name.charAt(0)}
                </div>
                <span className="font-medium text-white">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow mb-8">
            <div className="bg-brand-dark px-10 py-12 rounded-full flex flex-col items-center justify-center">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Deu água na boca?
              </h3>
              <p className="text-zinc-400 mb-8 max-w-md">
                Não deixe para amanhã a pizza (ou sushi, ou panelinha) que você pode comer hoje.
              </p>
              <a
                href="https://wa.me/5594992360069"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-orange hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              >
                Faça seu pedido agora
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
