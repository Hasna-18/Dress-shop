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
              src="/assets/L2.png"
              className="absolute top-0 left-0 w-[70%] h-[75%] object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/assets/L3.png"
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
        <div className="overflow-hidden mb-8 md:mb-10 w-full flex justify-center">
          <motion.h2 
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-7xl text-[#4c0519] font-light leading-snug"
          >
            Designed for Women Who Own Their Presence
          </motion.h2>
        </div>

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
              src="/assets/G19.jpg"
              className="absolute top-0 right-0 w-[75%] h-[75%] object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/assets/L5.png"
              className="absolute bottom-0 left-0 w-[55%] h-[60%] object-cover border-4 md:border-12 border-[#faf0f2]"
              loading="lazy"
              decoding="async"
            />
          </div>
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
