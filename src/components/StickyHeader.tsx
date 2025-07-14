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
    href: '#featured-work'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Projects',
    href: '#projects'
  }, {
    label: 'Leadership',
    href: '#leadership'
  }, {
    label: 'Skills',
    href: '#skills'
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
  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
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
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{
          scale: 1.05
        }} className="flex-shrink-0">
            <button onClick={e => scrollToSection(e, '#home')} className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Lauren Hall
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(item => <motion.button key={item.label} onClick={e => scrollToSection(e, item.href)} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isScrolled ? 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50' : 'text-slate-800 hover:text-emerald-600 hover:bg-white/20'}`}>
                  {item.label}
                </motion.button>)}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button whileTap={{
            scale: 0.95
          }} onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-lg ${isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-800 hover:bg-white/20'}`}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
      }} className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => <motion.button key={item.label} onClick={e => scrollToSection(e, item.href)} whileTap={{
            scale: 0.95
          }} className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">
                  {item.label}
                </motion.button>)}
            </div>
          </motion.div>}
      </nav>
    </motion.header>;
};
export default StickyHeader;