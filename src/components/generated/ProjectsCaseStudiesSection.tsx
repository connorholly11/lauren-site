"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, TrendingUp, Users, DollarSign, Calendar, ArrowRight, CheckCircle, Target, BarChart3, Clock, Zap } from 'lucide-react';
interface Challenge {
  title: string;
  description: string;
}
interface Solution {
  step: number;
  title: string;
  description: string;
  outcome: string;
}
interface BeforeAfter {
  metric: string;
  before: string;
  after: string;
  improvement: string;
}
interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  duration: string;
  budget: string;
  clientType: string;
  challenges: Challenge[];
  solutions: Solution[];
  beforeAfter: BeforeAfter[];
  results: {
    metric: string;
    value: string;
    icon: React.ComponentType<{
      className?: string;
    }>;
    description: string;
  }[];
  timeline: {
    phase: string;
    duration: string;
    activities: string[];
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}
const ProjectsCaseStudiesSection: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const projects: Project[] = [{
    id: 'luxury-campaign',
    title: 'Luxury Property Launch Campaign',
    category: 'Digital Marketing',
    summary: 'Comprehensive marketing campaign for a $2.5M luxury property featuring multi-channel approach and targeted audience segmentation.',
    image: '🏡',
    duration: '6 weeks',
    budget: '$15,000',
    clientType: 'Luxury Real Estate Developer',
    challenges: [{
      title: 'Market Saturation',
      description: 'Luxury market was oversaturated with similar properties, making differentiation crucial'
    }, {
      title: 'Target Audience Reach',
      description: 'High-net-worth individuals are notoriously difficult to reach through traditional channels'
    }, {
      title: 'Premium Positioning',
      description: 'Needed to justify premium pricing while highlighting unique value propositions'
    }],
    solutions: [{
      step: 1,
      title: 'Market Analysis & Positioning',
      description: 'Conducted comprehensive competitive analysis and identified unique selling propositions',
      outcome: 'Developed compelling differentiation strategy focusing on architectural heritage and location exclusivity'
    }, {
      step: 2,
      title: 'Premium Content Creation',
      description: 'Produced high-end virtual tours, professional photography, and lifestyle videos',
      outcome: 'Created immersive brand experience that elevated property perception and engagement'
    }, {
      step: 3,
      title: 'Targeted Digital Campaigns',
      description: 'Launched precision-targeted campaigns across Instagram, Facebook, and Google Ads',
      outcome: 'Achieved 3.2x higher engagement rates compared to industry benchmarks'
    }, {
      step: 4,
      title: 'Exclusive Events Strategy',
      description: 'Organized private preview events and broker networking sessions',
      outcome: 'Generated 45 qualified leads from exclusive events alone'
    }],
    beforeAfter: [{
      metric: 'Monthly Inquiries',
      before: '12',
      after: '127',
      improvement: '+958%'
    }, {
      metric: 'Conversion Rate',
      before: '8.5%',
      after: '18.5%',
      improvement: '+117%'
    }, {
      metric: 'Cost per Lead',
      before: '$340',
      after: '$118',
      improvement: '-65%'
    }],
    results: [{
      metric: 'Qualified Leads',
      value: '127',
      icon: Users,
      description: 'High-intent prospects generated within 30 days'
    }, {
      metric: 'Conversion Rate',
      value: '18.5%',
      icon: TrendingUp,
      description: 'From inquiry to property showing'
    }, {
      metric: 'Campaign ROI',
      value: '340%',
      icon: DollarSign,
      description: 'Return on marketing investment'
    }, {
      metric: 'Media Coverage',
      value: '8 Features',
      icon: BarChart3,
      description: 'Premium lifestyle publications'
    }],
    timeline: [{
      phase: 'Research & Strategy',
      duration: '1 week',
      activities: ['Market analysis', 'Competitor research', 'Audience profiling', 'Strategy development']
    }, {
      phase: 'Content Production',
      duration: '2 weeks',
      activities: ['Photography shoot', 'Video production', 'Virtual tour creation', 'Collateral design']
    }, {
      phase: 'Campaign Launch',
      duration: '2 weeks',
      activities: ['Digital campaign setup', 'Event planning', 'PR outreach', 'Influencer partnerships']
    }, {
      phase: 'Optimization & Results',
      duration: '1 week',
      activities: ['Performance monitoring', 'Campaign optimization', 'Lead nurturing', 'Results analysis']
    }],
    testimonial: {
      quote: "The campaign exceeded all our expectations. The strategic approach and flawless execution resulted in the fastest luxury property sale in our portfolio's history.",
      author: "Sarah Mitchell",
      role: "Development Director"
    }
  }, {
    id: 'first-time-buyers',
    title: 'First-Time Buyer Education Series',
    category: 'Content Marketing',
    summary: 'Educational content campaign targeting first-time homebuyers with comprehensive guides and interactive tools.',
    image: '📚',
    duration: '12 weeks',
    budget: '$8,500',
    clientType: 'Regional Real Estate Agency',
    challenges: [{
      title: 'Complex Information',
      description: 'Home buying process is overwhelming for first-time buyers with too much confusing information'
    }, {
      title: 'Trust Building',
      description: 'New buyers are skeptical of real estate professionals and need education before engagement'
    }, {
      title: 'Long Sales Cycle',
      description: 'First-time buyers take 6-12 months to make decisions, requiring sustained engagement'
    }],
    solutions: [{
      step: 1,
      title: 'Educational Content Strategy',
      description: 'Developed comprehensive buyer education curriculum with interactive elements',
      outcome: 'Created trusted resource that positioned agency as helpful advisor rather than salesperson'
    }, {
      step: 2,
      title: 'Multi-Format Content Creation',
      description: 'Produced guides, videos, webinars, and interactive tools for different learning preferences',
      outcome: 'Achieved 85% content completion rate across all formats'
    }, {
      step: 3,
      title: 'Automated Nurture Sequences',
      description: 'Built email automation that delivered relevant content based on buyer journey stage',
      outcome: 'Maintained 45% email open rates throughout 12-week nurture sequence'
    }, {
      step: 4,
      title: 'Community Building',
      description: 'Created private Facebook group and monthly webinars for ongoing support',
      outcome: 'Built engaged community of 500+ active members sharing experiences and advice'
    }],
    beforeAfter: [{
      metric: 'Lead Quality Score',
      before: '6.2/10',
      after: '8.7/10',
      improvement: '+40%'
    }, {
      metric: 'Time to Close',
      before: '89 days',
      after: '62 days',
      improvement: '-30%'
    }, {
      metric: 'Client Satisfaction',
      before: '7.8/10',
      after: '9.4/10',
      improvement: '+21%'
    }],
    results: [{
      metric: 'Content Downloads',
      value: '2,340',
      icon: Users,
      description: 'Educational resources downloaded'
    }, {
      metric: 'Email Subscribers',
      value: '890',
      icon: TrendingUp,
      description: 'New qualified leads generated'
    }, {
      metric: 'Webinar Attendance',
      value: '65%',
      icon: BarChart3,
      description: 'Average attendance rate'
    }, {
      metric: 'Conversion Rate',
      value: '23%',
      icon: DollarSign,
      description: 'From lead to client'
    }],
    timeline: [{
      phase: 'Content Planning',
      duration: '2 weeks',
      activities: ['Buyer journey mapping', 'Content calendar creation', 'Resource development', 'Tool design']
    }, {
      phase: 'Content Production',
      duration: '4 weeks',
      activities: ['Guide writing', 'Video production', 'Interactive tool development', 'Email sequence creation']
    }, {
      phase: 'Launch & Promotion',
      duration: '3 weeks',
      activities: ['Website integration', 'Social media promotion', 'Partner outreach', 'PR campaign']
    }, {
      phase: 'Optimization & Scale',
      duration: '3 weeks',
      activities: ['Performance analysis', 'Content optimization', 'Community management', 'Results reporting']
    }],
    testimonial: {
      quote: "This campaign transformed how we work with first-time buyers. Our clients are now more informed, confident, and the entire process is smoother for everyone.",
      author: "Michael Chen",
      role: "Senior Real Estate Agent"
    }
  }, {
    id: 'market-analysis',
    title: 'Quarterly Market Analysis Campaign',
    category: 'Data-Driven Marketing',
    summary: 'Data-driven market analysis campaign providing valuable insights to clients while establishing thought leadership.',
    image: '📊',
    duration: '8 weeks',
    budget: '$5,200',
    clientType: 'Independent Real Estate Brokerage',
    challenges: [{
      title: 'Thought Leadership',
      description: 'Needed to establish credibility and expertise in competitive local market'
    }, {
      title: 'Data Complexity',
      description: 'Raw market data was complex and needed to be made accessible to general audience'
    }, {
      title: 'Media Attention',
      description: 'Local media was saturated with generic real estate content and press releases'
    }],
    solutions: [{
      step: 1,
      title: 'Comprehensive Data Analysis',
      description: 'Analyzed 500+ transactions, market trends, and economic indicators for unique insights',
      outcome: 'Discovered 3 key market trends that contradicted conventional wisdom'
    }, {
      step: 2,
      title: 'Visual Storytelling',
      description: 'Created interactive dashboards and infographics to make data compelling and shareable',
      outcome: 'Achieved 340% higher social media engagement compared to previous content'
    }, {
      step: 3,
      title: 'Multi-Channel Distribution',
      description: 'Distributed insights through reports, social media, email, and media outreach',
      outcome: 'Reached 15,000+ local residents and 12 media outlets picked up the story'
    }, {
      step: 4,
      title: 'Client Value Integration',
      description: 'Integrated insights into client consultations and listing presentations',
      outcome: 'Increased listing conversion rate by 35% using market insights as credibility tool'
    }],
    beforeAfter: [{
      metric: 'Brand Recognition',
      before: '23%',
      after: '67%',
      improvement: '+191%'
    }, {
      metric: 'Media Mentions',
      before: '2/quarter',
      after: '12/quarter',
      improvement: '+500%'
    }, {
      metric: 'Referral Rate',
      before: '18%',
      after: '31%',
      improvement: '+72%'
    }],
    results: [{
      metric: 'Media Features',
      value: '12',
      icon: BarChart3,
      description: 'Local news and publication features'
    }, {
      metric: 'Client Engagement',
      value: '+45%',
      icon: TrendingUp,
      description: 'Increase in client interaction'
    }, {
      metric: 'New Referrals',
      value: '23',
      icon: Users,
      description: 'Direct referrals from campaign'
    }, {
      metric: 'Report Downloads',
      value: '1,200',
      icon: DollarSign,
      description: 'Market analysis downloads'
    }],
    timeline: [{
      phase: 'Data Collection',
      duration: '2 weeks',
      activities: ['Transaction analysis', 'Market research', 'Economic indicator review', 'Trend identification']
    }, {
      phase: 'Analysis & Insights',
      duration: '2 weeks',
      activities: ['Statistical analysis', 'Insight development', 'Trend validation', 'Report writing']
    }, {
      phase: 'Content Creation',
      duration: '2 weeks',
      activities: ['Dashboard design', 'Infographic creation', 'Video production', 'Social content']
    }, {
      phase: 'Distribution & PR',
      duration: '2 weeks',
      activities: ['Media outreach', 'Social promotion', 'Client presentations', 'Results tracking']
    }],
    testimonial: {
      quote: "The market analysis campaign positioned us as the go-to experts in our area. We've seen a significant increase in high-quality referrals and media recognition.",
      author: "Jennifer Rodriguez",
      role: "Brokerage Owner"
    }
  }];
  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };
  return <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50" data-magicpath-id="0" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
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
      }} className="text-center mb-16" data-magicpath-id="2" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4" data-magicpath-id="3" data-magicpath-path="ProjectsCaseStudiesSection.tsx">Marketing That Moves the Needle</h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed mb-6" data-magicpath-id="4" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
            Deep dive into real campaigns that delivered exceptional results. 
            Each case study reveals the strategic thinking, creative execution, and measurable outcomes 
            that drive success in marketing.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto" data-magicpath-id="5" data-magicpath-path="ProjectsCaseStudiesSection.tsx"></div>
        </motion.div>

        <div className="space-y-8" data-magicpath-id="6" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
          {projects.map((project, index) => <motion.div key={project.id} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-emerald-200" data-magicpath-id="7" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
              {/* Project Header */}
              <div className="p-8 cursor-pointer hover:bg-emerald-50 transition-colors duration-300" onClick={() => toggleProject(project.id)} data-magicpath-id="8" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                <div className="flex items-center justify-between" data-magicpath-id="9" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                  <div className="flex items-center space-x-6" data-magicpath-id="10" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                    <div className="text-4xl" data-magicpath-id="11" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{project.image}</div>
                    <div data-magicpath-id="12" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                      <div className="flex items-center space-x-3 mb-2" data-magicpath-id="13" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                        <h3 className="text-2xl font-bold text-emerald-900" data-magicpath-id="14" data-magicpath-path="ProjectsCaseStudiesSection.tsx">Customer Experience Revamp</h3>
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full border border-emerald-200" data-magicpath-id="15" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-lg text-emerald-700 leading-relaxed max-w-2xl mb-3" data-magicpath-id="16" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                        {project.summary}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-emerald-600" data-magicpath-id="17" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                        <div className="flex items-center space-x-1" data-magicpath-id="18" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          <Clock className="w-4 h-4" style={{
                        display: "none"
                      }} data-magicpath-id="19" data-magicpath-path="ProjectsCaseStudiesSection.tsx" />
                          <span style={{
                        display: "none"
                      }} data-magicpath-id="20" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1" style={{
                      display: "none"
                    }} data-magicpath-id="21" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          <DollarSign className="w-4 h-4" data-magicpath-id="22" data-magicpath-path="ProjectsCaseStudiesSection.tsx" />
                          <span data-magicpath-id="23" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{project.budget}</span>
                        </div>
                        <div className="flex items-center space-x-1" data-magicpath-id="24" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          <Target className="w-4 h-4" style={{
                        display: "none"
                      }} data-magicpath-id="25" data-magicpath-path="ProjectsCaseStudiesSection.tsx" />
                          <span style={{
                        display: "none"
                      }} data-magicpath-id="26" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{project.clientType}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div animate={{
                rotate: expandedProject === project.id ? 180 : 0
              }} transition={{
                duration: 0.3
              }} className="flex-shrink-0" data-magicpath-id="27" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center" data-magicpath-id="28" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                      {expandedProject === project.id ? <ChevronUp className="w-5 h-5 text-emerald-600" data-magicpath-id="29" data-magicpath-path="ProjectsCaseStudiesSection.tsx" /> : <ChevronDown className="w-5 h-5 text-emerald-600" data-magicpath-id="30" data-magicpath-path="ProjectsCaseStudiesSection.tsx" />}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence data-magicpath-id="31" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                {expandedProject === project.id && <motion.div initial={{
              opacity: 0,
              height: 0
            }} animate={{
              opacity: 1,
              height: 'auto'
            }} exit={{
              opacity: 0,
              height: 0
            }} transition={{
              duration: 0.5
            }} className="border-t border-emerald-200" data-magicpath-id="32" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                    <div className="p-8 bg-emerald-50 space-y-10" data-magicpath-id="33" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                      
                      {/* Challenges Section */}
                      <div data-magicpath-id="34" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                        <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center" data-magicpath-id="35" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          <Zap className="w-5 h-5 mr-2 text-red-500" data-magicpath-id="36" data-magicpath-path="ProjectsCaseStudiesSection.tsx" />
                          Key Challenges
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4" data-magicpath-id="37" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          {project.challenges.map((challenge, idx) => <div key={idx} className="bg-red-50 rounded-xl p-4 border border-red-100" data-magicpath-id="38" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                              <h5 className="font-semibold text-red-900 mb-2" data-magicpath-id="39" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{challenge.title}</h5>
                              <p className="text-red-700 text-sm leading-relaxed" data-magicpath-id="40" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{challenge.description}</p>
                            </div>)}
                        </div>
                      </div>

                      {/* Solutions Process */}
                      <div data-magicpath-id="41" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                        <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center" data-magicpath-id="42" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          <CheckCircle className="w-5 h-5 mr-2 text-emerald-500" data-magicpath-id="43" data-magicpath-path="ProjectsCaseStudiesSection.tsx" />
                          Step-by-Step Solution Process
                        </h4>
                        <div className="space-y-4" data-magicpath-id="44" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          {project.solutions.map((solution, idx) => <div key={idx} className="flex items-start space-x-4" data-magicpath-id="45" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm" data-magicpath-id="46" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                {solution.step}
                              </div>
                              <div className="flex-1" data-magicpath-id="47" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                <h5 className="text-lg font-semibold text-emerald-900 mb-2" data-magicpath-id="48" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{solution.title}</h5>
                                <p className="text-emerald-700 mb-2 leading-relaxed" data-magicpath-id="49" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{solution.description}</p>
                                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100" data-magicpath-id="50" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                  <p className="text-emerald-800 text-sm" data-magicpath-id="51" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                    <strong data-magicpath-id="52" data-magicpath-path="ProjectsCaseStudiesSection.tsx">Outcome:</strong> {solution.outcome}
                                  </p>
                                </div>
                              </div>
                            </div>)}
                        </div>
                      </div>

                      {/* Before/After Comparison */}
                      <div data-magicpath-id="53" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                        <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center" data-magicpath-id="54" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          <ArrowRight className="w-5 h-5 mr-2 text-emerald-500" data-magicpath-id="55" data-magicpath-path="ProjectsCaseStudiesSection.tsx" />
                          Before vs After Results
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4" data-magicpath-id="56" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          {project.beforeAfter.map((comparison, idx) => <div key={idx} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200" data-magicpath-id="57" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                              <h5 className="font-semibold text-emerald-900 mb-3" data-magicpath-id="58" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{comparison.metric}</h5>
                              <div className="space-y-2" data-magicpath-id="59" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                <div className="flex justify-between items-center" data-magicpath-id="60" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                  <span className="text-red-600 font-medium text-sm" data-magicpath-id="61" data-magicpath-path="ProjectsCaseStudiesSection.tsx">Before:</span>
                                  <span className="text-red-800 font-bold" data-magicpath-id="62" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{comparison.before}</span>
                                </div>
                                <div className="flex justify-between items-center" data-magicpath-id="63" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                  <span className="text-emerald-600 font-medium text-sm" data-magicpath-id="64" data-magicpath-path="ProjectsCaseStudiesSection.tsx">After:</span>
                                  <span className="text-emerald-800 font-bold" data-magicpath-id="65" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{comparison.after}</span>
                                </div>
                                <div className="pt-2 border-t border-emerald-200" data-magicpath-id="66" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                  <div className="text-center" data-magicpath-id="67" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-bold" data-magicpath-id="68" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                      {comparison.improvement}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>)}
                        </div>
                      </div>

                      {/* Results & Impact */}
                      <div data-magicpath-id="69" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                        <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center" data-magicpath-id="70" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          <BarChart3 className="w-5 h-5 mr-2 text-teal-500" data-magicpath-id="71" data-magicpath-path="ProjectsCaseStudiesSection.tsx" />
                          Final Results & Impact
                        </h4>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6" data-magicpath-id="72" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          {project.results.map((result, idx) => {
                      const IconComponent = result.icon;
                      return <div key={idx} className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-4 text-center border border-emerald-200" data-magicpath-id="73" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3" data-magicpath-id="74" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                  <IconComponent className="w-6 h-6 text-white" data-magicpath-id="75" data-magicpath-path="ProjectsCaseStudiesSection.tsx" />
                                </div>
                                <div className="text-2xl font-bold text-emerald-900 mb-1" data-magicpath-id="76" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{result.value}</div>
                                <div className="text-sm font-medium text-emerald-700 mb-1" data-magicpath-id="77" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{result.metric}</div>
                                <div className="text-xs text-emerald-600 leading-relaxed" data-magicpath-id="78" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{result.description}</div>
                              </div>;
                    })}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div data-magicpath-id="79" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                        <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center" style={{
                    display: "none"
                  }} data-magicpath-id="80" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          <Calendar className="w-5 h-5 mr-2 text-amber-500" data-magicpath-id="81" data-magicpath-path="ProjectsCaseStudiesSection.tsx" />
                          Project Timeline
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4" data-magicpath-id="82" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          {project.timeline.map((phase, idx) => <div key={idx} className="relative" data-magicpath-id="83" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100" style={{
                        display: "none"
                      }} data-magicpath-id="84" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                <div className="flex items-center justify-between mb-3" data-magicpath-id="85" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                  <h5 className="font-semibold text-amber-900 text-sm" data-magicpath-id="86" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{phase.phase}</h5>
                                  <span className="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded-full" data-magicpath-id="87" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                    {phase.duration}
                                  </span>
                                </div>
                                <ul className="space-y-1" data-magicpath-id="88" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                  {phase.activities.map((activity, actIdx) => <li key={actIdx} className="text-xs text-amber-700 flex items-start" data-magicpath-id="89" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                                      <div className="w-1 h-1 bg-amber-600 rounded-full mt-1.5 mr-2 flex-shrink-0" data-magicpath-id="90" data-magicpath-path="ProjectsCaseStudiesSection.tsx"></div>
                                      {activity}
                                    </li>)}
                                </ul>
                              </div>
                              {idx < project.timeline.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-amber-300" style={{
                        display: "none"
                      }} data-magicpath-id="91" data-magicpath-path="ProjectsCaseStudiesSection.tsx"></div>}
                            </div>)}
                        </div>
                      </div>

                      {/* Client Testimonial */}
                      {project.testimonial && <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white" style={{
                  background: "linear-gradient(90deg, oklch(0.696 0.17 162.48) 0%, oklch(0.704 0.14 182.503) 100%)",
                  display: "none"
                }} data-magicpath-id="92" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                          <blockquote className="text-lg italic leading-relaxed mb-4" data-magicpath-id="93" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                            "{project.testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center space-x-3" data-magicpath-id="94" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center" data-magicpath-id="95" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                              <span className="text-lg" data-magicpath-id="96" data-magicpath-path="ProjectsCaseStudiesSection.tsx">👤</span>
                            </div>
                            <div data-magicpath-id="97" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
                              <div className="font-semibold" data-magicpath-id="98" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{project.testimonial.author}</div>
                              <div className="text-emerald-100 text-sm" data-magicpath-id="99" data-magicpath-path="ProjectsCaseStudiesSection.tsx">{project.testimonial.role}</div>
                            </div>
                          </div>
                        </div>}

                    </div>
                  </motion.div>}
              </AnimatePresence>
            </motion.div>)}
        </div>

        {/* Call to Action */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="text-center mt-16" data-magicpath-id="100" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white" data-magicpath-id="101" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
            <h3 className="text-2xl font-bold mb-4" data-magicpath-id="102" data-magicpath-path="ProjectsCaseStudiesSection.tsx">Ready to Create Your Success Story?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-xl mx-auto" data-magicpath-id="103" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
              Let's discuss how these proven strategies can be adapted for your unique marketing challenges.
            </p>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-magicpath-id="104" data-magicpath-path="ProjectsCaseStudiesSection.tsx">
              Start Your Campaign
              <ArrowRight className="ml-2 w-4 h-4" data-magicpath-id="105" data-magicpath-path="ProjectsCaseStudiesSection.tsx" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ProjectsCaseStudiesSection;