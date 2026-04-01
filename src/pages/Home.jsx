import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, CreditCard, Headphones, ArrowRight, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import ShopByCategory from "../components/category";
import HeroSection from "../components/herosection";
import PromoSection from "../components/product";

/* ── Feature Bar ────────────────────────────────────── */
const features = [
  { icon: <Truck size={28} strokeWidth={1.2} />, title: "Free Shipping", desc: "On orders above ₹999" },
  { icon: <CreditCard size={28} strokeWidth={1.2} />, title: "Flexible Payment", desc: "Multiple payment methods" },
  { icon: <Headphones size={28} strokeWidth={1.2} />, title: "24/7 Support", desc: "Dedicated customer care" },
];

const FeatureBar = () => (
  <section className="py-10 md:py-14 px-6 md:px-12 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex items-center gap-5 justify-center md:justify-start"
        >
          <div className="w-14 h-14 rounded-full bg-[#f5f0eb] flex items-center justify-center text-[#c4a77d] shrink-0">
            {f.icon}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#1a1a1a] tracking-[0.03em]">{f.title}</h4>
            <p className="text-xs text-[#888] mt-0.5">{f.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

/* ── Deals of the Day ────────────────────────────────── */
const deals = [
  { name: "Boho Dress", price: "₹1,499", oldPrice: "₹2,999", rating: 4.8, img: "/assets/C1.png", discount: "50%" },
  { name: "Modern Party Dress", price: "₹2,499", oldPrice: "₹4,299", rating: 4.9, img: "/assets/C2.png", discount: "42%" },
  { name: "Cotton Casual Kurti", price: "₹899", oldPrice: "₹1,799", rating: 4.6, img: "/assets/C5.png", discount: "50%" },
];

const DealsSection = () => (
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
          <p className="text-[#c4a77d] text-xs tracking-[0.2em] uppercase font-medium mb-3">Today Deals</p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a]">Deals of the Day</h2>
        </div>
        <p className="text-[#888] text-sm mt-4 md:mt-0 max-w-sm">
          Our set of daily, weekly and monthly are curated for those who like a great deal.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deals.map((deal, i) => (
          <motion.div
            key={deal.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-500"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f0eb]">
              <img src={deal.img} alt={deal.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] tracking-[0.1em] uppercase px-3 py-1 rounded-full font-medium">
                {deal.discount} Off
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={11} className={j < Math.floor(deal.rating) ? 'fill-[#f5a623] text-[#f5a623]' : 'text-gray-200'} />
                ))}
                <span className="text-[10px] text-[#999] ml-1">{deal.rating}</span>
              </div>
              <h3 className="text-sm font-medium text-[#1a1a1a] mb-2">{deal.name}</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-semibold text-[#1a1a1a]">{deal.price}</span>
                <span className="text-sm text-[#999] line-through">{deal.oldPrice}</span>
              </div>
              <button className="w-full bg-[#1a1a1a] text-white py-3 rounded-lg text-xs tracking-[0.1em] uppercase font-medium hover:bg-[#333] transition-colors flex items-center justify-center gap-2 group/btn">
                Shop Now
                <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Collection Banners (Men's & Women's) ──────────── */
const CollectionBanners = () => (
  <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Men's */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-2xl bg-[#e8c46d] min-h-[400px] group cursor-pointer"
      >
        <div className="absolute inset-0">
          <img src="/assets/C3.png" alt="Men's Collection" className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        </div>
        <div className="relative z-10 p-10 md:p-14 flex flex-col justify-end h-full bg-gradient-to-t from-black/50 to-transparent">
          <p className="text-white/70 text-xs tracking-[0.15em] uppercase mb-2">Flat 25% Discount</p>
          <h3 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Men's Latest<br />Collection
          </h3>
          <p className="text-white/60 text-sm mb-6 max-w-xs">
            Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-[#c4a77d] text-white px-6 py-3 rounded-lg text-xs tracking-[0.1em] uppercase font-medium w-fit hover:bg-[#b49770] transition-colors group/btn">
            Shop Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* Women's */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative overflow-hidden rounded-2xl bg-[#e8c46d] min-h-[400px] group cursor-pointer"
      >
        <div className="absolute inset-0">
          <img src="/assets/C4.png" alt="Women's Collection" className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        </div>
        <div className="relative z-10 p-10 md:p-14 flex flex-col justify-end h-full bg-gradient-to-t from-black/50 to-transparent">
          <p className="text-white/70 text-xs tracking-[0.15em] uppercase mb-2">Flat 25% Discount</p>
          <h3 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Women's Latest<br />Fashion
          </h3>
          <p className="text-white/60 text-sm mb-6 max-w-xs">
            Elevate your everyday style with our curated women's collection.
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-[#c4a77d] text-white px-6 py-3 rounded-lg text-xs tracking-[0.1em] uppercase font-medium w-fit hover:bg-[#b49770] transition-colors group/btn">
            Shop Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ── Instagram Section ────────────────────────────────── */
const instagramImages = [
  "/assets/C1.png",
  "/assets/C2.png",
  "/assets/C5.png",
  "/assets/C6.png",
  "/assets/maxi/M11.png",
  "/assets/C4.png",
];

const InstagramSection = () => (
  <section className="py-16 md:py-24 px-6 md:px-12 bg-[#faf8f5]">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="text-[#c4a77d] text-xs tracking-[0.2em] uppercase font-medium mb-3">Follow Us</p>
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a]">Follow Us On Instagram</h2>
      </motion.div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {instagramImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="aspect-square overflow-hidden rounded-xl group cursor-pointer relative"
          >
            <img src={img} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
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
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <p className="text-[#c4a77d] text-xs tracking-[0.2em] uppercase font-medium mb-3">Testimonial</p>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a]">What Our Clients Say</h2>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setCurrent((current + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#faf8f5] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Avatar */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-lg">
            <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-1 justify-center md:justify-start mb-4">
              <Quote size={24} className="text-[#c4a77d] rotate-180 mr-2" />
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className={j < t.rating ? 'fill-[#f5a623] text-[#f5a623]' : 'text-gray-200'} />
              ))}
              <span className="text-sm text-[#999] ml-2">{t.rating}.0</span>
            </div>
            <p className="text-[#555] text-base leading-relaxed mb-6 font-light">{t.text}</p>
            <div>
              <p className="text-[#1a1a1a] font-semibold text-sm">{t.name}</p>
              <p className="text-[#999] text-xs">{t.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ── News & Blogs ────────────────────────────────────── */
const blogs = [
  {
    title: "Your Ultimate Guide to Healthy Living",
    date: "March 15, 2026",
    category: "Fashion",
    img: "/assets/C4.png",
  },
  {
    title: "The Best Body Care Products That You'll Love",
    date: "March 12, 2026",
    category: "Lifestyle",
    img: "/assets/maxi/M10.png",
  },
  {
    title: "Why Eco-Friendly Products are Essential",
    date: "March 10, 2026",
    category: "Sustainable",
    img: "/assets/C6.png",
  },
];

const BlogSection = () => (
  <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="text-[#c4a77d] text-xs tracking-[0.2em] uppercase font-medium mb-3">News & Blog</p>
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a]">Our Latest News & Blogs</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <motion.article
            key={blog.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl mb-5">
              <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#c4a77d] font-medium bg-[#c4a77d]/10 px-3 py-1 rounded-full">{blog.category}</span>
              <span className="text-xs text-[#999]">{blog.date}</span>
            </div>
            <h3 className="text-lg font-serif font-semibold text-[#1a1a1a] group-hover:text-[#c4a77d] transition-colors leading-snug">
              {blog.title}
            </h3>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);


/* ── Main Home Page ──────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-white w-full">
      <HeroSection />
      <FeatureBar />
      <DealsSection />
      <ShopByCategory />
      <CollectionBanners />
      <PromoSection />
      <InstagramSection />
      <TestimonialsSection />
      <BlogSection />
    </div>
  );
}
