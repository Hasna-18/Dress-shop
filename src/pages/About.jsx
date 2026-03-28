import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 bg-[#fffafb] relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#4c0519] leading-tight"
          >
            Our <span className="italic font-light">Atelier</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 uppercase tracking-[0.3em] text-xs font-semibold text-[#4c0519]/50"
          >
            Established 2024
          </motion.p>
        </div>

        <div className="lg:grid lg:grid-cols-12 gap-16 items-center border-t border-[#4c0519]/10 pt-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative mb-16 lg:mb-0"
          >
            <div className="aspect-4/5 overflow-hidden bg-rose-50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1000&auto=format&fit=crop" 
                alt="Detail of beautiful fabric"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center translate-y-[-5%] hover:translate-y-0 transition-all duration-[3s] ease-out"
              />
            </div>
          </motion.div>

          {/* Text Block */}
          <div className="lg:col-span-6 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#4c0519] leading-tight mb-6 md:mb-8 font-light text-center lg:text-left">
                Uncompromising <br className="hidden md:block"/><span className="italic font-semibold block mt-2 md:mt-4">Craftsmanship.</span>
              </h2>
              
              <div className="space-y-6 text-[#4c0519]/70 font-light leading-relaxed text-base md:text-lg lg:text-xl text-center lg:text-left">
                <p>
                  Lumina is a sanctuary for those who seek uncompromising elegance. We source the finest materials from around the world to present a curated gallery of dresses meant to be experienced, not just seen.
                </p>
                <div className="py-6 border-l pl-6 border-[#4c0519]/20 my-10">
                  <p className="font-serif italic text-2xl text-[#4c0519] leading-snug">
                    "We do not sell online. True luxury demands touch, perfect draping, and an uncompromising fit."
                  </p>
                </div>
                <p>
                  Visit our physical boutique to feel the exquisite silk, to appreciate the delicate lace, and to find a silhouette that feels explicitly yours. Our styling consultants await to offer you a deeply personal fitting session.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
