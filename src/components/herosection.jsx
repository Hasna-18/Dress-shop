import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-[#fff5f8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[70vh]">

          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[#f4a7bb] text-sm tracking-[0.2em] uppercase font-bold mb-6"
            >
              Ladies Wear Collection
            </motion.p>

            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-[#1a1a1a] font-serif font-semibold"
              >
                Welcome to<br />
                <span className="italic font-light">Our Shop:</span> For<br />
                Ladies Fashion
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-[#666] text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-10 font-light"
            >
              We sell Hijabs, Churidars, Shawls, Partha, Nighties, Tops, Ladies Shirts, and Gowns. Quality clothes for your everyday style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link
                to="/gallery"
                className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-10 py-4 text-sm tracking-[0.1em] hover:bg-[#333] transition-all duration-300 group"
              >
                Discover Collections
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full aspect-[3/4] max-w-lg mx-auto lg:max-w-full overflow-hidden rounded-t-[140px] sm:rounded-t-[200px]">
              <img
                src="/assets/tops/h30.png"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                alt="Fashion Model"
              />
              {/* Decorative overlay badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#999] mb-1">New In</p>
                <p className="text-lg font-serif font-semibold text-[#1a1a1a]">Summer Collection</p>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-[#f4a7bb]/20 rounded-full hidden lg:block animate-[float_3s_ease-in-out_infinite]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#f4a7bb]/10 rounded-full hidden lg:block animate-[float_4s_ease-in-out_infinite_0.5s]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;