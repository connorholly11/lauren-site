import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
const HeroSection: React.FC = () => {
  const scrollToShowcase = () => {
    const element = document.querySelector('#featured-work');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8" data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      <div className="max-w-6xl mx-auto text-center" data-magicpath-id="1" data-magicpath-path="HeroSection.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-8" data-magicpath-id="2" data-magicpath-path="HeroSection.tsx">
          {/* Headshot */}
          <div className="relative inline-block mb-8" data-magicpath-id="3" data-magicpath-path="HeroSection.tsx">
            <motion.div initial={{
            scale: 0.8,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="w-48 h-48 mx-auto bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 rounded-2xl p-2" data-magicpath-id="4" data-magicpath-path="HeroSection.tsx">
              <div className="w-full h-full bg-emerald-200 rounded-2xl flex items-center justify-center overflow-hidden" data-magicpath-id="5" data-magicpath-path="HeroSection.tsx">
                <span className="text-emerald-600 text-sm" data-magicpath-id="6" data-magicpath-path="HeroSection.tsx">Professional Headshot</span>
              </div>
            </motion.div>
            
            {/* Floating sparkles */}
            <motion.div animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="absolute -top-4 -right-4" data-magicpath-id="7" data-magicpath-path="HeroSection.tsx">
              <Sparkles className="w-6 h-6 text-amber-500" />
            </motion.div>
            
            <motion.div animate={{
            y: [0, -8, 0],
            rotate: [0, -3, 0]
          }} transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }} className="absolute -top-2 -left-6" data-magicpath-id="8" data-magicpath-path="HeroSection.tsx">
              <Sparkles className="w-4 h-4 text-teal-500" />
            </motion.div>
            
            <motion.div animate={{
            y: [0, -12, 0],
            rotate: [0, 8, 0]
          }} transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }} className="absolute -bottom-6 -right-8" data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">
              <Sparkles className="w-8 h-8 text-emerald-500" />
            </motion.div>
            
            <motion.div animate={{
            y: [0, -6, 0],
            rotate: [0, -5, 0]
          }} transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }} className="absolute -bottom-2 -left-4" data-magicpath-id="10" data-magicpath-path="HeroSection.tsx">
              <Sparkles className="w-5 h-5 text-cyan-500" />
            </motion.div>
          </div>

          {/* Headline */}
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6 leading-tight" data-magicpath-id="11" data-magicpath-path="HeroSection.tsx">
            Strategic Marketing
            <br data-magicpath-id="12" data-magicpath-path="HeroSection.tsx" />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent" data-magicpath-id="13" data-magicpath-path="HeroSection.tsx">That Opens Doors</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="text-xl sm:text-2xl text-emerald-700 mb-8 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="14" data-magicpath-path="HeroSection.tsx">I’m Lauren Hall, a real estate marketing manager who blends data and creativity to help people find their next place to call home. I’m passionate about marketing that builds connection and brings communities to life.</motion.p>

          {/* Stats */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto" data-magicpath-id="15" data-magicpath-path="HeroSection.tsx">
            <div className="text-center" data-magicpath-id="16" data-magicpath-path="HeroSection.tsx">
              <div className="text-3xl font-bold text-emerald-600 mb-2" data-magicpath-id="17" data-magicpath-path="HeroSection.tsx">5</div>
              <div className="text-emerald-700" data-magicpath-id="18" data-magicpath-path="HeroSection.tsx">Years Experience</div>
            </div>
            <div className="text-center" data-magicpath-id="19" data-magicpath-path="HeroSection.tsx">
              <div className="text-3xl font-bold text-teal-600 mb-2" data-magicpath-id="20" data-magicpath-path="HeroSection.tsx">1,500+</div>
              <div className="text-emerald-700" data-magicpath-id="21" data-magicpath-path="HeroSection.tsx">Homes Marketed</div>
            </div>
            <div className="text-center" data-magicpath-id="22" data-magicpath-path="HeroSection.tsx">
              <div className="text-3xl font-bold text-cyan-600 mb-2" data-magicpath-id="23" data-magicpath-path="HeroSection.tsx">$20M+</div>
              <div className="text-emerald-700" data-magicpath-id="24" data-magicpath-path="HeroSection.tsx">Total Budgets Managed</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1
        }} className="flex flex-col sm:flex-row gap-4 justify-center mb-16" data-magicpath-id="25" data-magicpath-path="HeroSection.tsx">
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={scrollToShowcase} className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="26" data-magicpath-path="HeroSection.tsx">
              View My Work
            </motion.button>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="border-2 border-emerald-300 text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors" data-magicpath-id="27" data-magicpath-path="HeroSection.tsx" style={{
            display: "none"
          }}>
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 1.2
      }} className="flex flex-col items-center" data-magicpath-id="28" data-magicpath-path="HeroSection.tsx">
          <span className="text-emerald-600 text-sm mb-2" data-magicpath-id="29" data-magicpath-path="HeroSection.tsx">Scroll to explore</span>
          <motion.button onClick={scrollToShowcase} animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="text-emerald-500 hover:text-teal-600 transition-colors" data-magicpath-id="30" data-magicpath-path="HeroSection.tsx">
            <ArrowDown className="w-6 h-6" data-magicpath-id="31" data-magicpath-path="HeroSection.tsx" />
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;