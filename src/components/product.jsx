import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Heart, ShoppingBag, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: "₹2,499",
    oldPrice: "₹4,999",
    rating: 4.8,
    reviews: 124,
    img: "/assets/C1.png",
    tag: "Sale",
    category: "women",
  },
  {
    id: 2,
    name: "Silk Embroidered Kurti",
    price: "₹1,899",
    oldPrice: "₹3,500",
    rating: 4.9,
    reviews: 89,
    img: "/assets/C5.png",
    tag: "Hot",
    category: "women",
  },
  {
    id: 3,
    name: "Classic Denim Jacket",
    price: "₹3,299",
    oldPrice: null,
    rating: 4.6,
    reviews: 56,
    img: "/assets/C3.png",
    tag: null,
    category: "men",
  },
  {
    id: 4,
    name: "Satin Nightwear Set",
    price: "₹1,599",
    oldPrice: "₹2,999",
    rating: 4.7,
    reviews: 201,
    img: "/assets/maxi/M11.png",
    tag: "Best Seller",
    category: "women",
  },
  {
    id: 5,
    name: "Premium Cotton Kurta",
    price: "₹2,199",
    oldPrice: null,
    rating: 4.5,
    reviews: 78,
    img: "/assets/C6.png",
    tag: null,
    category: "men",
  },
  {
    id: 6,
    name: "Chikankari Anarkali",
    price: "₹3,999",
    oldPrice: "₹6,500",
    rating: 5.0,
    reviews: 145,
    img: "/assets/C2.png",
    tag: "Sale",
    category: "women",
  },
  {
    id: 7,
    name: "Designer Crop Top",
    price: "₹999",
    oldPrice: "₹1,800",
    rating: 4.4,
    reviews: 67,
    img: "/assets/tops/c1.png",
    tag: null,
    category: "accessories",
  },
  {
    id: 8,
    name: "Luxe Silk Scarf",
    price: "₹1,299",
    oldPrice: null,
    rating: 4.8,
    reviews: 43,
    img: "/assets/C4.png",
    tag: "New",
    category: "accessories",
  },
];

const filters = ["All", "Women", "Men", "Accessories"];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

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
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#f5f0eb] mb-4">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Tag Badge */}
        {product.tag && (
          <span className={`absolute top-3 left-3 px-3 py-1 text-[10px] tracking-[0.1em] uppercase font-medium rounded-full ${
            product.tag === "Sale" 
              ? "bg-red-500 text-white" 
              : product.tag === "Hot" 
              ? "bg-orange-500 text-white" 
              : product.tag === "Best Seller"
              ? "bg-[#c4a77d] text-white"
              : "bg-[#1a1a1a] text-white"
          }`}>
            {product.tag}
          </span>
        )}

        {/* Hover Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-3 left-3 right-3 flex gap-2"
            >
              <button className="flex-1 bg-[#1a1a1a] text-white py-3 text-xs tracking-[0.1em] uppercase font-medium hover:bg-[#333] transition-colors rounded-lg flex items-center justify-center gap-2">
                <ShoppingBag size={14} />
                Add to Cart
              </button>
              <button className="bg-white text-[#1a1a1a] p-3 hover:bg-[#f5f0eb] transition-colors rounded-lg">
                <Eye size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wishlist Button */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
        >
          <Heart 
            size={15} 
            className={`transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-[#666]'}`} 
          />
        </button>
      </div>

      {/* Product Info */}
      <div>
        {/* Rating */}
        <div className="flex items-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={`${i < Math.floor(product.rating) ? 'fill-[#f5a623] text-[#f5a623]' : 'text-gray-200'}`} 
            />
          ))}
          <span className="text-xs text-[#999] ml-1">({product.reviews})</span>
        </div>

        {/* Name */}
        <h3 className="text-sm font-medium text-[#1a1a1a] mb-1 group-hover:text-[#c4a77d] transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-[#1a1a1a]">{product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-[#999] line-through">{product.oldPrice}</span>
          )}
        </div>
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
            Top Picks
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a] mb-4">
            Our Top Seller Products
          </h2>
          <p className="text-[#888] text-base max-w-lg mx-auto font-light">
            Handpicked favorites loved by thousands of customers
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 md:gap-4 mb-12"
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