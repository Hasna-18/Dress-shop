import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-rose-950 py-16 text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <h2 className="font-serif text-4xl lg:text-5xl text-[#fffafb] mb-12 tracking-widest uppercase">
          Lumina
        </h2>
        
        <div className="flex gap-12 mb-16">
          <a href="#" className="uppercase tracking-[0.2em] text-xs font-semibold text-rose-100/60 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="uppercase tracking-[0.2em] text-xs font-semibold text-rose-100/60 hover:text-white transition-colors">Pinterest</a>
          <a href="#" className="uppercase tracking-[0.2em] text-xs font-semibold text-rose-100/60 hover:text-white transition-colors">Vogue</a>
        </div>
        
        <div className="w-full border-t border-rose-900/50 pt-8 flex justify-between items-center text-xs uppercase tracking-widest text-rose-100/40 font-semibold">
          <p>&copy; {new Date().getFullYear()} Lumina. All rights reserved.</p>
          <div className="hidden sm:flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
