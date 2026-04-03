import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Hijab & Shawls",
    subtitle: "Available Now",
    img: "/assets/tops/h38.png",
    bg: "#fdf2f8",
    size: "large",
  },
  {
    name: "Churidar & Partha",
    subtitle: "New Varieties",
    img: "/assets/tops/c2.png",
    bg: "#fce8ed",
    size: "large",
  },
  {
    name: "Gowns",
    subtitle: "Quality Wear",
    img: "/assets/tops/h37.png",
    bg: "#fff0f3",
    size: "small",
  },
  {
    name: "Maxi ",
    subtitle: "Daily Wear",
    img: "/assets/maxi/M2.png",
    bg: "#fff5f7",
    size: "small",
  },
];

const ShopByCategory = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16"
        >
          <div>
            <p className="text-[#f4a7bb] text-xs tracking-[0.2em] uppercase font-bold mb-3">
              Categories
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a] leading-tight">
              Collections
            </h2>
          </div>
          <Link
            to="/gallery"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm text-[#1a1a1a] hover:text-[#f4a7bb] transition-colors group"
          >
            View All
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Large Cards Row */}
          {categories.filter(c => c.size === "large").map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ backgroundColor: item.bg }}
            >
              <div className="flex flex-col md:flex-row items-center p-8 md:p-10 min-h-[320px]">
                {/* Text */}
                <div className="flex-1 z-10 mb-6 md:mb-0">
                  <p className="text-xs text-[#9d6874] tracking-[0.15em] uppercase mb-2">{item.subtitle}</p>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1a1a1a] mb-6">{item.name}</h3>
                  <span className="inline-flex items-center gap-2 text-sm text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 group-hover:gap-3 transition-all">
                    View Collection <ArrowRight size={14} />
                  </span>
                </div>
                {/* Image */}
                <div className="flex-1 relative h-[250px] md:h-[280px]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Small Cards Row */}
          {categories.filter(c => c.size === "small").map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ backgroundColor: item.bg }}
            >
              <div className="flex flex-col items-center p-8 min-h-[260px]">
                <div className="flex-1 w-full relative h-[160px] mb-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs text-[#9d6874] tracking-[0.15em] uppercase mb-1">{item.subtitle}</p>
                  <h3 className="text-xl font-serif font-semibold text-[#1a1a1a]">{item.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;