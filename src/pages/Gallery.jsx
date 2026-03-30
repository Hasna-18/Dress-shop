import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const images = [
    { id: 1, src: "/assets/maxi/M4.png", height: "aspect-[4/5]", category: "maxi", title: "Elegant Maxi" },
    { id: 2, src: "/assets/maxi/M12.png", height: "aspect-[3/4]", category: "maxi", title: "Floral Maxi" },
    { id: 3, src: "/assets/maxi/M6.png", height: "aspect-[3/4]", category: "maxi", title: "Summer Maxi" },
    { id: 4, src: "/assets/C10.png", height: "aspect-[3/4]", category: "kurthi", title: "Royal Kurthi" },
    { id: 5, src: "/assets/maxi/M8.png", height: "aspect-square", category: "maxi", title: "Classic Maxi" },
    { id: 6, src: "/assets/maxi/M9.png", height: "aspect-[4/5]", category: "nightwear", title: "Silk Nightwear" },
    { id: 7, src: "/assets/maxi/M10.png", height: "aspect-[3/4]", category: "nightwear", title: "Satin Set" },
    { id: 8, src: "/assets/maxi/M11.png", height: "aspect-[3/4]", category: "nightwear", title: "Dream Loungewear" },
    { id: 9, src: "/assets/C3.png", height: "aspect-[3/4]", category: "kurthi", title: "Embroidered Kurthi" },
    { id: 10, src: "/assets/maxi/M7.png", height: "aspect-square", category: "maxi", title: "Evening Maxi" },
    { id: 11, src: "/assets/C5.png", height: "aspect-square", category: "kurthi", title: "Designer Kurthi" },
    { id: 12, src: "/assets/C2.png", height: "aspect-[3/4]", category: "bridal", title: "Bridal Couture" },
    { id: 13, src: "/assets/C1.png", height: "aspect-[3/4]", category: "bridal", title: "Wedding Collection" },
    { id: 14, src: "/assets/C6.png", height: "aspect-[3/4]", category: "kurthi", title: "Chikan Kurthi" },
  ];

  const filters = [
    { key: "all", label: "All" },
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
    <div className="bg-[#fffafb] min-h-screen font-['Playfair_Display'] tracking-tight">
      {/* HERO HEADER */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-[#4c0519]">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-xs text-white/50 mb-4 md:mb-6"
          >
            Our Collections
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-5xl sm:text-7xl md:text-[9vw] leading-[1] text-white font-light"
            >
              The <span className="italic">Gallery</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 md:mt-8 text-white/40 text-base md:text-lg max-w-lg mx-auto font-light leading-relaxed"
          >
            A curated showcase of elegance, artistry, and timeless design
          </motion.p>
        </motion.div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fffafb] to-transparent" />
      </section>

      {/* FILTER TABS */}
      <section className="sticky top-0 z-30 bg-[#fffafb]/90 backdrop-blur-md border-b border-[#4c0519]/5">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-2 md:gap-4 py-4 md:py-5 overflow-x-auto no-scrollbar"
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`relative px-5 md:px-8 py-2.5 md:py-3 text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase transition-all duration-300 whitespace-nowrap rounded-none ${
                  activeFilter === filter.key
                    ? "text-white bg-[#4c0519]"
                    : "text-[#4c0519]/60 hover:text-[#4c0519] border border-[#4c0519]/15 hover:border-[#4c0519]/40"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="px-4 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="columns-2 lg:columns-3 gap-3 md:gap-5 space-y-3 md:space-y-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="group relative overflow-hidden cursor-pointer break-inside-avoid mb-3 md:mb-5"
                  onClick={() => setSelectedImage(img)}
                >
                  {/* Image */}
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-white text-sm md:text-base font-light tracking-wide">
                      {img.title}
                    </p>
                    <p className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase mt-1">
                      {img.category}
                    </p>
                  </div>

                  {/* Top-right category badge */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="bg-white/90 backdrop-blur-sm text-[#4c0519] text-[9px] md:text-[10px] tracking-[0.15em] uppercase px-3 py-1.5">
                      {img.category}
                    </span>
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full max-h-[85vh] object-contain"
              />

              {/* Info bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
                <p className="text-white text-lg md:text-xl font-light tracking-wide">
                  {selectedImage.title}
                </p>
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase mt-1">
                  {selectedImage.category} Collection
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors text-2xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTTOM CTA */}
      <section className="py-20 md:py-32 text-center px-6 bg-[#faf0f2]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs text-[#4c0519]/40 mb-4">
            Find Your Perfect Piece
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#4c0519] font-light italic leading-snug mb-8">
            Ready to explore more?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-[#4c0519] text-white px-14 py-5 text-xs tracking-[0.3em] uppercase hover:bg-[#8e1c3e] transition-all duration-300"
          >
            Book a Consultation
          </a>
        </motion.div>
      </section>
    </div>
  );
}
