import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Heart, ShoppingBag, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Hijab Collection",
    img: "/assets/C1.png",
    tag: "New",
    category: "hijab",
  },
  {
    id: 2,
    name: "Ladies Churithar",
    img: "/assets/C5.png",
    tag: null,
    category: "churithar",
  },
  {
    id: 3,
    name: "Shawls & Partha Shawls",
    img: "/assets/C4.png",
    tag: "Popular",
    category: "shawls",
  },
  {
    id: 4,
    name: "Partha / Abaya",
    img: "/assets/C2.png",
    tag: null,
    category: "partha",
  },
  {
    id: 5,
    name: "Ladies Tops & Shirts",
    img: "/assets/tops/c1.png",
    tag: null,
    category: "tops",
  },
  {
    id: 6,
    name: "Nighty & Gowns",
    img: "/assets/maxi/M11.png",
    tag: null,
    category: "nightwear",
  },
];

const filters = ["All", "Hijab", "Churithar", "Shawls", "Partha", "Tops", "Nightwear"];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-[#f5f0eb] mb-4">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Tag Badge */}
        {product.tag && (
          <span className="absolute top-3 left-3 px-3 py-1 text-[10px] tracking-widest uppercase font-medium rounded-full bg-[#1a1a1a] text-white">
            {product.tag}
          </span>
        )}

        {/* Hover Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-all"
            >
              <button className="bg-white text-[#1a1a1a] px-6 py-2.5 text-[11px] tracking-[0.1em] uppercase font-semibold hover:bg-[#1a1a1a] hover:text-white transition-all rounded-full flex items-center gap-2">
                View More
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-sm font-medium text-[#1a1a1a] mb-1 group-hover:text-[#c4a77d] transition-colors uppercase tracking-wider">
          {product.name}
        </h3>
        <p className="text-[10px] text-[#999] tracking-[0.1em] uppercase">Available at Shop</p>
      </div>
    </motion.div>
  );
};

const PromoSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category === activeFilter.toLowerCase());

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[#c4a77d] text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Collectives
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a] mb-4">
            Our Collection
          </h2>
          <p className="text-[#888] text-base max-w-lg mx-auto font-light">
            Quality cloths for every day at our physical store
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-start sm:justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar px-6 sm:px-0"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 md:px-8 py-2.5 text-sm tracking-[0.05em] rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#1a1a1a] text-white'
                  : 'bg-[#f5f0eb] text-[#666] hover:bg-[#ebe4da] hover:text-[#1a1a1a]'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoSection;