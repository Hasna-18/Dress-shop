import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#fffafb] w-full font-['Playfair_Display'] tracking-tight">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="/assets/L1.png"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative z-10 text-center px-4 sm:px-6 w-full max-w-7xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs text-white/70 mb-4 sm:mb-6">
            Luxury Womenswear
          </p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-5xl sm:text-7xl md:text-[12vw] leading-[1.1] md:leading-[0.85] text-white font-light"
            >
              Timeless <br />
              <span className="italic">Elegance</span>
            </motion.h1>
          </div>

          <Link
            to="/gallery"
            className="mt-12 inline-block border border-white px-14 py-6 text-xs tracking-[0.3em] text-white hover:bg-white hover:text-black transition"
          >
            Explore Collection
          </Link>
        </motion.div>
      </section>

      {/* SIGNATURE SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="py-16 md:py-40 px-6 md:px-16 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* IMAGES */}
          <div className="relative aspect-4/5 md:aspect-auto md:h-[85vh] w-full max-w-sm mx-auto lg:max-w-full">
            <img
              src="/assets/C3.png"
              className="absolute top-0 left-0 w-[70%] h-[75%] object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/assets/C4.png"
              className="absolute bottom-0 right-0 w-[60%] h-[65%] object-cover border-4 md:border-8 border-white"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* TEXT */}
          <div className="text-center lg:text-left mt-8 lg:mt-0">
            <p className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs text-[#4c0519]/50 mb-4 md:mb-6">
              Signature
            </p>

            <div className="overflow-hidden mb-6 md:mb-8 flex justify-center lg:justify-start">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-8xl text-[#4c0519] leading-tight md:leading-[0.9] font-light"
              >
                Modern <br />
                <span className="italic">Femininity</span>
              </motion.h2>
            </div>

            <p className="mt-8 text-[#4c0519]/70 text-lg max-w-md leading-relaxed">
              A curated blend of softness and strength. Designed for women who
              command attention without asking for it.
            </p>
          </div>

        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="py-40 px-6 md:px-16 text-center max-w-5xl mx-auto"
      >

        <p className="text-lg text-[#4c0519]/70 leading-relaxed font-light">
          We create dresses that are not just worn — they are experienced.
          Every piece is crafted with precision, using premium fabrics that
          flow naturally with your movement.
        </p>

        <p className="mt-6 text-lg text-[#4c0519]/70 leading-relaxed font-light">
          From bridal couture to modern silhouettes, our collections are made
          for women who value confidence, grace, and individuality.
        </p>

        <Link
          to="/about"
          className="mt-12 inline-block text-xs tracking-[0.3em] uppercase border-b border-[#4c0519]"
        >
          Learn More
        </Link>
      </motion.section>

      {/* FEATURE */}
      <section className="py-16 md:py-40 px-6 md:px-16 bg-[#faf0f2] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center max-w-7xl mx-auto">

          {/* TEXT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="uppercase text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] text-[#4c0519]/50 mb-4 md:mb-6">
              Exclusive
            </p>

            <div className="overflow-hidden mb-6 md:mb-8 flex justify-center lg:justify-start">
              <motion.h3
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-8xl text-[#4c0519] font-light leading-snug"
              >
                Bridal <span className="italic">Collection</span>
              </motion.h3>
            </div>

            <p className="text-[#4c0519]/70 text-lg leading-relaxed mb-10 max-w-md">
              Discover handcrafted bridal dresses designed to make your most
              important moments unforgettable.
            </p>

            <Link
              to="/gallery"
              className="bg-[#4c0519] text-white px-14 py-6 text-xs tracking-[0.3em] hover:bg-[#8e1c3e] transition"
            >
              View Collection
            </Link>
          </div>

          {/* IMAGES */}
          <div className="relative aspect-3/4 md:aspect-auto md:h-[95vh] order-1 lg:order-2 w-full max-w-sm mx-auto lg:max-w-full">
            <img
              src="/assets/C1.png"
              className="absolute top-0 right-0 w-[75%] h-[75%] object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/assets/C2.png"
              className="absolute bottom-0 left-0 w-[55%] h-[60%] object-cover border-4 md:border-12 border-[#faf0f2]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* KURTHI COLLECTION */}
      <section className="py-16 md:py-40 px-6 md:px-16 bg-[#fffafb] overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 md:mb-20"
          >
            <p className="uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs text-[#4c0519]/50 mb-4 md:mb-6">
              Ethnic Elegance
            </p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-8xl text-[#4c0519] font-light leading-tight"
              >
                Kurthi <span className="italic">Collection</span>
              </motion.h2>
            </div>
            <p className="mt-6 md:mt-8 text-[#4c0519]/70 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Exquisitely crafted kurthis that blend traditional artistry with contemporary design.
              Perfect for every occasion — from casual outings to grand celebrations.
            </p>
          </motion.div>

          {/* Kurthi Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0 }}
              className="group relative overflow-hidden aspect-[3/4]"
            >
              <img
                src="/assets/C5.png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                alt="Designer Kurthi - Embroidered Silk"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-xs tracking-[0.2em] uppercase">Embroidered Silk</p>
                <p className="text-white/70 text-sm mt-1">Festive Collection</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="group relative overflow-hidden aspect-[3/4]"
            >
              <img
                src="/assets/C6.png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                alt="Designer Kurthi - Contemporary Chikan"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-xs tracking-[0.2em] uppercase">Contemporary Chikan</p>
                <p className="text-white/70 text-sm mt-1">Casual Elegance</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="group relative overflow-hidden aspect-[3/4]"
            >
              <img
                src="/assets/C10.png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                alt="Designer Kurthi - Royal Zari Work"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-xs tracking-[0.2em] uppercase">Royal Zari Work</p>
                <p className="text-white/70 text-sm mt-1">Premium Heritage</p>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12 md:mt-16"
          >
            <Link
              to="/gallery"
              className="inline-block border border-[#4c0519] px-14 py-5 text-xs tracking-[0.3em] text-[#4c0519] hover:bg-[#4c0519] hover:text-white transition-all duration-300 uppercase"
            >
              Explore Kurthis
            </Link>
          </motion.div>
        </div>
      </section>

      {/* NIGHTWEAR COLLECTION */}
      <section className="py-16 md:py-40 px-6 md:px-16 bg-gradient-to-b from-[#1a0a10] to-[#2d1020] overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 md:mb-20"
          >
            <p className="uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs text-white/40 mb-4 md:mb-6">
              Luxe Comfort
            </p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-8xl text-white font-light leading-tight"
              >
                Nightwear <span className="italic">Collection</span>
              </motion.h2>
            </div>
            <p className="mt-6 md:mt-8 text-white/50 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Indulge in the finest sleepwear crafted from premium satin and silk.
              Where luxury meets unparalleled comfort for your restful evenings.
            </p>
          </motion.div>

          {/* Nightwear Image Grid — Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Left - Large Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden aspect-[3/4] lg:aspect-auto lg:row-span-2"
            >
              <img
                src="/assets/maxi/M11.png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                alt="Luxury Satin Nightwear Set"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-xs tracking-[0.2em] uppercase">Satin Dream Set</p>
                <p className="text-white/60 text-sm mt-1">Premium Sleepwear</p>
              </div>
            </motion.div>

            {/* Right Top */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="group relative overflow-hidden aspect-[4/3]"
            >
              <img
                src="/assets/maxi/M10.png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                alt="Silk Nightgown"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-xs tracking-[0.2em] uppercase">Silk Nightgown</p>
                <p className="text-white/60 text-sm mt-1">Evening Comfort</p>
              </div>
            </motion.div>

            {/* Right Bottom */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="group relative overflow-hidden aspect-[4/3]"
            >
              <img
                src="/assets/maxi/M13.png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                alt="Luxury Loungewear"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-xs tracking-[0.2em] uppercase">Luxe Loungewear</p>
                <p className="text-white/60 text-sm mt-1">Comfort Redefined</p>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12 md:mt-16"
          >
            <Link
              to="/gallery"
              className="inline-block border border-white/50 px-14 py-5 text-xs tracking-[0.3em] text-white hover:bg-white hover:text-[#1a0a10] transition-all duration-300 uppercase"
            >
              Explore Nightwear
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-40 px-6 text-center max-w-4xl mx-auto">
        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl text-[#4c0519] italic leading-snug"
          >
            "The dress felt like it was made just for me."
          </motion.h2>
        </div>

        <p className="text-[#4c0519]/60">
          — Ayesha, Bridal Client
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 bg-[#4c0519] text-white text-center px-6">
        <div className="overflow-hidden mb-8 w-full flex justify-center">
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-8xl italic leading-tight"
          >
            Book Your Fitting
          </motion.h2>
        </div>

        <p className="text-white/70 mb-12 text-lg">
          Visit our studio and experience personalized styling.
        </p>

        <Link
          to="/contact"
          className="border border-white px-16 py-6 text-xs tracking-[0.3em] hover:bg-white hover:text-black transition"
        >
          Reserve Appointment
        </Link>
      </section>

    </div>
  );
}
