import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Star, Sparkles, MousePointer2 } from 'lucide-react';

const FORM_URL = "https://forms.clickup.com/90181906046/f/2kzm5bky-8078/9P4L2FPLAWWZLSK4XC";

function App() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Custom Cursor Logic
  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
      }

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    document.body.classList.add('hovering');
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    document.body.classList.remove('hovering');
  };

  const scrollToForm = () => {
    document.getElementById('access-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] overflow-hidden selection:bg-subak-red selection:text-white">
      {/* Custom Cursor Elements */}
      <div ref={cursorDotRef} className="cursor-dot hidden md:block"></div>
      <div ref={cursorOutlineRef} className="cursor-outline hidden md:block"></div>

      {/* Noise Overlay */}
      <div className="bg-noise-overlay"></div>

      {/* Abstract Background Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-[120px] animate-float opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-l from-subak-red/10 to-orange-100/40 rounded-full blur-[100px] animate-float-delayed opacity-60"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center text-subak-dark">
        <div className="text-2xl font-serif font-bold tracking-tighter" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          subaK<span className="text-subak-red">.</span>
        </div>
        <button
          onClick={scrollToForm}
          className="hidden md:flex items-center gap-2 text-sm font-semibold tracking-wide hover:text-subak-red transition-colors"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          GET ACCESS <ArrowRight className="w-4 h-4" />
        </button>
      </nav>

      {/* Hero Section with Integrated Process */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12">
        <div className="max-w-[90vw] mx-auto z-10 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-12">

            {/* Left Side: Headline */}
            <div className="flex-1 flex flex-col justify-start pt-12 lg:pt-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-subak-dark/10 bg-white/30 backdrop-blur-sm text-xs font-bold tracking-widest uppercase text-subak-dark/70 mb-8 w-fit">
                <span className="w-2 h-2 rounded-full bg-subak-red animate-pulse"></span>
                Beta Access Live
              </div>

              <h1 className="font-serif text-[15vw] lg:text-[12vw] leading-[0.85] tracking-tighter text-subak-red mix-blend-multiply opacity-90 mb-4">
                subaK
              </h1>
              <p className="text-2xl md:text-4xl font-serif italic text-subak-dark/60 tracking-tight">
                Find & Share your beauty
              </p>
            </div>

            {/* Right Side: Process & Description */}
            <div className="flex-1 max-w-xl lg:pt-12">
              <p className="text-xl md:text-2xl font-medium text-subak-dark/80 leading-relaxed text-balance mb-12">
                Shop premium K-beauty products at the prices <span className="text-subak-red font-bold">BETTER THAN BLACK FRIDAY</span>.
              </p>

              {/* Integrated Process Steps */}
              <div className="grid grid-cols-1 gap-6 mb-12 border-l-2 border-subak-dark/10 pl-6">
                <div className="group flex items-baseline gap-4">
                  <span className="font-serif text-2xl text-subak-dark/30 group-hover:text-subak-red transition-colors">01</span>
                  <div>
                    <strong className="block text-lg font-bold text-subak-dark">Select</strong>
                    <span className="text-subak-dark/60">Choose from expert-curated essentials.</span>
                  </div>
                </div>
                <div className="group flex items-baseline gap-4">
                  <span className="font-serif text-2xl text-subak-dark/30 group-hover:text-subak-red transition-colors">02</span>
                  <div>
                    <strong className="block text-lg font-bold text-subak-dark">Order</strong>
                    <span className="text-subak-dark/60">Get exclusive discounts instantly.</span>
                  </div>
                </div>
                <div className="group flex items-baseline gap-4">
                  <span className="font-serif text-2xl text-subak-dark/30 group-hover:text-subak-red transition-colors">03</span>
                  <div>
                    <strong className="block text-lg font-bold text-subak-dark">Post</strong>
                    <span className="text-subak-dark/60">Share one video to unlock more deals.</span>
                  </div>
                </div>
              </div>

              <button
                onClick={scrollToForm}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group relative w-full md:w-auto inline-flex items-center justify-center px-12 py-6 bg-subak-dark text-white rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-95 shadow-xl"
              >
                <span className="relative z-10 font-bold tracking-wider flex items-center gap-3">
                  JOIN THE WAITLIST <Sparkles className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-subak-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Access Form Section */}
      <section id="access-form" className="py-20 px-6 md:px-12 bg-white relative z-10 border-t border-subak-dark/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Secure Your Spot</h2>
            <p className="text-lg text-subak-dark/60">Limited beta access closing soon.</p>
          </div>

          <div className="relative w-full aspect-[16/10] md:aspect-[16/9] bg-subak-light rounded-3xl overflow-hidden shadow-2xl border border-subak-dark/5">
            <iframe
              src={FORM_URL}
              className="absolute inset-0 w-full h-full border-0"
              title="subaK Beta Access Form"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-subak-dark/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#FAFAFA]">
        <div className="text-2xl font-serif font-bold">subaK.</div>
        <div className="flex gap-8 text-sm font-medium text-subak-dark/40 uppercase tracking-widest">
          <a href="https://www.tiktok.com/@subakbeauty" target="_blank" rel="noopener noreferrer" className="hover:text-subak-dark transition-colors">TikTok</a>
          <a href="mailto:team@playxlab.com" className="hover:text-subak-dark transition-colors">Email</a>
        </div>
        <div className="text-xs text-subak-dark/30">
          © 2025 PLAYLAB INC.
        </div>
      </footer>
    </div>
  );
}

export default App;
