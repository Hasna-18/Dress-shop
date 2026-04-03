import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const phone = "918592845945";

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hi, I would like to know more about your collection.\n\nName: ${ name } \nEmail: ${ email } \nMessage: ${ message } `
    );
    return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
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
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a] mb-12">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#faf8f5] rounded-xl flex items-center justify-center text-[#c4a77d]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider mb-1">WhatsApp Call</h4>
                  <p className="text-[#666] font-light">+91 81119 69696</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#faf8f5] rounded-xl flex items-center justify-center text-[#c4a77d]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider mb-1">Email Us</h4>
                  <p className="text-[#666] font-light">hello@clothing.in</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#faf8f5] rounded-xl flex items-center justify-center text-[#c4a77d]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider mb-1">Our Shop</h4>
                  <p className="text-[#666] font-light">123 Fashion Street, Mumbai, Maharashtra 400001</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#faf8f5] rounded-xl flex items-center justify-center text-[#c4a77d]">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider mb-1">Opening Hours</h4>
                  <p className="text-[#666] font-light">Mon - Sat: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-16 relative aspect-video rounded-[30px] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
               <img src="/assets/C6.png" alt="Our Shop Location" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                 <button className="bg-white text-[#1a1a1a] px-8 py-3 rounded-full text-xs tracking-widest font-medium uppercase shadow-lg">Get Directions</button>
               </div>
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
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1a1a1a] mb-3">Send Us a Message</h3>
              <p className="text-[#888] font-light">We typically respond within 2-4 business hours.</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1a1a1a]/50 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#c4a77d] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1a1a1a]/50 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#c4a77d] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1a1a1a]/50 ml-1">Your Message</label>
                <textarea
                  placeholder="How can we help you today?"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#c4a77d] transition-all resize-none"
                />
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1a1a1a] text-white py-5 rounded-2xl text-xs tracking-[0.25em] font-semibold uppercase hover:bg-[#333] hover:shadow-xl hover:shadow-black/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Connect on WhatsApp
                <Send size={14} className="rotate-12" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}