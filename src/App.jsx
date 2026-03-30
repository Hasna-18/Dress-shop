import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loaded pages for zero lag
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading Fallback
const LoadingScreen = () => (
  <div className="h-screen w-full flex items-center justify-center bg-[#fffafb]">
    <div className="flex flex-col items-center">
      <div className="w-px h-12 bg-[#4c0519]/20 overflow-hidden relative mb-6">
        <div className="w-full h-full bg-[#4c0519] animate-[slideDown_1.5s_ease-in-out_infinite]" />
      </div>
      <p className="uppercase tracking-[0.4em] text-[10px] text-[#4c0519] font-medium animate-pulse">
        Mehar
      </p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-[#fffafb] selection:bg-rose-200 selection:text-rose-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;