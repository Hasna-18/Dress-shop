import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, CreditCard, Headphones, ArrowRight, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import ShopByCategory from "../components/category";
import HeroSection from "../components/herosection";
import PromoSection from "../components/product";

// removed FeatureBar as requested (not e-commerce)

// removed FeatureBar component

/* ── Stock Arrivals ────────────────────────────── */
const stockItems = [
  { name: "Daily Hijab", img: "/assets/tops/h31.png", tag: "New Stock" },
  { name: "Ladies Churithar", img: "/assets/C2.png", tag: "Variety" },
  { name: "Quality Shawl", img: "/assets/tops/h32.png", tag: "Hot" },
];

const StockSection = () => (
  <section className="py-16 md:py-24 px-6 md:px-12 bg-[#faf8f5]">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
      >
        <div>
          <p className="text-[#c4a77d] text-xs tracking-[0.2em] uppercase font-medium mb-3">Shop Arrivals</p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a]">Latest in Store</h2>
        </div>

      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stockItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f0eb]">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <span className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-[10px] tracking-[0.1em] uppercase px-3 py-1 rounded-full font-medium">
                {item.tag}
              </span>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-base font-serif font-semibold text-[#1a1a1a] mb-4 group-hover:text-[#c4a77d] transition-colors uppercase tracking-widest">{item.name}</h3>
              <Link to="/gallery" className="inline-flex items-center gap-2 text-xs tracking-[0.1em] uppercase font-semibold text-[#c4a77d] hover:text-[#1a1a1a] transition-colors group/link">
                View More
                <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Store Banners ───────────────────────────────── */
const StoreBanners = () => (
  <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* 1. Churithar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-2xl bg-[#e8c46d] min-h-[550px] group cursor-pointer"
      >
        <div className="absolute inset-0">
          <img src="/assets/C1.png" alt="Ladies Wear" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        </div>
        <div className="relative z-10 p-8 h-full flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent">
          <p className="text-white/80 text-[10px] tracking-[0.2em] uppercase mb-2">New Arrival</p>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
            Churithar
          </h3>
          <p className="text-white/70 text-sm mb-8 max-w-xs font-light">
            We have many varieties of Churidars available for ladies.
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-6 py-3 rounded-full text-[10px] tracking-widest uppercase font-semibold w-fit hover:bg-[#c4a77d] hover:text-white transition-all group/btn">
            View Collection <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* 2. Pardha */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative overflow-hidden rounded-2xl bg-[#e8c46d] min-h-[550px] group cursor-pointer"
      >
        <div className="absolute inset-0">
          <img src="/assets/tops/h34.png" alt="Ladies Fashion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        </div>
        <div className="relative z-10 p-8 h-full flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent">
          <p className="text-white/80 text-[10px] tracking-[0.2em] uppercase mb-2">Popular</p>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
            Pardha
          </h3>
          <p className="text-white/70 text-sm mb-8 max-w-xs font-light">
            Our shop handles various designs of pardha for women.
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-6 py-3 rounded-full text-[10px] tracking-widest uppercase font-semibold w-fit hover:bg-[#c4a77d] hover:text-white transition-all group/btn">
            View Collection <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* 3. Gowns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative overflow-hidden rounded-2xl bg-[#e8c46d] min-h-[550px] group cursor-pointer"
      >
        <div className="absolute inset-0">
          <img src="/assets/tops/h35.png" alt="Ladies Fashion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        </div>
        <div className="relative z-10 p-8 h-full flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent">
          <p className="text-white/80 text-[10px] tracking-[0.2em] uppercase mb-2">New Selection</p>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
            Gowns
          </h3>
          <p className="text-white/70 text-sm mb-8 max-w-xs font-light">
            Our shop handles various designs of Gowns for women.
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-6 py-3 rounded-full text-[10px] tracking-widest uppercase font-semibold w-fit hover:bg-[#c4a77d] hover:text-white transition-all group/btn">
            View Collection <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* 4. Hijab */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative overflow-hidden rounded-2xl bg-[#e8c46d] min-h-[550px] group cursor-pointer"
      >
        <div className="absolute inset-0">
          <img src="/assets/tops/h31.png" alt="Ladies Fashion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        </div>
        <div className="relative z-10 p-8 h-full flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent">
          <p className="text-white/80 text-[10px] tracking-[0.2em] uppercase mb-2">Essential</p>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
            Hijab
          </h3>
          <p className="text-white/70 text-sm mb-8 max-w-xs font-light">
            Our shop handles various designs of Hijabs for women.
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-6 py-3 rounded-full text-[10px] tracking-widest uppercase font-semibold w-fit hover:bg-[#c4a77d] hover:text-white transition-all group/btn">
            View Collection <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* 5. Nighty */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative overflow-hidden rounded-2xl bg-[#e8c46d] min-h-[550px] group cursor-pointer"
      >
        <div className="absolute inset-0">
          <img src="/assets/maxi/M2.png" alt="Ladies Fashion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        </div>
        <div className="relative z-10 p-8 h-full flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent">
          <p className="text-white/80 text-[10px] tracking-[0.2em] uppercase mb-2">Comfort</p>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
            Nighty
          </h3>
          <p className="text-white/70 text-sm mb-8 max-w-xs font-light">
            Our shop handles various designs of Nighty for women.
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-6 py-3 rounded-full text-[10px] tracking-widest uppercase font-semibold w-fit hover:bg-[#c4a77d] hover:text-white transition-all group/btn">
            View Collection <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* 6. Shawls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative overflow-hidden rounded-2xl bg-[#e8c46d] min-h-[550px] group cursor-pointer"
      >
        <div className="absolute inset-0">
          <img src="/assets/tops/h36.png" alt="Ladies Fashion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        </div>
        <div className="relative z-10 p-8 h-full flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent">
          <p className="text-white/80 text-[10px] tracking-[0.2em] uppercase mb-2">Trending</p>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
            Shawls
          </h3>
          <p className="text-white/70 text-sm mb-8 max-w-xs font-light">
            Our shop handles various designs of Shawls for women.
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-6 py-3 rounded-full text-[10px] tracking-widest uppercase font-semibold w-fit hover:bg-[#c4a77d] hover:text-white transition-all group/btn">
            View Collection <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ── Instagram Section ────────────────────────────────── */

const InstagramSection = () => (
  <div className="h-full flex flex-col justify-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mb-10 text-left"
    >
      <p className="text-[#c4a77d] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">
        Social
      </p>
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1a1a1a] leading-tight">
        Mehar <span className="italic font-light text-[#c4a77d]">Instagram</span>
      </h2>
    </motion.div>

    <a
      href="https://www.instagram.com/mehar_clothings"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="absolute -inset-1 bg-linear-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] rounded-4xl opacity-20 group-hover:opacity-100 blur-sm transition-opacity duration-700" />
        
        <div className="relative aspect-video overflow-hidden rounded-3xl shadow-xl bg-[#faf8f5] border border-gray-100">
          <img 
            src='/assets/tops/logo1.png' 
            alt="Mehar Official" 
            className="w-full h-full object-contain p-8 transition-transform duration-1000 group-hover:scale-105" 
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold tracking-widest text-[#1a1a1a] shadow-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            @mehar_clothings
          </div>
        </div>
      </motion.div>
    </a>
  </div>
);

/* ── Testimonials ────────────────────────────────────── */
const testimonials = [
  {
    name: "Leslie Alexander",
    role: "Fashion Enthusiast",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet consectetur adipiscing elit. Totam rem aperiam eaque ipsa.",
    rating: 5,
    img: "/assets/C1.png",
  },
  {
    name: "Ayesha Khan",
    role: "Bridal Client",
    text: "The dress felt like it was made just for me. Every stitch, every detail was pure perfection. I couldn't have asked for a more beautiful bridal outfit. Truly extraordinary craftsmanship!",
    rating: 5,
    img: "/assets/C2.png",
  },
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    text: "I've been shopping here for years and the quality never disappoints. The customer service is exceptional and the designs are always on trend. My go-to fashion destination!",
    rating: 4,
    img: "/assets/C5.png",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <div className="flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <p className="text-[#c4a77d] text-[10px] tracking-[0.2em] uppercase font-bold mb-4">Reviews</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1a1a1a]">Client Stories</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={() => setCurrent((current + 1) % testimonials.length)}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </motion.div>

      <motion.div
        key={current}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-black/5 border border-gray-50"
      >
        <div className="flex items-center gap-6 mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 border-2 border-[#f5f0eb]">
            <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={12} className={j < t.rating ? 'fill-[#f5a623] text-[#f5a623]' : 'text-gray-200'} />
              ))}
            </div>
            <p className="text-[#1a1a1a] font-bold text-sm tracking-tight">{t.name}</p>
            <p className="text-[#999] text-[10px] uppercase font-medium tracking-widest">{t.role}</p>
          </div>
        </div>
        
        <div className="relative">
          <Quote size={32} className="text-[#c4a77d]/10 absolute -top-4 -left-2 rotate-180" />
          <p className="text-[#555] text-sm md:text-base leading-relaxed font-light relative z-10 italic">
            "{t.text}"
          </p>
        </div>
      </motion.div>
    </div>
  );
};


/* ── Main Home Page ──────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-white w-full">
      <HeroSection />
      <StockSection />
      <ShopByCategory />
      <StoreBanners />
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-stretch">
          <InstagramSection />
          <TestimonialsSection />
        </div>
      </section>
    </div>
  );
}
