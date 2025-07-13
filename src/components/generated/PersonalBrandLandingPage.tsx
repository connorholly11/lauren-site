import React from 'react';
import { motion } from 'framer-motion';
import StickyHeader from './StickyHeader';
import HeroSection from './HeroSection';
import ShowcaseSection from './ShowcaseSection';
import ProjectsCaseStudiesSection from './ProjectsCaseStudiesSection';
import LeadershipSection from './LeadershipSection';
import Footer from './Footer';
import { Star, Award, TrendingUp, Users, Mail, Phone, Send, CheckCircle, AlertCircle, Upload, FileText, Video, Image as ImageIcon, File } from 'lucide-react';
interface FormData {
  name: string;
  email: string;
  message: string;
}
interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}
interface ContentItem {
  id: number;
  type: 'image' | 'video' | 'document';
  title: string;
  thumbnail: string;
  description: string;
}
const PersonalBrandLandingPage: React.FC = () => {
  // Form state
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = React.useState<FormStatus>({
    type: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      setIsSubmitting(false);
      return;
    }
    if (!validateEmail(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you within 24 hours.'
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Content Gallery data
  const contentItems: ContentItem[] = [{
    id: 1,
    type: 'image',
    title: 'Brand Identity Design',
    thumbnail: '/api/placeholder/300/200',
    description: 'Complete brand identity package for tech startup'
  }, {
    id: 2,
    type: 'video',
    title: 'Campaign Video',
    thumbnail: '/api/placeholder/300/200',
    description: 'Social media campaign video content'
  }, {
    id: 3,
    type: 'document',
    title: 'Strategy Document',
    thumbnail: '/api/placeholder/300/200',
    description: 'Comprehensive marketing strategy overview'
  }, {
    id: 4,
    type: 'image',
    title: 'Website Mockup',
    thumbnail: '/api/placeholder/300/200',
    description: 'Responsive website design mockup'
  }, {
    id: 5,
    type: 'video',
    title: 'Product Demo',
    thumbnail: '/api/placeholder/300/200',
    description: 'Interactive product demonstration'
  }, {
    id: 6,
    type: 'document',
    title: 'Analytics Report',
    thumbnail: '/api/placeholder/300/200',
    description: 'Monthly performance analytics report'
  }, {
    id: 7,
    type: 'image',
    title: 'Print Materials',
    thumbnail: '/api/placeholder/300/200',
    description: 'Business cards and brochure designs'
  }, {
    id: 8,
    type: 'video',
    title: 'Behind the Scenes',
    thumbnail: '/api/placeholder/300/200',
    description: 'Creative process documentation'
  }];
  const [isScrollPaused, setIsScrollPaused] = React.useState(false);
  const getContentIcon = (type: string) => {
    switch (type) {
      case 'image':
        return ImageIcon;
      case 'video':
        return Video;
      case 'document':
        return FileText;
      default:
        return File;
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50" data-magicpath-id="0" data-magicpath-path="PersonalBrandLandingPage.tsx">
      <StickyHeader data-magicpath-id="1" data-magicpath-path="PersonalBrandLandingPage.tsx" />
      
      <main data-magicpath-id="2" data-magicpath-path="PersonalBrandLandingPage.tsx">
        <HeroSection data-magicpath-id="3" data-magicpath-path="PersonalBrandLandingPage.tsx" />
        
        {/* Featured Work Gallery - Moved up under hero */}
        <section id="featured-work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50/30" data-magicpath-id="4" data-magicpath-path="PersonalBrandLandingPage.tsx">
          <div className="max-w-7xl mx-auto" data-magicpath-id="5" data-magicpath-path="PersonalBrandLandingPage.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center mb-16" data-magicpath-id="6" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4" data-magicpath-id="7" data-magicpath-path="PersonalBrandLandingPage.tsx">How I Make an Impact</h2>
              <p className="text-xl text-emerald-700 max-w-2xl mx-auto mb-8" data-magicpath-id="8" data-magicpath-path="PersonalBrandLandingPage.tsx">Marketing is always moving, and so is my skill set. These highlights show how I turn ambitious goals into clear, measurable outcomes.</p>
            </motion.div>

            {/* Auto-scrolling Gallery */}
            <div className="relative overflow-hidden" data-magicpath-id="9" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <motion.div className="flex space-x-6" animate={isScrollPaused ? {} : {
              x: [0, -100 * contentItems.length]
            }} transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }} onMouseEnter={() => setIsScrollPaused(true)} onMouseLeave={() => setIsScrollPaused(false)} data-magicpath-id="10" data-magicpath-path="PersonalBrandLandingPage.tsx">
                {/* Duplicate items for seamless loop */}
                {[...contentItems, ...contentItems].map((item, index) => {
                return <motion.div key={`${item.id}-${index}`} className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer" whileHover={{
                  y: -8,
                  scale: 1.02
                }} data-magicpath-id="11" data-magicpath-path="PersonalBrandLandingPage.tsx">
                      <div className="relative overflow-hidden rounded-t-2xl" data-magicpath-id="12" data-magicpath-path="PersonalBrandLandingPage.tsx">
                        <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" data-magicpath-id="13" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-id="14" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                      </div>
                      
                      <div className="p-6" data-magicpath-id="15" data-magicpath-path="PersonalBrandLandingPage.tsx">
                        <div className="mb-4" data-magicpath-id="16" data-magicpath-path="PersonalBrandLandingPage.tsx">
                          <h3 className="text-xl font-bold text-emerald-900 mb-2" data-magicpath-id="17" data-magicpath-path="PersonalBrandLandingPage.tsx">
                            {item.title}
                          </h3>
                        </div>
                        
                        <div className="flex items-center justify-between mb-3" data-magicpath-id="18" data-magicpath-path="PersonalBrandLandingPage.tsx">
                          <span className={`text-xs font-medium px-3 py-1 rounded-full ${item.type === 'image' ? 'bg-emerald-100 text-emerald-700' : item.type === 'video' ? 'bg-teal-100 text-teal-700' : 'bg-cyan-100 text-cyan-700'}`} data-magicpath-id="19" data-magicpath-path="PersonalBrandLandingPage.tsx">
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </span>
                        </div>
                        
                        <p className="text-sm text-emerald-700 leading-relaxed" data-magicpath-id="20" data-magicpath-path="PersonalBrandLandingPage.tsx">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>;
              })}
              </motion.div>
              
              {/* Gradient overlays for seamless effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-50 to-transparent pointer-events-none" data-magicpath-id="21" data-magicpath-path="PersonalBrandLandingPage.tsx" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-teal-50/30 to-transparent pointer-events-none" data-magicpath-id="22" data-magicpath-path="PersonalBrandLandingPage.tsx" />
            </div>

            {/* Gallery Controls */}
            <div className="text-center mt-8" data-magicpath-id="23" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <p className="text-sm text-emerald-600 mb-4" data-magicpath-id="24" data-magicpath-path="PersonalBrandLandingPage.tsx">
                {isScrollPaused ? 'Gallery paused • Hover to pause scrolling' : 'Auto-scrolling gallery • Hover to pause'}
              </p>
              <div className="flex justify-center space-x-4" data-magicpath-id="25" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <button onClick={() => setIsScrollPaused(!isScrollPaused)} className="px-4 py-2 bg-white border border-emerald-200 rounded-lg text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition-colors" data-magicpath-id="26" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  {isScrollPaused ? 'Resume' : 'Pause'}
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section - Moved under featured work */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-magicpath-id="27" data-magicpath-path="PersonalBrandLandingPage.tsx">
          <div className="max-w-6xl mx-auto" data-magicpath-id="28" data-magicpath-path="PersonalBrandLandingPage.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="29" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <div data-magicpath-id="30" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6" data-magicpath-id="31" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  About Me
                </h2>
                <div className="space-y-4 text-lg text-emerald-700 leading-relaxed" data-magicpath-id="32" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <p data-magicpath-id="33" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    With over 8 years of experience in digital marketing, I specialize in creating 
                    data-driven strategies that deliver measurable results. My passion lies in 
                    transforming brands through innovative campaigns and strategic thinking.
                  </p>
                  <p data-magicpath-id="34" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    I've had the privilege of working with Fortune 500 companies and fast-growing 
                    startups, helping them achieve their marketing goals and drive sustainable growth. 
                    My approach combines creativity with analytics to ensure every campaign delivers 
                    maximum impact.
                  </p>
                </div>
              </div>
              <div className="relative" data-magicpath-id="35" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center" data-magicpath-id="36" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <div className="w-64 h-64 bg-emerald-200 rounded-xl flex items-center justify-center" data-magicpath-id="37" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    <span className="text-emerald-600 text-sm" data-magicpath-id="38" data-magicpath-path="PersonalBrandLandingPage.tsx">Professional Photo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <ShowcaseSection data-magicpath-id="39" data-magicpath-path="PersonalBrandLandingPage.tsx" />
        
        <ProjectsCaseStudiesSection data-magicpath-id="40" data-magicpath-path="PersonalBrandLandingPage.tsx" />
        
        <LeadershipSection data-magicpath-id="41" data-magicpath-path="PersonalBrandLandingPage.tsx" />

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-magicpath-id="42" data-magicpath-path="PersonalBrandLandingPage.tsx">
          <div className="max-w-4xl mx-auto" data-magicpath-id="43" data-magicpath-path="PersonalBrandLandingPage.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center mb-16" data-magicpath-id="44" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4" data-magicpath-id="45" data-magicpath-path="PersonalBrandLandingPage.tsx">
                Technical Proficiency
              </h2>
              <p className="text-xl text-emerald-700 max-w-2xl mx-auto" data-magicpath-id="46" data-magicpath-path="PersonalBrandLandingPage.tsx">
                A comprehensive overview of the tools and technologies I use to deliver exceptional results
              </p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="space-y-8" data-magicpath-id="47" data-magicpath-path="PersonalBrandLandingPage.tsx">
              {/* Design Category */}
              <div className="space-y-4" data-magicpath-id="48" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <h4 className="text-lg font-medium text-emerald-800 border-b border-emerald-200 pb-2" data-magicpath-id="49" data-magicpath-path="PersonalBrandLandingPage.tsx">Design</h4>
                <div className="flex flex-wrap gap-3" data-magicpath-id="50" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow" data-magicpath-id="51" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Figma
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-full text-sm font-medium text-teal-700 hover:shadow-md transition-shadow" data-magicpath-id="52" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Adobe Creative Suite
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-emerald-50 border border-cyan-200 rounded-full text-sm font-medium text-cyan-700 hover:shadow-md transition-shadow" data-magicpath-id="53" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Canva
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow" data-magicpath-id="54" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Sketch
                  </span>
                </div>
              </div>

              {/* Email Category */}
              <div className="space-y-4" data-magicpath-id="55" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <h4 className="text-lg font-medium text-emerald-800 border-b border-emerald-200 pb-2" data-magicpath-id="56" data-magicpath-path="PersonalBrandLandingPage.tsx">Email</h4>
                <div className="flex flex-wrap gap-3" data-magicpath-id="57" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <span className="px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full text-sm font-medium text-amber-700 hover:shadow-md transition-shadow" data-magicpath-id="58" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    HubSpot
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow" data-magicpath-id="59" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Mailchimp
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-full text-sm font-medium text-teal-700 hover:shadow-md transition-shadow" data-magicpath-id="60" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    ConvertKit
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-emerald-50 border border-cyan-200 rounded-full text-sm font-medium text-cyan-700 hover:shadow-md transition-shadow" data-magicpath-id="61" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Klaviyo
                  </span>
                </div>
              </div>

              {/* Ad Management Category */}
              <div className="space-y-4" data-magicpath-id="62" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <h4 className="text-lg font-medium text-emerald-800 border-b border-emerald-200 pb-2" data-magicpath-id="63" data-magicpath-path="PersonalBrandLandingPage.tsx">Ad Management</h4>
                <div className="flex flex-wrap gap-3" data-magicpath-id="64" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <span className="px-4 py-2 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-full text-sm font-medium text-red-700 hover:shadow-md transition-shadow" data-magicpath-id="65" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Google Ads
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow" data-magicpath-id="66" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Facebook Ads Manager
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-full text-sm font-medium text-teal-700 hover:shadow-md transition-shadow" data-magicpath-id="67" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    LinkedIn Campaign Manager
                  </span>
                </div>
              </div>

              {/* Analytics Tracking Category */}
              <div className="space-y-4" data-magicpath-id="68" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <h4 className="text-lg font-medium text-emerald-800 border-b border-emerald-200 pb-2" data-magicpath-id="69" data-magicpath-path="PersonalBrandLandingPage.tsx">Analytics Tracking</h4>
                <div className="flex flex-wrap gap-3" data-magicpath-id="70" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow" data-magicpath-id="71" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Google Analytics
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-full text-sm font-medium text-teal-700 hover:shadow-md transition-shadow" data-magicpath-id="72" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Google Tag Manager
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-emerald-50 border border-cyan-200 rounded-full text-sm font-medium text-cyan-700 hover:shadow-md transition-shadow" data-magicpath-id="73" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Adobe Analytics
                  </span>
                </div>
              </div>

              {/* CMS Category */}
              <div className="space-y-4" data-magicpath-id="74" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <h4 className="text-lg font-medium text-emerald-800 border-b border-emerald-200 pb-2" data-magicpath-id="75" data-magicpath-path="PersonalBrandLandingPage.tsx">CMS</h4>
                <div className="flex flex-wrap gap-3" data-magicpath-id="76" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow" data-magicpath-id="77" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    WordPress
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:shadow-md transition-shadow" data-magicpath-id="78" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Wix
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-full text-sm font-medium text-amber-700 hover:shadow-md transition-shadow" data-magicpath-id="79" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Craft CMS
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-full text-sm font-medium text-teal-700 hover:shadow-md transition-shadow" data-magicpath-id="80" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Webflow
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-emerald-50 border border-cyan-200 rounded-full text-sm font-medium text-cyan-700 hover:shadow-md transition-shadow" data-magicpath-id="81" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Squarespace
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section with Form */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-magicpath-id="82" data-magicpath-path="PersonalBrandLandingPage.tsx">
          <div className="max-w-2xl mx-auto" data-magicpath-id="83" data-magicpath-path="PersonalBrandLandingPage.tsx">
            <div className="text-center mb-12" data-magicpath-id="84" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4" data-magicpath-id="85" data-magicpath-path="PersonalBrandLandingPage.tsx">
                Get in Touch
              </h2>
              <p className="text-lg text-emerald-700 leading-relaxed" data-magicpath-id="86" data-magicpath-path="PersonalBrandLandingPage.tsx">
                Ready to discuss your project? Send me a message and I'll get back to you promptly.
              </p>
            </div>

            <div className="bg-white border border-emerald-200 rounded-lg p-8" data-magicpath-id="87" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <form onSubmit={handleSubmit} className="space-y-6" data-magicpath-id="88" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <div data-magicpath-id="89" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <label htmlFor="name" className="block text-sm font-medium text-emerald-900 mb-2" data-magicpath-id="90" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-emerald-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="Your full name" required data-magicpath-id="91" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                </div>

                <div data-magicpath-id="92" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-900 mb-2" data-magicpath-id="93" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-emerald-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="your.email@example.com" required data-magicpath-id="94" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                </div>

                <div data-magicpath-id="95" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <label htmlFor="message" className="block text-sm font-medium text-emerald-900 mb-2" data-magicpath-id="96" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 border border-emerald-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none" placeholder="Tell me about your project..." required data-magicpath-id="97" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                </div>

                {formStatus.type && <div className={`flex items-center space-x-2 p-4 rounded-md border ${formStatus.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-red-50 text-red-800 border-red-200'}`} data-magicpath-id="98" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    {formStatus.type === 'success' ? <CheckCircle className="w-5 h-5" data-magicpath-id="99" data-magicpath-path="PersonalBrandLandingPage.tsx" /> : <AlertCircle className="w-5 h-5" data-magicpath-id="100" data-magicpath-path="PersonalBrandLandingPage.tsx" />}
                    <span className="text-sm" data-magicpath-id="101" data-magicpath-path="PersonalBrandLandingPage.tsx">{formStatus.message}</span>
                  </div>}

                <button type="submit" disabled={isSubmitting} className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-md font-medium transition-colors ${isSubmitting ? 'bg-emerald-400 cursor-not-allowed text-white' : 'bg-emerald-900 hover:bg-emerald-800 text-white'}`} data-magicpath-id="102" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  {isSubmitting ? <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" data-magicpath-id="103" data-magicpath-path="PersonalBrandLandingPage.tsx"></div>
                      <span data-magicpath-id="104" data-magicpath-path="PersonalBrandLandingPage.tsx">Sending...</span>
                    </> : <>
                      <Send className="w-5 h-5" data-magicpath-id="105" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                      <span data-magicpath-id="106" data-magicpath-path="PersonalBrandLandingPage.tsx">Send Message</span>
                    </>}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer data-magicpath-id="107" data-magicpath-path="PersonalBrandLandingPage.tsx" />
    </div>;
};
export default PersonalBrandLandingPage;