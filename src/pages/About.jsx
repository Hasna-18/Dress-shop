import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-[#fffafb] min-h-screen font-['Playfair_Display'] tracking-tight">
      
      {/* HERO HEADER */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs text-[#4c0519]/50 mb-4 md:mb-6"
            >
              Our Story
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-5xl sm:text-7xl md:text-[9vw] leading-[1] text-[#4c0519] font-light"
              >
                About <span className="italic">Mehar</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 md:mt-8 text-[#4c0519]/60 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed"
            >
              Where tradition meets modern elegance — crafting timeless pieces for the women of today
            </motion.p>
          </div>
        </div>
      </section>

      {/* OUR ESSENCE */}
      <section className="py-16 md:py-32 px-6 md:px-16 border-t border-[#4c0519]/10">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative mb-12 lg:mb-0"
          >
            <div className="aspect-[4/5] overflow-hidden shadow-2xl">
              <img
                src="/assets/C3.png"
                alt="Mehar Boutique - Craftsmanship"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>
          </motion.div>

          {/* Text Block */}
          <div className="lg:col-span-6 lg:pl-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs text-[#4c0519]/50 mb-4 md:mb-6">
                Our Essence
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-[#4c0519] leading-tight mb-6 md:mb-8 text-center lg:text-left">
                Crafted with <br className="hidden md:block" />
                <span className="italic">Love & Passion</span>
              </h2>

              <div className="space-y-6 text-[#4c0519]/70 font-light leading-relaxed text-base md:text-lg text-center lg:text-left">
                <p>
                  Mehar is more than a boutique — it is a celebration of femininity, grace, and self-expression. Born from a deep love for fabric, design, and the art of dressing, we create pieces that make women feel truly extraordinary.
                </p>

                <div className="py-6 border-l-2 pl-6 border-[#4c0519]/20 my-8">
                  <p className="italic text-xl md:text-2xl text-[#4c0519] leading-snug">
                    "At Mehar, every stitch tells a story. Every dress is designed to celebrate the unique beauty of the woman who wears it."
                  </p>
                </div>

                <p>
                  From handcrafted kurthis with intricate embroidery to luxurious nightwear in the finest satin — each piece in our collection is a testament to our commitment to quality, comfort, and timeless style.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-16 md:py-32 px-6 md:px-16 bg-[#faf0f2]">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16 md:mb-24"
          >
            <p className="uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs text-[#4c0519]/50 mb-4 md:mb-6">
              Our Collections
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-light text-[#4c0519] italic">
              What We Offer
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Kurthi Collection",
                description: "Exquisitely crafted kurthis blending traditional artistry with modern design. From silk embroidery to chikankari — perfect for every occasion.",
                image: "/assets/C5.png",
              },
              {
                title: "Bridal Couture",
                description: "Handcrafted bridal dresses designed to make your most important moments unforgettable. Every piece is a masterwork of elegance.",
                image: "/assets/C1.png",
              },
              {
                title: "Luxury Nightwear",
                description: "Premium satin and silk nightwear that redefines comfort. Indulge in luxury sleepwear crafted for your most restful evenings.",
                image: "/assets/maxi/M11.png",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl text-[#4c0519] font-light mb-3 italic">
                  {item.title}
                </h3>
                <p className="text-[#4c0519]/60 font-light text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MEHAR */}
      <section className="py-16 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#4c0519]/50 mb-4 md:mb-6">
                Why Choose Us
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-[#4c0519] leading-tight mb-8 md:mb-10">
                The <span className="italic">Mehar</span> Promise
              </h2>

              <div className="space-y-8">
                {[
                  { label: "Premium Fabrics", text: "We source only the finest silks, satins, and cottons for unmatched quality and comfort." },
                  { label: "Handcrafted Details", text: "Every embroidery, stitch, and finish is done by skilled artisans with years of expertise." },
                  { label: "Personal Styling", text: "Visit our studio for a private consultation and find the perfect piece tailored to you." },
                  { label: "Timeless Design", text: "Our collections are designed to transcend trends — pieces you'll cherish forever." },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-px h-12 bg-[#4c0519]/20 shrink-0 mt-1" />
                    <div>
                      <p className="text-[#4c0519] text-sm md:text-base font-medium tracking-wide mb-1">
                        {item.label}
                      </p>
                      <p className="text-[#4c0519]/60 font-light text-sm md:text-base leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-6 order-1 lg:order-2 mb-12 lg:mb-0"
          >
            <div className="aspect-[4/5] overflow-hidden shadow-2xl">
              <img
                src="/assets/C4.png"
                alt="Mehar Boutique - Why Choose Us"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISIT US CTA */}
      <section className="py-20 md:py-32 bg-[#4c0519] text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs text-white/40 mb-4 md:mb-6">
            Experience Mehar
          </p>

          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-8xl italic leading-tight font-light"
            >
              Visit Our Studio
            </motion.h2>
          </div>

          <p className="text-white/50 mb-12 text-base md:text-lg max-w-lg mx-auto font-light leading-relaxed">
            Step into a world of tailored luxury. Let us guide you to your perfect look with a private styling session.
          </p>

          <a
            href="/contact"
            className="inline-block border border-white px-16 py-6 text-xs tracking-[0.3em] hover:bg-white hover:text-[#4c0519] transition-all duration-300 uppercase"
          >
            Book Appointment
          </a>
        </motion.div>
      </section>

    </div>
  );
}
