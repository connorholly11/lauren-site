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
  return <footer className="bg-gradient-to-br from-orange-900 to-amber-900 text-white" data-magicpath-id="0" data-magicpath-path="Footer.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-magicpath-id="1" data-magicpath-path="Footer.tsx">
        <div className="grid md:grid-cols-4 gap-8" data-magicpath-id="2" data-magicpath-path="Footer.tsx">
          {/* Brand Section */}
          <div className="md:col-span-2" data-magicpath-id="3" data-magicpath-path="Footer.tsx">
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
          }} data-magicpath-id="4" data-magicpath-path="Footer.tsx">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-coral-300 bg-clip-text text-transparent mb-4" data-magicpath-id="5" data-magicpath-path="Footer.tsx">
                Sarah Johnson
              </h3>
              <p className="text-orange-100 mb-6 max-w-md" data-magicpath-id="6" data-magicpath-path="Footer.tsx">
                Strategic Marketing Manager specializing in data-driven campaigns 
                that deliver measurable results and drive business growth.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3" data-magicpath-id="7" data-magicpath-path="Footer.tsx">
                {contactInfo.map((contact, index) => <motion.a key={index} href={contact.href} whileHover={{
                x: 5
              }} className="flex items-center text-orange-200 hover:text-white transition-colors group" data-magicpath-id="8" data-magicpath-path="Footer.tsx">
                    <contact.icon className="w-4 h-4 mr-3 text-orange-400 group-hover:text-orange-300" data-magicpath-id="9" data-magicpath-path="Footer.tsx" />
                    <span className="text-sm" data-magicpath-id="10" data-magicpath-path="Footer.tsx">{contact.text}</span>
                  </motion.a>)}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div data-magicpath-id="11" data-magicpath-path="Footer.tsx">
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
          }} data-magicpath-id="12" data-magicpath-path="Footer.tsx">
              <h4 className="text-lg font-semibold mb-4" data-magicpath-id="13" data-magicpath-path="Footer.tsx">Quick Links</h4>
              <ul className="space-y-2" data-magicpath-id="14" data-magicpath-path="Footer.tsx">
                {quickLinks.map((link, index) => <li key={index} data-magicpath-id="15" data-magicpath-path="Footer.tsx">
                    <motion.button onClick={() => scrollToSection(link.href)} whileHover={{
                  x: 5
                }} className="text-orange-200 hover:text-white transition-colors text-sm" data-magicpath-id="16" data-magicpath-path="Footer.tsx">
                      {link.label}
                    </motion.button>
                  </li>)}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div data-magicpath-id="17" data-magicpath-path="Footer.tsx">
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
          }} data-magicpath-id="18" data-magicpath-path="Footer.tsx">
              <h4 className="text-lg font-semibold mb-4" data-magicpath-id="19" data-magicpath-path="Footer.tsx">Connect</h4>
              <div className="flex space-x-4" data-magicpath-id="20" data-magicpath-path="Footer.tsx">
                {socialLinks.map((social, index) => <motion.a key={index} href={social.href} whileHover={{
                scale: 1.1,
                y: -2
              }} whileTap={{
                scale: 0.95
              }} className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center text-orange-200 hover:text-white hover:bg-orange-600 transition-colors" aria-label={social.label} data-magicpath-id="21" data-magicpath-path="Footer.tsx">
                    <social.icon className="w-5 h-5" data-magicpath-id="22" data-magicpath-path="Footer.tsx" />
                  </motion.a>)}
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6" data-magicpath-id="23" data-magicpath-path="Footer.tsx">
                <h5 className="text-sm font-medium mb-2" data-magicpath-id="24" data-magicpath-path="Footer.tsx">Stay Updated</h5>
                <div className="flex" data-magicpath-id="25" data-magicpath-path="Footer.tsx">
                  <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 bg-amber-800 border border-amber-700 rounded-l-lg text-sm focus:outline-none focus:border-orange-500 placeholder-orange-300" data-magicpath-id="26" data-magicpath-path="Footer.tsx" />
                  <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-r-lg text-sm font-medium transition-colors" data-magicpath-id="27" data-magicpath-path="Footer.tsx">
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
      }} className="border-t border-amber-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center" data-magicpath-id="28" data-magicpath-path="Footer.tsx">
          <p className="text-orange-300 text-sm" data-magicpath-id="29" data-magicpath-path="Footer.tsx">
            © {new Date().getFullYear()} Sarah Johnson. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0" data-magicpath-id="30" data-magicpath-path="Footer.tsx">
            <button className="text-orange-300 hover:text-white text-sm transition-colors" data-magicpath-id="31" data-magicpath-path="Footer.tsx">
              Privacy Policy
            </button>
            <button className="text-orange-300 hover:text-white text-sm transition-colors" data-magicpath-id="32" data-magicpath-path="Footer.tsx">
              Terms of Service
            </button>
          </div>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;