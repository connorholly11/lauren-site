import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
const Footer: React.FC = () => {
  const socialLinks = [{
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  }, {
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  }, {
    icon: Mail,
    href: 'mailto:sarah@example.com',
    label: 'Email'
  }];
  const contactInfo = [{
    icon: Mail,
    text: 'sarah.johnson@email.com',
    href: 'mailto:sarah.johnson@email.com'
  }, {
    icon: Phone,
    text: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  }, {
    icon: MapPin,
    text: 'San Francisco, CA',
    href: '#'
  }];
  const quickLinks = [{
    label: 'About',
    href: '#about'
  }, {
    label: 'Services',
    href: '#skills'
  }, {
    label: 'Portfolio',
    href: '#showcase'
  }, {
    label: 'Testimonials',
    href: '#testimonials'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8" style={{
        display: "none"
      }}>
          {/* Brand Section */}
          <div className="md:col-span-2" style={{
          display: "none"
        }}>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} style={{
            display: "none"
          }}>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-4">
                Sarah Johnson
              </h3>
              <p className="text-emerald-100 mb-6 max-w-md">
                Strategic Marketing Manager specializing in data-driven campaigns 
                that deliver measurable results and drive business growth.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => <motion.a key={index} href={contact.href} whileHover={{
                x: 5
              }} className="flex items-center text-emerald-200 hover:text-white transition-colors group">
                    <contact.icon className="w-4 h-4 mr-3 text-emerald-400 group-hover:text-emerald-300" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>)}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} viewport={{
            once: true
          }}>
              <h4 className="text-lg font-semibold mb-4" style={{
              display: "none"
            }}>Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => <li key={index}>
                    <motion.button onClick={() => scrollToSection(link.href)} whileHover={{
                  x: 5
                }} className="text-emerald-200 hover:text-white transition-colors text-sm">
                      {link.label}
                    </motion.button>
                  </li>)}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} style={{
            display: "none"
          }}>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => <motion.a key={index} href={social.href} whileHover={{
                scale: 1.1,
                y: -2
              }} whileTap={{
                scale: 0.95
              }} className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-600 transition-colors" aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </motion.a>)}
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="text-sm font-medium mb-2">Stay Updated</h5>
                <div className="flex">
                  <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 bg-emerald-800 border border-emerald-700 rounded-l-lg text-sm focus:outline-none focus:border-emerald-500 placeholder-emerald-300" />
                  <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-r-lg text-sm font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="border-t border-emerald-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-emerald-300 text-sm">© 2025 Lauren Hall. All rights reserved.© 2025 Lauren Hall. All rights reserved.© 2025 Lauren Hall. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0" style={{
          display: "none"
        }}>
            <button className="text-emerald-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-emerald-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </button>
          </div>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;