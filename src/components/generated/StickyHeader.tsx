import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const StickyHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const navItems = [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'Showcase',
    href: '#showcase'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Skills',
    href: '#skills'
  }, {
    label: 'Testimonials',
    href: '#testimonials'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`} data-magicpath-id="0" data-magicpath-path="StickyHeader.tsx">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="1" data-magicpath-path="StickyHeader.tsx">
        <div className="flex justify-between items-center h-16" data-magicpath-id="2" data-magicpath-path="StickyHeader.tsx">
          {/* Logo */}
          <motion.div whileHover={{
          scale: 1.05
        }} className="flex-shrink-0" data-magicpath-id="3" data-magicpath-path="StickyHeader.tsx">
            <button onClick={() => scrollToSection('#home')} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-magicpath-id="4" data-magicpath-path="StickyHeader.tsx">
              Sarah Johnson
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block" data-magicpath-id="5" data-magicpath-path="StickyHeader.tsx">
            <div className="ml-10 flex items-baseline space-x-8" data-magicpath-id="6" data-magicpath-path="StickyHeader.tsx">
              {navItems.map(item => <motion.button key={item.label} onClick={() => scrollToSection(item.href)} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isScrolled ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' : 'text-slate-800 hover:text-blue-600 hover:bg-white/20'}`} data-magicpath-id="7" data-magicpath-path="StickyHeader.tsx">
                  {item.label}
                </motion.button>)}
            </div>
          </div>

          <nav className="hidden md:flex space-x-8" data-magicpath-id="8" data-magicpath-path="StickyHeader.tsx">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <a href="#showcase" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Work
            </a>
            <a href="#projects" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Case Studies
            </a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
            <a href="#skills" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Skills
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden" data-magicpath-id="9" data-magicpath-path="StickyHeader.tsx">
            <motion.button whileTap={{
            scale: 0.95
          }} onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-lg ${isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-800 hover:bg-white/20'}`} data-magicpath-id="10" data-magicpath-path="StickyHeader.tsx">
              {isMenuOpen ? <X className="h-6 w-6" data-magicpath-id="11" data-magicpath-path="StickyHeader.tsx" /> : <Menu className="h-6 w-6" data-magicpath-id="12" data-magicpath-path="StickyHeader.tsx" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }} className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg" data-magicpath-id="13" data-magicpath-path="StickyHeader.tsx">
            <div className="px-2 pt-2 pb-3 space-y-1" data-magicpath-id="14" data-magicpath-path="StickyHeader.tsx">
              {navItems.map(item => <motion.button key={item.label} onClick={() => scrollToSection(item.href)} whileTap={{
            scale: 0.95
          }} className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors" data-magicpath-id="15" data-magicpath-path="StickyHeader.tsx">
                  {item.label}
                </motion.button>)}
            </div>
          </motion.div>}
      </nav>
    </motion.header>;
};
export default StickyHeader;