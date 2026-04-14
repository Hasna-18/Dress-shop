import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Search, Filter } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const images = [
    // 🔹 TOPS (1–19)
    { id: 1, src: "/assets/tops/c1.png", category: "tops", title: "Cotton Shirt" },
    { id: 2, src: "/assets/tops/c2.png", category: "churithar", title: "Designer Top" },
    { id: 3, src: "/assets/tops/h22.png", category: "shawl", title: "Modern Shirt" },
    { id: 4, src: "/assets/tops/h23.png", category: "churithar", title: "Printed Shirt" },
    { id: 5, src: "/assets/tops/h24.png", category: "nighty", title: "Summer Shirt" },
    { id: 6, src: "/assets/tops/h25.png", category: "shawl", title: "Office Wear Top" },
    { id: 7, src: "/assets/tops/h26.png", category: "tops", title: "Stylish Shirt" },
    { id: 8, src: "/assets/tops/h27.png", category: "tops", title: "Long Top" },
    { id: 9, src: "/assets/tops/h28.png", category: "tops", title: "Daily Shirt" },
    { id: 10, src: "/assets/tops/h29.png", category: "tops", title: "Simple Top" },
    { id: 11, src: "/assets/tops/h30.png", category: "churithar", title: "Embroidered Top" },
    { id: 12, src: "/assets/tops/h31.png", category: "hijab", title: "Silk Hijab" },
    { id: 13, src: "/assets/tops/h32.png", category: "shawl", title: "Cotton Shawl" },
    { id: 14, src: "/assets/tops/h33.png", category: "hijab", title: "Printed Hijab" },
    { id: 15, src: "/assets/tops/h34.png", category: "partha", title: "Classic Abaya" },
    { id: 16, src: "/assets/tops/h35.png", category: "gowns", title: "Evening Gown" },
    { id: 17, src: "/assets/tops/h36.png", category: "shawl", title: "Partha Shawl" },
    { id: 18, src: "/assets/tops/h37.png", category: "gowns", title: "Evening Gown" },
    { id: 19, src: "/assets/tops/h38.png", category: "hijab", title: "Evening Gown" },

    // 🔹 MAXI (20–31)
    { id: 20, src: "/assets/maxi/M1.jpg", category: "nighty", title: "Purple Nighty" },
    { id: 21, src: "/assets/maxi/M2.png", category: "nighty", title: "Beige Nighty" },
    { id: 23, src: "/assets/maxi/M4.png", category: "nighty", title: "Blue Nighty" },
    { id: 24, src: "/assets/maxi/M6.png", category: "nighty", title: "Dark Blue Nighty" },
    { id: 25, src: "/assets/maxi/M7.png", category: "nighty", title: "Maroon Nighty" },
    { id: 26, src: "/assets/maxi/M8.png", category: "nighty", title: "Rust Nighty" },
    { id: 27, src: "/assets/maxi/M9.png", category: "nighty", title: "Yellow Nighty" },
    { id: 28, src: "/assets/maxi/M10.png", category: "nighty", title: "Dark Brown Nighty" },
    { id: 29, src: "/assets/maxi/M11.png", category: "nighty", title: "Grey Nighty" },
    { id: 30, src: "/assets/maxi/M12.png", category: "nighty", title: "Soft Pink Nighty" },
    { id: 31, src: "/assets/maxi/M13.png", category: "nighty", title: "Light Green Nighty" },

    // 🔹 DRESS (32–60)
    { id: 32, src: "/assets/dress/d1.jpeg", category: "gowns", title: "Black Embroidered Dress" },
    { id: 33, src: "/assets/dress/d2.jpeg", category: "gowns", title: "Maroon Printed Dress" },
    { id: 34, src: "/assets/dress/d3.jpeg", category: "gowns", title: "Floral Cream Dress" },
    { id: 35, src: "/assets/dress/d4.jpeg", category: "gowns", title: "Beige Designer Dress" },
    { id: 36, src: "/assets/dress/d5.jpeg", category: "gowns", title: "Black Floral Dress" },
    { id: 37, src: "/assets/dress/d6.jpeg", category: "gowns", title: "Red Ethnic Dress" },
    { id: 38, src: "/assets/dress/d7.jpeg", category: "gowns", title: "Grey Striped Dress" },

    // d8 missing

    { id: 39, src: "/assets/dress/d9.jpeg", category: "gowns", title: "Teal Straight Dress" },
    { id: 40, src: "/assets/dress/d10.jpeg", category: "gowns", title: "Light Green Dress" },
    { id: 41, src: "/assets/dress/d11.jpeg", category: "gowns", title: "Green Saree Style Dress" },
    { id: 42, src: "/assets/dress/d12.jpeg", category: "gowns", title: "Black Printed Dress" },
    { id: 43, src: "/assets/dress/d13.jpeg", category: "gowns", title: "Blue Dupatta Dress" },
    { id: 44, src: "/assets/dress/d14.jpeg", category: "partha", title: "Black Long Dress" },
    { id: 45, src: "/assets/dress/d15.jpeg", category: "gowns", title: "Blue Casual Dress" },
    { id: 46, src: "/assets/dress/d16.jpeg", category: "gowns", title: "Grey Simple Dress" },
    { id: 47, src: "/assets/dress/d17.jpeg", category: "gowns", title: "Maroon Printed Dress" },
    { id: 48, src: "/assets/dress/d18.jpeg", category: "gowns", title: "Navy Blue Dress" },
    { id: 49, src: "/assets/dress/d19.jpeg", category: "partha", title: "Purple Elegant Dress" },
    { id: 50, src: "/assets/dress/d20.jpeg", category: "gowns", title: "Beige Pattern Dress" },
    { id: 51, src: "/assets/dress/d21.jpeg", category: "nighty", title: "Red Pattern Dress" },
    { id: 52, src: "/assets/dress/d22.jpeg", category: "gowns", title: "Yellow Festive Dress" },
    { id: 53, src: "/assets/dress/d23.jpeg", category: "gowns", title: "Orange Traditional Dress" },
    { id: 54, src: "/assets/dress/d24.jpeg", category: "gowns", title: "Pink Embroidered Dress" },
    { id: 55, src: "/assets/dress/d25.jpeg", category: "gowns", title: "Black Ethnic Dress" },
    { id: 56, src: "/assets/dress/d26.jpeg", category: "gowns", title: "Navy Blue Party Dress" },
    { id: 57, src: "/assets/dress/d27.jpeg", category: "gowns", title: "Red Festive Dress" },
    { id: 58, src: "/assets/dress/d28.jpeg", category: "gowns", title: "Purple Designer Dress" },
    { id: 59, src: "/assets/dress/d29.jpeg", category: "gowns", title: "Wine Embroidered Dress" },
    { id: 60, src: "/assets/dress/d30.jpeg", category: "gowns", title: "Black White Printed Dress" },

    // 🔹 C (61–67)
    { id: 61, src: "/assets/C5.png", category: "churithar", title: "Beige Printed Churithar" },
    { id: 62, src: "/assets/C4.png", category: "churithar", title: "Brown Patterned Churithar" },
    { id: 63, src: "/assets/C1.png", category: "churithar", title: "Blue Embroidered Churithar" },
    { id: 64, src: "/assets/C2.png", category: "churithar", title: "Red Festive Churithar" },
    { id: 65, src: "/assets/C3.png", category: "churithar", title: "Green Traditional Churithar" },
    { id: 66, src: "/assets/L1.png", category: "tops", title: "Cream Ethnic Set" },
    { id: 67, src: "/assets/C10.png", category: "churithar", title: "Pink Designer Churithar" }
  ];

  const filters = [
    { key: "all", label: "All Items" },
    { key: "hijab", label: "Hijabs & Shawls" },
    { key: "partha", label: "Partha" },
    { key: "churithar", label: "Churithar" },
    { key: "nighty", label: "Nighty" },
    { key: "tops", label: "Tops & Shirts" },
    { key: "gowns", label: "Gowns" },
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
              Our Collection
            </p>
            <h1 className="text-4xl md:text-7xl font-serif font-semibold text-[#1a1a1a] mb-8">
              The <span className="italic font-light">Gallery</span> Shop
            </h1>
            <p className="text-[#666] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Browse our latest selection of ladies' wear available in our store.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="sticky top-[73px] md:top-[88px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start md:justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2.5 text-[13px] tracking-wide rounded-full transition-all duration-300 whitespace-nowrap ${activeFilter === filter.key
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
            className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6"
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

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 p-4 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-base md:text-lg font-serif font-semibold">{img.title}</p>
                    <p className="text-white/70 text-[9px] tracking-[0.15em] uppercase mt-1">{img.category}</p>
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
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-110"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center font-serif text-white text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-8">
                <h2 className="text-3xl font-semibold mb-2">{selectedImage.title}</h2>
                <p className="text-[#c4a77d] text-sm tracking-[0.2em] uppercase">{selectedImage.category} Collection</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

