import { motion } from "framer-motion";
import { useState } from "react";

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
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 bg-[#fffafb] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* LEFT SIDE */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[0.3em] text-[#4c0519]/40 mb-6 text-xs">
              A Private Experience
            </p>

              <h1 className="text-4xl sm:text-5xl md:text-7xl text-[#4c0519] font-light mb-6 md:mb-8">
                Begin Your <br className="hidden sm:block"/>
                <span className="italic">Consultation</span>
              </h1>

              <p className="text-[#4c0519]/60 leading-relaxed mb-12 lg:mb-16 max-w-sm mx-auto lg:mx-0 text-base md:text-lg">
              Step into a world of tailored luxury. Connect with us directly
              and let us guide you to your perfect look.
            </p>

            <div className="space-y-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#4c0519]/50 mb-2">
                  WhatsApp
                </p>
                <p className="text-2xl text-[#4c0519]">
                  +91 81119 69696
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#4c0519]/50 mb-2">
                  Email
                </p>
                <p className="text-2xl text-[#4c0519]">
                  hello@atelier.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8 md:space-y-12 bg-[#faf0f2] p-8 md:p-16 h-full flex flex-col justify-center rounded-lg lg:rounded-none"
          >
            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b border-[#4c0519]/20 py-4 bg-transparent focus:outline-none"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-[#4c0519]/20 py-4 bg-transparent focus:outline-none"
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Your Message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-b border-[#4c0519]/20 py-4 bg-transparent focus:outline-none resize-none"
            />

            {/* BUTTON */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center px-12 py-5 bg-[#4c0519] text-white tracking-[0.3em] text-xs uppercase hover:bg-[#8e1c3e] transition"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);
}