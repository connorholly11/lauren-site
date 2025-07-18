import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
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
  highlights?: string[];
  stats: {
    duration: string;
    impact: string;
    satisfaction: string;
  };
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
    title: 'Digital Marketing',
    thumbnail: '/Digital Marketing from Connor Holly.png',
    description: 'SEO, SEM, PPC, email, and text campaigns that drive measurable traffic and conversions.',
    highlights: [
      'Audience research, keyword strategy, and segmentation',
      'Develop creative concepts and write briefs that align teams around one vision',
      'Lifecycle and promotional email/SMS campaigns',
      'Customer surveys and feedback loops to inform optimization',
      'Manage review platforms to amplify positive sentiment'
    ],
    stats: {
      duration: '3 months',
      impact: '+150% traffic',
      satisfaction: '98%'
    }
  }, {
    id: 2,
    type: 'document',
    title: 'CMS & Web Management',
    thumbnail: '/Email Marketing Slider.png',
    description: 'Keeping websites fresh, clear, and performing with content updates, blog and PR writing, and analytics tracking.',
    highlights: [
      'Website maintenance and updates for speed, SEO, and accessibility',
      'Landing-page optimization and A/B testing for higher conversions',
      'Lead-capture form design and integration',
      'Creation of SEO blog posts and press releases',
      'Performance tracking and reporting with GA4, Microsoft Clarity, and real-time dashboards'
    ],
    stats: {
      duration: 'Ongoing',
      impact: '+85% conversion',
      satisfaction: '95%'
    }
  }, {
    id: 3,
    type: 'image',
    title: 'Content & Collateral Creation',
    thumbnail: '/Event Card from Connor Holly.png',
    description: 'Lead creative across print, digital, and social by managing everything from brochures to photo shoots while ensuring brand consistency.',
    highlights: [
      'Ensure brand consistency across all print and digital assets',
      'Lead in-house production with designers, marketing specialists, and external vendors',
      'Develop brochures, signage, flyers, lookbooks, and digital ads',
      'Design social-media engagement templates and short-form video content',
      'Coordinate property and lifestyle photo/video shoots; maintain asset library',
      'Oversee 2,500+ printed pieces monthly across three states while optimizing costs'
    ],
    stats: {
      duration: '4 weeks',
      impact: '2,500+ pieces/mo',
      satisfaction: '100%'
    }
  }, {
    id: 4,
    type: 'image',
    title: 'Event & Brand Marketing',
    thumbnail: '/Photo from Connor Holly.png',
    description: 'Planning and executing events while supporting on-the-ground brand presence and community engagement.',
    highlights: [
      'Plan and execute events: broker luncheons, virtual workshops, ribbon cuttings, ground-breakings, realtor caravans, and more',
      'Activate community engagement through local vendor collabs',
      'Manage invites, signage, run-of-show, vendors, and post-event nurture, ensuring seamless on-site logistics',
      'Secure press coverage and social amplification to maximize event reach'
    ],
    stats: {
      duration: '2 weeks',
      impact: '+200% attendance',
      satisfaction: '97%'
    }
  }, {
    id: 5,
    type: 'document',
    title: 'Vendor & Budget Oversight',
    thumbnail: '/Vendor Management from Connor Holly.png',
    description: 'Coordinating with third parties, managing scopes, and tracking budgets across multiple projects.',
    highlights: [
      'Source vendors and negotiate scopes, quotes, and POs to keep goals and budget aligned',
      'Code marketing expenditures and process payments while tracking spend',
      'Oversee marketing budgets across 20+ communities with real-time reporting',
      'Align financial targets with timelines to ensure on-budget, on-time delivery'
    ],
    stats: {
      duration: 'Ongoing',
      impact: '20+ communities',
      satisfaction: '96%'
    }
  }];
  const [selectedProject, setSelectedProject] = React.useState<ContentItem | null>(null);
  const controls = useAnimationControls();

  React.useEffect(() => {
    controls.start({
      x: [0, -(contentItems.length * 352)],
      transition: {
        x: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      }
    });
  }, [controls, contentItems.length]);
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
  return <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <StickyHeader />
      
      <main>
        <HeroSection />
        
        {/* Featured Work Gallery - Moved up under hero */}
        <section id="featured-work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50/30">
          <div className="max-w-7xl mx-auto">
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
          }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">How I Make an Impact</h2>
              <p className="text-xl text-emerald-700 max-w-2xl mx-auto mb-8">Marketing is always moving, and so is my skill set. These skills turn bold ideas into measurable results.</p>
            </motion.div>

            {/* Auto-scrolling Gallery */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex space-x-6"
                animate={controls}
              >
                {/* Duplicate items for seamless loop */}
                {[...contentItems, ...contentItems].map((item, index) => {
                return <motion.div key={`${item.id}-${index}`} className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer" whileHover={{
                  y: -8,
                  scale: 1.02
                }} onClick={() => setSelectedProject(item)}>
                      <div className="relative overflow-hidden rounded-t-2xl">
                        <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-emerald-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-sm text-emerald-700 leading-relaxed mb-4">
                            {item.description}
                          </p>
                          
                          {item.highlights && (
                            <div className="space-y-2 mb-4">
                              <h4 className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">Highlights:</h4>
                              <ul className="space-y-1">
                                {item.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <span className="text-emerald-500 mt-1">•</span>
                                    <span className="text-xs text-emerald-700 leading-relaxed">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        
                        <div className="text-center">
                          <span className="text-xs font-medium text-emerald-500 group-hover:text-emerald-700 transition-colors">
                            Click for details →
                          </span>
                        </div>
                      </div>
                    </motion.div>;
              })}
              </motion.div>
              
              {/* Gradient overlays for seamless effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-50 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-teal-50/30 to-transparent pointer-events-none" />
            </div>

          </div>
        </section>
        
        {/* Project Details Modal */}
        {selectedProject && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{
          opacity: 0,
          scale: 0.9,
          y: 20
        }} animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }} exit={{
          opacity: 0,
          scale: 0.9,
          y: 20
        }} className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 my-8 max-h-[calc(100vh-4rem)] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-2">{selectedProject.title}</h3>
                    <p className="text-emerald-700 leading-relaxed">{selectedProject.description}</p>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="text-emerald-600 hover:text-emerald-800 transition-colors p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-emerald-900 mb-2">{selectedProject.stats.duration}</div>
                    <div className="text-sm font-medium text-emerald-600">Project Duration</div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-teal-900 mb-2">{selectedProject.stats.impact}</div>
                    <div className="text-sm font-medium text-teal-600">Measured Impact</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-cyan-900 mb-2">{selectedProject.stats.satisfaction}</div>
                    <div className="text-sm font-medium text-cyan-600">Client Satisfaction</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-emerald-900">Project Highlights</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-emerald-700">Delivered comprehensive solution exceeding client expectations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-emerald-700">Implemented data-driven strategies for measurable results</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-emerald-700">Maintained consistent communication throughout project lifecycle</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-emerald-100">
                  <button onClick={() => setSelectedProject(null)} className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>}
        
        {/* About Section - Moved under featured work */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
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
          }} className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">Who I Am & How I Work</h2>
                <div className="space-y-4 text-lg text-emerald-700 leading-relaxed">
                  <p>
                    Marketing has taken me across six states and dozens of communities, each one contributing to my passion for real estate and sharpening my instinct for what makes a place feel like home. I lead marketing strategy and execution for both for sale and build to rent communities, blending sharp analytics with human first storytelling to create campaigns that connect. Over the past five years, I've learned how to read a market quickly, craft strategies that resonate, and turn insight into meaningful growth.
                  </p>
                  <p>
                    Now rooted in Culver City, California, I work remotely while managing multiple markets, supporting my team, and collaborating across internal and external departments. I live here with my rescue pup FeFe. On weekends, you'll find us exploring local trails, testing out new matcha spots, or tinkering with AI tools to spark ideas for what's next.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden">
                  <img 
                    src="/Bio Section Doll Image.png" 
                    alt="Lauren Hall - Professional Photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <ShowcaseSection />
        
        <ProjectsCaseStudiesSection />
        
        <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-emerald-50">
          <div className="max-w-6xl mx-auto">
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
          }} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-6" style={{
              fontSize: "2.25rem"
            }}>Leading by Going the Extra 1%</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }} className="space-y-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-bold text-emerald-900 mb-2">Voted "Cream of the Crop" in Culture</h3>
                      <p className="text-emerald-700 leading-relaxed">Recognized across the company for consistently going above and beyond, with standout contributions to team culture and cross-department collaboration.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-bold text-emerald-900 mb-2">AI Integration Leader</h3>
                      <p className="text-emerald-700 leading-relaxed">Launched tools that saved ~$20,000 annually, supporting them with regular workshops and meetings to keep teams aligned and effective.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-bold text-emerald-900 mb-2">Driven by Curiosity</h3>
                      <p className="text-emerald-700 leading-relaxed">Focused on growth through hands-on learning. Built this entire site using AI, customizing every piece without writing a single line of code.</p>
                    </div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-emerald-600 pl-6 italic text-lg text-emerald-700">"I appreciate Lauren's willingness to jump in and help whenever and wherever asked. She ask's the right questions and always gets things done quickly with a purpose!" - J.P VP Leadership</blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
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
          }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">What's in My Toolbox</h2>
              <p className="text-xl text-emerald-700 max-w-2xl mx-auto">The tools and technologies that support my work, from strategy to execution.</p>
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
          }} className="space-y-8">
              {/* Design Category */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-emerald-800 border-b border-emerald-200 pb-2">Design</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    Figma
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    Adobe Creative Suite
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    Canva
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">Visme</span>
                </div>
              </div>

              {/* Email Category */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-emerald-800 border-b border-emerald-200 pb-2">Email</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    HubSpot
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    Mailchimp
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">Lasso</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    Klaviyo
                  </span>
                </div>
              </div>

              {/* Ad Management Category */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-emerald-800 border-b border-emerald-200 pb-2">Ad Management</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    Google Ads
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    Facebook Ads Manager
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">Zillow Boost</span>
                </div>
              </div>

              {/* Analytics Tracking Category */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-emerald-800 border-b border-emerald-200 pb-2">Analytic Tracking</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    Google Analytics
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    Google Tag Manager
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">Microsoft Clarity</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    UTM
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    Callrail
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow" style={{
                  display: "none"
                }}>
                    Hubspot
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow" style={{
                  display: "none"
                }}>
                    Birdeye
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow" style={{
                  display: "none"
                }}>
                    Lasso
                  </span>
                </div>
              </div>

              {/* Lead Management Category */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-emerald-800 border-b border-emerald-200 pb-2">Lead/Listing Management</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">Lasso</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">Hubspot</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">Birdeye</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">MLS</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">BLS</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">NHLS</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">BDX</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">New Home Feed</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">Zillow Builder</span>
                </div>
              </div>

              {/* CMS Category */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-emerald-800 border-b border-emerald-200 pb-2">Content Management System</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    WordPress
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">
                    Wix
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">Craft</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">Shopify</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 hover:shadow-md transition-shadow">Hubspot</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section with Form */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">Let's Connect</h2>
              <p className="text-lg text-emerald-700 leading-relaxed">If something here sparked your interest, let’s talk. I’d love to hear your goals and share how I can support them.</p>
            </div>

            <div className="bg-white border border-emerald-200 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-emerald-900 mb-2">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-emerald-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="Your full name" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-900 mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-emerald-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="your.email@example.com" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-emerald-900 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 border border-emerald-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none" placeholder="Tell me about your project..." required />
                </div>

                {formStatus.type && <div className={`flex items-center space-x-2 p-4 rounded-md border ${formStatus.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
                    {formStatus.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                    <span className="text-sm">{formStatus.message}</span>
                  </div>}

                <button type="submit" disabled={isSubmitting} className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-md font-medium transition-colors ${isSubmitting ? 'bg-emerald-400 cursor-not-allowed text-white' : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl'}`}>
                  {isSubmitting ? <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </> : <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default PersonalBrandLandingPage;