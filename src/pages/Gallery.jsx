import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { id: 1, src: "/assets/G1.jpg", height: "aspect-[3/4]" },
    { id: 2, src: "/assets/G2.jpg", height: "aspect-square" },
    { id: 3, src: "/assets/G3.jpg", height: "aspect-square" },
    { id: 4, src: "/assets/G4.jpg", height: "aspect-[4/5]" },
    { id: 5, src: "/assets/G5.jpg", height: "aspect-[3/4]" },
    { id: 6, src: "/assets/G6.jpg", height: "aspect-[3/4]" },
    { id: 7, src: "/assets/G7.jpg", height: "aspect-[3/4]" },
    { id: 8, src: "/assets/G8.jpg", height: "aspect-square" },
    { id: 9, src: "/assets/G9.jpg", height: "aspect-[4/5]" },
    { id: 10, src: "/assets/G10.jpg", height: "aspect-[3/4]" },
    { id: 11, src: "/assets/G11.jpg", height: "aspect-[3/4]" },
    { id: 12, src: "/assets/G12.jpg", height: "aspect-square" },
    { id: 13, src: "/assets/G13.jpg", height: "aspect-square" },
    { id: 14, src: "/assets/G14.jpg", height: "aspect-[4/5]" },
    { id: 15, src: "/assets/G15.jpg", height: "aspect-[3/4]" },
  ];

  return (
    <section className="pt-24 md:pt-40 pb-32 bg-[#fffafb] min-h-screen px-4 md:px-12">
      <div className="columns-2 lg:columns-3 gap-2 md:gap-6 space-y-2 md:space-y-6">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img.src}
              alt={`Collection ${img.id}`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-white text-sm tracking-widest uppercase transition">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
