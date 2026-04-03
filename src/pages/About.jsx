import { motion } from 'framer-motion';
import { Star, ShieldCheck, Heart, Leaf } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen font-sans overflow-hidden">
      
      {/* HERO HEADER */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[#c4a77d] text-xs tracking-[0.2em] uppercase font-medium mb-6"
            >
              Our Journey
            </motion.p>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-4xl sm:text-7xl md:text-8xl lg:text-[7vw] leading-[1.1] text-[#1a1a1a] font-serif font-semibold"
              >
                About Our <br />
                <span className="italic font-light text-[#c4a77d]">Shop</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 text-[#666] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed px-4"
            >
              "Clothing." is a local shop where we provide a variety of ladies' wear. We focus on offering good quality Hijabs, Churidars, Shawls, and other ladies' garments for everyone.
            </motion.p>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img src="/assets/C3.png" alt="Craftsmanship" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-[#f5f0eb] rounded-[30px] -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#f5f0eb] rounded-[30px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-12 lg:mt-0"
          >
            <p className="text-[#c4a77d] text-xs tracking-[0.2em] uppercase font-medium mb-4">The Craft</p>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a] mb-8 leading-tight">
              Designed with <span className="italic font-light">Purpose</span> & Detailed with Love
            </h2>
            <div className="space-y-6 text-[#555] font-light text-base md:text-lg leading-relaxed">
              <p>
                We stock a wide collection of ladies' wear in our shop. We make sure to bring the latest varieties like Parthas, Gowns, and Nighties for our customers.
              </p>
              <div className="py-8 px-10 bg-[#faf8f5] rounded-3xl border border-gray-100 my-10 relative">
                <QuoteIcon className="absolute top-6 left-6 text-[#c4a77d]/20 w-12 h-12" />
                <p className="italic text-xl md:text-2xl text-[#1a1a1a] leading-tight font-serif">
                  "Our goal is to provide quality ladies' clothing that is comfortable and stylish for every woman who visits our shop."
                </p>
              </div>
              <p>
                From daily wear Hijabs to special gowns and Churidars, we check all our stock to make sure the quality is good and the prices are fair for our customers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[#c4a77d] text-xs tracking-[0.2em] uppercase font-medium mb-4">Values</p>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a]">Our Core Beliefs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck size={32} />, title: "Good Quality", desc: "We select the best materials available for our customers." },
              { icon: <Leaf size={32} />, title: "Best Selection", desc: "Many designs and varieties in Hijabs, Shawls and Gowns." },
              { icon: <Star size={32} />, title: "Daily Arrivals", desc: "New stock of Parthas and Tops arriving regularly." },
              { icon: <Heart size={32} />, title: "Customer Care", desc: "We help you find the right fit for your daily needs." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl group hover:shadow-xl transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 bg-[#faf8f5] rounded-2xl flex items-center justify-center text-[#c4a77d] mb-6 mx-auto group-hover:bg-[#c4a77d] group-hover:text-white transition-colors duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a1a1a] mb-3">{value.title}</h3>
                <p className="text-[#888] text-sm font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-10 md:p-20 rounded-[50px] bg-[#1a1a1a] text-white overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c4a77d]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-semibold italic mb-8">Visit our shop today!</h2>
              <p className="text-white/60 text-lg mb-12 font-light max-w-lg mx-auto">
                Join many women who trust our collection for their daily wear.
              </p>
              <a href="/gallery" className="inline-block bg-[#c4a77d] text-white px-14 py-5 rounded-full text-sm tracking-widest font-medium hover:bg-white hover:text-[#1a1a1a] transition-all duration-300">
                VIEW COLLECTION
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function QuoteIcon(props) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H10.017V21H14.017ZM10.017 21V13H7.017C6.46472 13 6.017 12.5523 6.017 12V9C6.017 8.44772 6.46472 8 7.017 8H11.017C11.5693 8 12.017 8.44772 12.017 9V15C12.017 15.5523 11.5693 16 11.017 16H8.017C7.46472 16 7.017 16.8954 7.017 18V21H10.017Z" /></svg>
  );
}
