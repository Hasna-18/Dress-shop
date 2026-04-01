import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Search, Filter } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const images = [
    { id: 1, src: "/assets/maxi/M4.png", category: "maxi", title: "Elegant Maxi" },
    { id: 2, src: "/assets/maxi/M12.png", category: "maxi", title: "Floral Maxi" },
    { id: 3, src: "/assets/maxi/M6.png", category: "maxi", title: "Summer Maxi" },
    { id: 4, src: "/assets/C10.png", category: "kurthi", title: "Royal Kurthi" },
    { id: 5, src: "/assets/maxi/M8.png", category: "maxi", title: "Classic Maxi" },
    { id: 6, src: "/assets/maxi/M9.png", category: "nightwear", title: "Silk Nightwear" },
    { id: 7, src: "/assets/maxi/M10.png", category: "nightwear", title: "Satin Set" },
    { id: 8, src: "/assets/maxi/M11.png", category: "nightwear", title: "Dream Loungewear" },
    { id: 9, src: "/assets/C3.png", category: "kurthi", title: "Embroidered Kurthi" },
    { id: 10, src: "/assets/maxi/M7.png", category: "maxi", title: "Evening Maxi" },
    { id: 11, src: "/assets/C5.png", category: "kurthi", title: "Designer Kurthi" },
    { id: 12, src: "/assets/C2.png", category: "bridal", title: "Bridal Couture" },
    { id: 13, src: "/assets/C1.png", category: "bridal", title: "Wedding Collection" },
    { id: 14, src: "/assets/C6.png", category: "kurthi", title: "Chikan Kurthi" },
  ];

  const filters = [
    { key: "all", label: "All Collections" },
    { key: "kurthi", label: "Kurthi" },
    { key: "nightwear", label: "Nightwear" },
    { key: "maxi", label: "Maxi" },
    { key: "bridal", label: "Bridal" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* HERO HEADER */}
      <section className="relative pt-32 pb-16 md:pb-24 border-b border-gray-100 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="text-[#c4a77d] text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Explore Our Pieces
            </p>
            <h1 className="text-4xl md:text-7xl font-serif font-semibold text-[#1a1a1a] mb-8">
              The <span className="italic font-light">Collection</span> Gallery
            </h1>
            <p className="text-[#666] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Discover a curated showcase of our finest designs, from traditional ethnic wear to modern silhouettes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="sticky top-[108px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2.5 text-[13px] tracking-wide rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter.key
                    ? "bg-[#1a1a1a] text-white shadow-lg shadow-black/10"
                    : "bg-[#f5f0eb] text-[#666] hover:bg-[#ebe4da] hover:text-[#1a1a1a]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid bg-[#f5f0eb]"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-lg font-serif font-semibold">{img.title}</p>
                    <p className="text-white/70 text-[10px] tracking-[0.15em] uppercase mt-1">{img.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-8 text-center">
                <h2 className="text-white text-3xl font-serif font-semibold mb-2">{selectedImage.title}</h2>
                <p className="text-[#c4a77d] text-sm tracking-[0.2em] uppercase">{selectedImage.category} Collection</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
