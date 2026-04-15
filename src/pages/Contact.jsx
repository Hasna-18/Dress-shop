import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const phone = "919544713654";

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hi, I would like to know more about your collection.\n\nName: ${name} \nEmail: ${email} \nMessage: ${message}`
    );
    return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
  };

  // ✅ IMAGE ARRAY
  const images = [
    "/assets/build/b1.png",
    "/assets/build/b4.jpeg",
    "/assets/build/b5.jpeg",
    "/assets/build/b6.jpeg",
    "/assets/build/b7.jpeg",

  ];

  const [current, setCurrent] = useState(0);

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ✅ BUTTONS
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* HERO HEADER */}
      <section className="relative pt-32 pb-16 md:pb-24 border-b border-gray-100 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#c4a77d] text-xs tracking-[0.2em] uppercase font-medium mb-4"
          >
            Get In Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-7xl font-serif font-semibold text-[#1a1a1a] mb-6"
          >
            Connect With Our <span className="italic font-light">Shop</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[#666] text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed px-4"
          >
            If you have any questions about our clothes or need help finding something, please feel free to contact us.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-12 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a] mb-12">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#faf8f5] rounded-xl flex items-center justify-center text-[#c4a77d]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-1">
                    WhatsApp Call
                  </h4>
                  <p className="text-[#666] font-light">+91 9544713654</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#faf8f5] rounded-xl flex items-center justify-center text-[#c4a77d]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-1">
                    Email Us
                  </h4>
                  <p className="text-[#666] font-light">meharnighties@gmail.com</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#faf8f5] rounded-xl flex items-center justify-center text-[#c4a77d]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-1">
                    Our Shop
                  </h4>
                  <p className="text-[#666] font-light">
                    Mehar Nighty Center, Nadackal P O, Erattupetta, Pin: 686121
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#faf8f5] rounded-xl flex items-center justify-center text-[#c4a77d]">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-[#666] font-light">
                    Mon - Sat: 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* ✅ SLIDER */}
            <div className="mt-16 relative aspect-video rounded-[30px] overflow-hidden group">
              <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className="w-full h-full object-cover flex-shrink-0"
                    alt="shop"
                  />
                ))}
              </div>

              {/* LEFT */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                ‹
              </button>

              {/* RIGHT */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                ›
              </button>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-[#faf8f5] p-10 md:p-16 rounded-[40px] border border-gray-100"
          >
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3">
                Send Us a Message
              </h3>
              <p className="text-[#888] font-light">
                We typically respond within 2-4 business hours.
              </p>
            </div>

            <div className="space-y-6">

              {/* NAME */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1a1a1a]/50 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#c4a77d] transition-all"
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1a1a1a]/50 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#c4a77d] transition-all"
                />
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1a1a1a]/50 ml-1">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you today?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#c4a77d] transition-all resize-none"
                />
              </div>

              {/* BUTTON */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1a1a1a] text-white py-5 rounded-2xl text-xs tracking-[0.25em] font-semibold uppercase hover:bg-[#333] hover:shadow-xl hover:shadow-black/10 transition-all duration-300 flex items-center justify-center gap-3 text-center whitespace-nowrap"
              >
                Connect on WhatsApp
                <Send size={14} className="shrink-0" />
              </a>

            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}