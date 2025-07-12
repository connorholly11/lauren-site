import React from 'react';
import { motion } from 'framer-motion';
import StickyHeader from './StickyHeader';
import HeroSection from './HeroSection';
import ShowcaseSection from './ShowcaseSection';
import ProjectsCaseStudiesSection from './ProjectsCaseStudiesSection';
import LeadershipSection from './LeadershipSection';
import Footer from './Footer';
import { Star, Award, TrendingUp, Users, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
interface FormData {
  name: string;
  email: string;
  message: string;
}
interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}
const PersonalBrandLandingPage: React.FC = () => {
  const skills = [{
    name: 'Email Marketing',
    level: 95,
    icon: Mail
  }, {
    name: 'SEO & Analytics',
    level: 90,
    icon: TrendingUp
  }, {
    name: 'Team Leadership',
    level: 88,
    icon: Users
  }, {
    name: 'Campaign Strategy',
    level: 92,
    icon: Award
  }];
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
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50" data-magicpath-id="0" data-magicpath-path="PersonalBrandLandingPage.tsx">
      <StickyHeader data-magicpath-id="1" data-magicpath-path="PersonalBrandLandingPage.tsx" />
      
      <main data-magicpath-id="2" data-magicpath-path="PersonalBrandLandingPage.tsx">
        <HeroSection data-magicpath-id="3" data-magicpath-path="PersonalBrandLandingPage.tsx" />
        
        {/* About Section - Moved under header */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="4" data-magicpath-path="PersonalBrandLandingPage.tsx">
          <div className="max-w-6xl mx-auto" data-magicpath-id="5" data-magicpath-path="PersonalBrandLandingPage.tsx">
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
          }} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="6" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <div data-magicpath-id="7" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-magicpath-id="8" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  About Me
                </h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed" data-magicpath-id="9" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <p data-magicpath-id="10" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    With over 8 years of experience in digital marketing, I specialize in creating 
                    data-driven strategies that deliver measurable results. My passion lies in 
                    transforming brands through innovative campaigns and strategic thinking.
                  </p>
                  <p data-magicpath-id="11" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    I've had the privilege of working with Fortune 500 companies and fast-growing 
                    startups, helping them achieve their marketing goals and drive sustainable growth. 
                    My approach combines creativity with analytics to ensure every campaign delivers 
                    maximum impact.
                  </p>
                </div>
              </div>
              <div className="relative" data-magicpath-id="12" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center" data-magicpath-id="13" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <div className="w-64 h-64 bg-slate-200 rounded-xl flex items-center justify-center" data-magicpath-id="14" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    <span className="text-slate-500 text-sm" data-magicpath-id="15" data-magicpath-path="PersonalBrandLandingPage.tsx">Professional Photo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <ShowcaseSection data-magicpath-id="16" data-magicpath-path="PersonalBrandLandingPage.tsx" />
        
        <ProjectsCaseStudiesSection data-magicpath-id="17" data-magicpath-path="PersonalBrandLandingPage.tsx" />
        
        <LeadershipSection data-magicpath-id="18" data-magicpath-path="PersonalBrandLandingPage.tsx" />

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-magicpath-id="19" data-magicpath-path="PersonalBrandLandingPage.tsx">
          <div className="max-w-6xl mx-auto" data-magicpath-id="20" data-magicpath-path="PersonalBrandLandingPage.tsx">
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
          }} className="text-center mb-16" data-magicpath-id="21" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" data-magicpath-id="22" data-magicpath-path="PersonalBrandLandingPage.tsx">
                Skills & Expertise
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto" data-magicpath-id="23" data-magicpath-path="PersonalBrandLandingPage.tsx">
                Combining strategic thinking with hands-on execution to drive marketing success
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8" data-magicpath-id="24" data-magicpath-path="PersonalBrandLandingPage.tsx">
              {skills.map((skill, index) => <motion.div key={skill.name} initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-slate-50 rounded-xl p-6" data-magicpath-id="25" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <div className="flex items-center mb-4" data-magicpath-id="26" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    <skill.icon className="w-6 h-6 text-blue-600 mr-3" data-magicpath-id="27" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                    <h3 className="text-lg font-semibold text-slate-900" data-magicpath-id="28" data-magicpath-path="PersonalBrandLandingPage.tsx">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2" data-magicpath-id="29" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    <motion.div initial={{
                  width: 0
                }} whileInView={{
                  width: `${skill.level}%`
                }} transition={{
                  duration: 1,
                  delay: 0.5
                }} viewport={{
                  once: true
                }} className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" data-magicpath-id="30" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                  </div>
                  <span className="text-sm text-slate-600 mt-2 block" data-magicpath-id="31" data-magicpath-path="PersonalBrandLandingPage.tsx">{skill.level}% Proficiency</span>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Contact Section with Form */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-magicpath-id="32" data-magicpath-path="PersonalBrandLandingPage.tsx">
          <div className="max-w-2xl mx-auto" data-magicpath-id="33" data-magicpath-path="PersonalBrandLandingPage.tsx">
            <div className="text-center mb-12" data-magicpath-id="34" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <h2 className="text-3xl font-bold text-slate-900 mb-4" data-magicpath-id="35" data-magicpath-path="PersonalBrandLandingPage.tsx">
                Get in Touch
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed" data-magicpath-id="36" data-magicpath-path="PersonalBrandLandingPage.tsx">
                Ready to discuss your project? Send me a message and I'll get back to you promptly.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-8" data-magicpath-id="37" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <form onSubmit={handleSubmit} className="space-y-6" data-magicpath-id="38" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <div data-magicpath-id="39" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2" data-magicpath-id="40" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500 transition-colors" placeholder="Your full name" required data-magicpath-id="41" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                </div>

                <div data-magicpath-id="42" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2" data-magicpath-id="43" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500 transition-colors" placeholder="your.email@example.com" required data-magicpath-id="44" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                </div>

                <div data-magicpath-id="45" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2" data-magicpath-id="46" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500 transition-colors resize-none" placeholder="Tell me about your project..." required data-magicpath-id="47" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                </div>

                {formStatus.type && <div className={`flex items-center space-x-2 p-4 rounded-md border ${formStatus.type === 'success' ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'}`} data-magicpath-id="48" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    {formStatus.type === 'success' ? <CheckCircle className="w-5 h-5" data-magicpath-id="49" data-magicpath-path="PersonalBrandLandingPage.tsx" /> : <AlertCircle className="w-5 h-5" data-magicpath-id="50" data-magicpath-path="PersonalBrandLandingPage.tsx" />}
                    <span className="text-sm" data-magicpath-id="51" data-magicpath-path="PersonalBrandLandingPage.tsx">{formStatus.message}</span>
                  </div>}

                <button type="submit" disabled={isSubmitting} className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-md font-medium transition-colors ${isSubmitting ? 'bg-slate-400 cursor-not-allowed text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}`} data-magicpath-id="52" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  {isSubmitting ? <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" data-magicpath-id="53" data-magicpath-path="PersonalBrandLandingPage.tsx"></div>
                      <span data-magicpath-id="54" data-magicpath-path="PersonalBrandLandingPage.tsx">Sending...</span>
                    </> : <>
                      <Send className="w-5 h-5" data-magicpath-id="55" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                      <span data-magicpath-id="56" data-magicpath-path="PersonalBrandLandingPage.tsx">Send Message</span>
                    </>}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer data-magicpath-id="57" data-magicpath-path="PersonalBrandLandingPage.tsx" />
    </div>;
};
export default PersonalBrandLandingPage;