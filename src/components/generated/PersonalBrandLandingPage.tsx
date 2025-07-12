import React from 'react';
import { motion } from 'framer-motion';
import StickyHeader from './StickyHeader';
import HeroSection from './HeroSection';
import ShowcaseSection from './ShowcaseSection';
import Footer from './Footer';
import { Star, Award, TrendingUp, Users, Mail, Phone } from 'lucide-react';
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
  const testimonials = [{
    quote: "Sarah transformed our marketing strategy and increased our ROI by 300%. Her strategic thinking is exceptional.",
    author: "Michael Chen",
    title: "CEO, TechStart Inc."
  }, {
    quote: "Working with Sarah was a game-changer. She brought fresh perspectives and delivered results beyond expectations.",
    author: "Lisa Rodriguez",
    title: "VP Marketing, GrowthCorp"
  }, {
    quote: "Sarah's leadership and marketing expertise helped us scale from startup to market leader in just 18 months.",
    author: "David Kim",
    title: "Founder, InnovateLab"
  }];
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50" data-magicpath-id="0" data-magicpath-path="PersonalBrandLandingPage.tsx">
      <StickyHeader data-magicpath-id="1" data-magicpath-path="PersonalBrandLandingPage.tsx" />
      
      <main data-magicpath-id="2" data-magicpath-path="PersonalBrandLandingPage.tsx">
        <HeroSection data-magicpath-id="3" data-magicpath-path="PersonalBrandLandingPage.tsx" />
        
        <ShowcaseSection data-magicpath-id="4" data-magicpath-path="PersonalBrandLandingPage.tsx" />
        
        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="5" data-magicpath-path="PersonalBrandLandingPage.tsx">
          <div className="max-w-6xl mx-auto" data-magicpath-id="6" data-magicpath-path="PersonalBrandLandingPage.tsx">
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
          }} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="7" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <div data-magicpath-id="8" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-magicpath-id="9" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  About Me
                </h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed" data-magicpath-id="10" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <p data-magicpath-id="11" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    With over 8 years of experience in digital marketing, I specialize in creating 
                    data-driven strategies that deliver measurable results. My passion lies in 
                    transforming brands through innovative campaigns and strategic thinking.
                  </p>
                  <p data-magicpath-id="12" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    I've had the privilege of working with Fortune 500 companies and fast-growing 
                    startups, helping them achieve their marketing goals and drive sustainable growth. 
                    My approach combines creativity with analytics to ensure every campaign delivers 
                    maximum impact.
                  </p>
                </div>
              </div>
              <div className="relative" data-magicpath-id="13" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center" data-magicpath-id="14" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <div className="w-64 h-64 bg-slate-200 rounded-xl flex items-center justify-center" data-magicpath-id="15" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    <span className="text-slate-500 text-sm" data-magicpath-id="16" data-magicpath-path="PersonalBrandLandingPage.tsx">Professional Photo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-magicpath-id="17" data-magicpath-path="PersonalBrandLandingPage.tsx">
          <div className="max-w-6xl mx-auto" data-magicpath-id="18" data-magicpath-path="PersonalBrandLandingPage.tsx">
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
          }} className="text-center mb-16" data-magicpath-id="19" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" data-magicpath-id="20" data-magicpath-path="PersonalBrandLandingPage.tsx">
                Skills & Expertise
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto" data-magicpath-id="21" data-magicpath-path="PersonalBrandLandingPage.tsx">
                Combining strategic thinking with hands-on execution to drive marketing success
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8" data-magicpath-id="22" data-magicpath-path="PersonalBrandLandingPage.tsx">
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
            }} className="bg-slate-50 rounded-xl p-6" data-magicpath-id="23" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  <div className="flex items-center mb-4" data-magicpath-id="24" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    <skill.icon className="w-6 h-6 text-blue-600 mr-3" data-magicpath-id="25" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                    <h3 className="text-lg font-semibold text-slate-900" data-magicpath-id="26" data-magicpath-path="PersonalBrandLandingPage.tsx">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2" data-magicpath-id="27" data-magicpath-path="PersonalBrandLandingPage.tsx">
                    <motion.div initial={{
                  width: 0
                }} whileInView={{
                  width: `${skill.level}%`
                }} transition={{
                  duration: 1,
                  delay: 0.5
                }} viewport={{
                  once: true
                }} className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" data-magicpath-id="28" data-magicpath-path="PersonalBrandLandingPage.tsx" />
                  </div>
                  <span className="text-sm text-slate-600 mt-2 block" data-magicpath-id="29" data-magicpath-path="PersonalBrandLandingPage.tsx">{skill.level}% Proficiency</span>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8" data-magicpath-id="30" data-magicpath-path="PersonalBrandLandingPage.tsx">
          <div className="max-w-4xl mx-auto text-center" data-magicpath-id="31" data-magicpath-path="PersonalBrandLandingPage.tsx">
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
          }} className="mb-16" data-magicpath-id="32" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" data-magicpath-id="33" data-magicpath-path="PersonalBrandLandingPage.tsx">
                What Clients Say
              </h2>
              <p className="text-xl text-slate-600" data-magicpath-id="34" data-magicpath-path="PersonalBrandLandingPage.tsx">
                Trusted by industry leaders and innovative companies
              </p>
            </motion.div>
            
            <motion.div key={currentTestimonial} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.5
          }} className="bg-white rounded-2xl p-8 shadow-lg" data-magicpath-id="35" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <div className="flex justify-center mb-6" data-magicpath-id="36" data-magicpath-path="PersonalBrandLandingPage.tsx">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" data-magicpath-id="37" data-magicpath-path="PersonalBrandLandingPage.tsx" />)}
              </div>
              <blockquote className="text-xl text-slate-700 mb-6 italic" data-magicpath-id="38" data-magicpath-path="PersonalBrandLandingPage.tsx">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div data-magicpath-id="39" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <p className="font-semibold text-slate-900" data-magicpath-id="40" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-slate-600" data-magicpath-id="41" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  {testimonials[currentTestimonial].title}
                </p>
              </div>
            </motion.div>
            
            <div className="flex justify-center mt-8 space-x-2" data-magicpath-id="42" data-magicpath-path="PersonalBrandLandingPage.tsx">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-blue-600' : 'bg-slate-300'}`} data-magicpath-id="43" data-magicpath-path="PersonalBrandLandingPage.tsx" />)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600" data-magicpath-id="44" data-magicpath-path="PersonalBrandLandingPage.tsx">
          <div className="max-w-4xl mx-auto text-center" data-magicpath-id="45" data-magicpath-path="PersonalBrandLandingPage.tsx">
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
          }} data-magicpath-id="46" data-magicpath-path="PersonalBrandLandingPage.tsx">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" data-magicpath-id="47" data-magicpath-path="PersonalBrandLandingPage.tsx">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-magicpath-id="48" data-magicpath-path="PersonalBrandLandingPage.tsx">
                Let's discuss how we can elevate your brand and drive meaningful results together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="49" data-magicpath-path="PersonalBrandLandingPage.tsx">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors" data-magicpath-id="50" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  Schedule a Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors" data-magicpath-id="51" data-magicpath-path="PersonalBrandLandingPage.tsx">
                  Download Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer data-magicpath-id="52" data-magicpath-path="PersonalBrandLandingPage.tsx" />
    </div>;
};
export default PersonalBrandLandingPage;