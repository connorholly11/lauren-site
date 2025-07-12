"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, Award, Target, ChevronRight, Star, Lightbulb, Heart, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
interface LeadershipExample {
  id: string;
  title: string;
  category: string;
  summary: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
  situation: string;
  challenge: string;
  action: string;
  result: string;
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  skills: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}
const LeadershipSection: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<string | null>(null);
  const leadershipExamples: LeadershipExample[] = [{
    id: 'team-transformation',
    title: 'Marketing Team Transformation',
    category: 'Team Leadership',
    summary: 'Led a complete restructure of a 12-person marketing team, implementing new processes and culture that increased productivity by 85%.',
    icon: Users,
    situation: 'Inherited a demoralized marketing team with high turnover, missed deadlines, and declining campaign performance across multiple product lines.',
    challenge: 'Team morale was at an all-time low with 60% turnover in the previous year. Processes were outdated, communication was fragmented, and there was no clear vision or accountability structure.',
    action: 'Implemented a comprehensive transformation strategy including one-on-one coaching sessions, new project management systems, cross-functional collaboration frameworks, and a mentorship program. Established clear KPIs and created a culture of recognition and growth.',
    result: 'Within 6 months, transformed the team into a high-performing unit with zero turnover, 85% increase in campaign delivery speed, and 120% improvement in campaign ROI.',
    impact: [{
      metric: 'Team Retention',
      value: '100%',
      description: 'Zero turnover in 18 months post-transformation'
    }, {
      metric: 'Productivity Increase',
      value: '85%',
      description: 'Faster campaign delivery and execution'
    }, {
      metric: 'Employee Satisfaction',
      value: '9.2/10',
      description: 'Up from 4.1/10 in annual survey'
    }, {
      metric: 'Campaign ROI',
      value: '+120%',
      description: 'Improved performance across all channels'
    }],
    skills: ['Team Building', 'Change Management', 'Performance Coaching', 'Process Optimization'],
    testimonial: {
      quote: "Sarah didn't just manage our team, she transformed our entire culture. Her leadership style brought out the best in everyone and created an environment where we could truly excel.",
      author: "Alex Thompson",
      role: "Senior Marketing Specialist"
    }
  }, {
    id: 'crisis-leadership',
    title: 'Crisis Communication Leadership',
    category: 'Crisis Management',
    summary: 'Led crisis communication efforts during a major product recall, maintaining brand trust and customer loyalty through transparent leadership.',
    icon: Shield,
    situation: 'Company faced a major product recall affecting 50,000+ customers, with potential for significant brand damage and customer loss during peak sales season.',
    challenge: 'Needed to manage communications across multiple stakeholders (customers, media, regulators, internal teams) while maintaining brand integrity and customer trust during a highly sensitive situation.',
    action: 'Developed and executed a comprehensive crisis communication strategy with transparent messaging, proactive customer outreach, media relations, and internal team coordination. Led daily crisis meetings and personally handled key stakeholder communications.',
    result: 'Successfully navigated the crisis with minimal brand damage, maintained 94% customer retention, and actually increased brand trust scores through transparent handling of the situation.',
    impact: [{
      metric: 'Customer Retention',
      value: '94%',
      description: 'Maintained loyalty during crisis period'
    }, {
      metric: 'Brand Trust Score',
      value: '+15%',
      description: 'Increased due to transparent communication'
    }, {
      metric: 'Media Sentiment',
      value: '78% Positive',
      description: 'Positive coverage despite crisis'
    }, {
      metric: 'Recovery Time',
      value: '6 weeks',
      description: 'Faster than industry average of 12 weeks'
    }],
    skills: ['Crisis Management', 'Strategic Communication', 'Stakeholder Management', 'Media Relations'],
    testimonial: {
      quote: "Sarah's leadership during our crisis was exceptional. Her calm, strategic approach and transparent communication not only got us through the crisis but actually strengthened our brand.",
      author: "Maria Santos",
      role: "Chief Executive Officer"
    }
  }, {
    id: 'innovation-initiative',
    title: 'Innovation Lab Initiative',
    category: 'Strategic Innovation',
    summary: 'Spearheaded the creation of an internal innovation lab that generated 15 new product concepts and $2.3M in additional revenue.',
    icon: Lightbulb,
    situation: 'Company was losing market share to more innovative competitors and needed to foster a culture of innovation and creative problem-solving across departments.',
    challenge: 'Traditional corporate structure was stifling creativity. Teams were risk-averse, and there was no formal process for idea generation, testing, or implementation of innovative concepts.',
    action: 'Designed and launched an internal innovation lab with dedicated resources, cross-functional teams, and a structured innovation process. Implemented idea management systems, rapid prototyping workflows, and innovation challenges with executive sponsorship.',
    result: 'Generated 15 viable product concepts in the first year, with 5 moving to market and generating $2.3M in new revenue. Created a sustainable innovation culture that continues to drive growth.',
    impact: [{
      metric: 'New Product Concepts',
      value: '15',
      description: 'Viable ideas generated in first year'
    }, {
      metric: 'Revenue Generated',
      value: '$2.3M',
      description: 'From new product launches'
    }, {
      metric: 'Employee Participation',
      value: '87%',
      description: 'Cross-departmental engagement'
    }, {
      metric: 'Time to Market',
      value: '-40%',
      description: 'Faster product development cycle'
    }],
    skills: ['Innovation Management', 'Cross-functional Leadership', 'Strategic Planning', 'Change Leadership'],
    testimonial: {
      quote: "The innovation lab Sarah created became the heartbeat of our company's growth strategy. Her vision and execution transformed how we approach product development.",
      author: "Dr. James Wilson",
      role: "Chief Technology Officer"
    }
  }, {
    id: 'mentorship-program',
    title: 'Company-Wide Mentorship Program',
    category: 'People Development',
    summary: 'Designed and implemented a mentorship program that improved employee retention by 45% and accelerated career development across the organization.',
    icon: Heart,
    situation: 'High employee turnover, especially among junior staff, and limited career development opportunities were impacting company growth and team morale.',
    challenge: 'No formal mentorship structure existed, senior leaders were too busy for regular mentoring, and junior employees felt disconnected from career advancement opportunities.',
    action: 'Created a comprehensive mentorship program with structured matching processes, training for mentors, goal-setting frameworks, and regular progress tracking. Personally mentored 8 high-potential employees while overseeing the program.',
    result: 'Launched program with 120 mentor-mentee pairs, achieved 45% improvement in employee retention, and saw 60% of mentees receive promotions within 18 months.',
    impact: [{
      metric: 'Employee Retention',
      value: '+45%',
      description: 'Significant reduction in turnover'
    }, {
      metric: 'Internal Promotions',
      value: '60%',
      description: 'Of mentees promoted within 18 months'
    }, {
      metric: 'Program Participation',
      value: '120 Pairs',
      description: 'Active mentor-mentee relationships'
    }, {
      metric: 'Satisfaction Score',
      value: '9.1/10',
      description: 'Program effectiveness rating'
    }],
    skills: ['Mentorship', 'Program Development', 'Talent Development', 'Organizational Leadership'],
    testimonial: {
      quote: "Sarah's mentorship program didn't just help individual careers—it transformed our entire company culture. The program she built continues to be one of our most valuable initiatives.",
      author: "Rachel Kim",
      role: "Head of Human Resources"
    }
  }];
  const toggleExample = (exampleId: string) => {
    setSelectedExample(selectedExample === exampleId ? null : exampleId);
  };
  return <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50" data-magicpath-id="0" data-magicpath-path="LeadershipSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="LeadershipSection.tsx">
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
      }} className="text-center mb-16" data-magicpath-id="2" data-magicpath-path="LeadershipSection.tsx">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6" data-magicpath-id="3" data-magicpath-path="LeadershipSection.tsx">
            Leadership in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8" data-magicpath-id="4" data-magicpath-path="LeadershipSection.tsx">
            Real examples of how strategic leadership, team development, and innovative thinking 
            have driven measurable results and organizational transformation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" data-magicpath-id="5" data-magicpath-path="LeadershipSection.tsx"></div>
        </motion.div>

        <div className="space-y-8" data-magicpath-id="6" data-magicpath-path="LeadershipSection.tsx">
          {leadershipExamples.map((example, index) => <motion.div key={example.id} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200" data-magicpath-id="7" data-magicpath-path="LeadershipSection.tsx">
              {/* Example Header */}
              <div className="p-8 cursor-pointer hover:bg-slate-50 transition-colors duration-300" onClick={() => toggleExample(example.id)} data-magicpath-id="8" data-magicpath-path="LeadershipSection.tsx">
                <div className="flex items-center justify-between" data-magicpath-id="9" data-magicpath-path="LeadershipSection.tsx">
                  <div className="flex items-center space-x-6" data-magicpath-id="10" data-magicpath-path="LeadershipSection.tsx">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center" data-magicpath-id="11" data-magicpath-path="LeadershipSection.tsx">
                      <example.icon className="w-8 h-8 text-white" data-magicpath-id="12" data-magicpath-path="LeadershipSection.tsx" />
                    </div>
                    <div data-magicpath-id="13" data-magicpath-path="LeadershipSection.tsx">
                      <div className="flex items-center space-x-3 mb-2" data-magicpath-id="14" data-magicpath-path="LeadershipSection.tsx">
                        <h3 className="text-2xl font-bold text-slate-900" data-magicpath-id="15" data-magicpath-path="LeadershipSection.tsx">{example.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full" data-magicpath-id="16" data-magicpath-path="LeadershipSection.tsx">
                          {example.category}
                        </span>
                      </div>
                      <p className="text-lg text-slate-600 leading-relaxed max-w-2xl" data-magicpath-id="17" data-magicpath-path="LeadershipSection.tsx">
                        {example.summary}
                      </p>
                    </div>
                  </div>
                  <motion.div animate={{
                rotate: selectedExample === example.id ? 90 : 0
              }} transition={{
                duration: 0.3
              }} className="flex-shrink-0" data-magicpath-id="18" data-magicpath-path="LeadershipSection.tsx">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center" data-magicpath-id="19" data-magicpath-path="LeadershipSection.tsx">
                      <ChevronRight className="w-5 h-5 text-slate-600" data-magicpath-id="20" data-magicpath-path="LeadershipSection.tsx" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence data-magicpath-id="21" data-magicpath-path="LeadershipSection.tsx">
                {selectedExample === example.id && <motion.div initial={{
              opacity: 0,
              height: 0
            }} animate={{
              opacity: 1,
              height: 'auto'
            }} exit={{
              opacity: 0,
              height: 0
            }} transition={{
              duration: 0.4
            }} className="border-t border-slate-200" data-magicpath-id="22" data-magicpath-path="LeadershipSection.tsx">
                    <div className="p-8 bg-slate-50 space-y-10" data-magicpath-id="23" data-magicpath-path="LeadershipSection.tsx">
                      
                      {/* STAR Method Breakdown */}
                      <div className="grid md:grid-cols-2 gap-8" data-magicpath-id="24" data-magicpath-path="LeadershipSection.tsx">
                        <div className="space-y-6" data-magicpath-id="25" data-magicpath-path="LeadershipSection.tsx">
                          <div className="bg-white rounded-xl p-6 border border-slate-200" data-magicpath-id="26" data-magicpath-path="LeadershipSection.tsx">
                            <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center" data-magicpath-id="27" data-magicpath-path="LeadershipSection.tsx">
                              <Target className="w-5 h-5 mr-2 text-blue-600" data-magicpath-id="28" data-magicpath-path="LeadershipSection.tsx" />
                              Situation
                            </h4>
                            <p className="text-slate-700 leading-relaxed" data-magicpath-id="29" data-magicpath-path="LeadershipSection.tsx">{example.situation}</p>
                          </div>
                          
                          <div className="bg-white rounded-xl p-6 border border-slate-200" data-magicpath-id="30" data-magicpath-path="LeadershipSection.tsx">
                            <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center" data-magicpath-id="31" data-magicpath-path="LeadershipSection.tsx">
                              <Zap className="w-5 h-5 mr-2 text-red-600" data-magicpath-id="32" data-magicpath-path="LeadershipSection.tsx" />
                              Challenge
                            </h4>
                            <p className="text-slate-700 leading-relaxed" data-magicpath-id="33" data-magicpath-path="LeadershipSection.tsx">{example.challenge}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-6" data-magicpath-id="34" data-magicpath-path="LeadershipSection.tsx">
                          <div className="bg-white rounded-xl p-6 border border-slate-200" data-magicpath-id="35" data-magicpath-path="LeadershipSection.tsx">
                            <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center" data-magicpath-id="36" data-magicpath-path="LeadershipSection.tsx">
                              <CheckCircle className="w-5 h-5 mr-2 text-green-600" data-magicpath-id="37" data-magicpath-path="LeadershipSection.tsx" />
                              Action Taken
                            </h4>
                            <p className="text-slate-700 leading-relaxed" data-magicpath-id="38" data-magicpath-path="LeadershipSection.tsx">{example.action}</p>
                          </div>
                          
                          <div className="bg-white rounded-xl p-6 border border-slate-200" data-magicpath-id="39" data-magicpath-path="LeadershipSection.tsx">
                            <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center" data-magicpath-id="40" data-magicpath-path="LeadershipSection.tsx">
                              <TrendingUp className="w-5 h-5 mr-2 text-purple-600" data-magicpath-id="41" data-magicpath-path="LeadershipSection.tsx" />
                              Results Achieved
                            </h4>
                            <p className="text-slate-700 leading-relaxed" data-magicpath-id="42" data-magicpath-path="LeadershipSection.tsx">{example.result}</p>
                          </div>
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div data-magicpath-id="43" data-magicpath-path="LeadershipSection.tsx">
                        <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center" data-magicpath-id="44" data-magicpath-path="LeadershipSection.tsx">
                          <Award className="w-6 h-6 mr-3 text-blue-600" data-magicpath-id="45" data-magicpath-path="LeadershipSection.tsx" />
                          Measurable Impact
                        </h4>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="46" data-magicpath-path="LeadershipSection.tsx">
                          {example.impact.map((metric, idx) => <div key={idx} className="bg-white rounded-xl p-6 text-center border border-slate-200" data-magicpath-id="47" data-magicpath-path="LeadershipSection.tsx">
                              <div className="text-3xl font-bold text-slate-900 mb-2" data-magicpath-id="48" data-magicpath-path="LeadershipSection.tsx">{metric.value}</div>
                              <div className="text-sm font-semibold text-slate-700 mb-2" data-magicpath-id="49" data-magicpath-path="LeadershipSection.tsx">{metric.metric}</div>
                              <div className="text-xs text-slate-600 leading-relaxed" data-magicpath-id="50" data-magicpath-path="LeadershipSection.tsx">{metric.description}</div>
                            </div>)}
                        </div>
                      </div>

                      {/* Skills Demonstrated */}
                      <div data-magicpath-id="51" data-magicpath-path="LeadershipSection.tsx">
                        <h4 className="text-xl font-bold text-slate-900 mb-4" data-magicpath-id="52" data-magicpath-path="LeadershipSection.tsx">
                          Key Leadership Skills Demonstrated
                        </h4>
                        <div className="flex flex-wrap gap-3" data-magicpath-id="53" data-magicpath-path="LeadershipSection.tsx">
                          {example.skills.map((skill, idx) => <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200" data-magicpath-id="54" data-magicpath-path="LeadershipSection.tsx">
                              {skill}
                            </span>)}
                        </div>
                      </div>

                      {/* Testimonial */}
                      {example.testimonial && <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white" data-magicpath-id="55" data-magicpath-path="LeadershipSection.tsx">
                          <div className="flex justify-center mb-4" data-magicpath-id="56" data-magicpath-path="LeadershipSection.tsx">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" data-magicpath-id="57" data-magicpath-path="LeadershipSection.tsx" />)}
                          </div>
                          <blockquote className="text-lg italic leading-relaxed mb-6 text-center" data-magicpath-id="58" data-magicpath-path="LeadershipSection.tsx">
                            "{example.testimonial.quote}"
                          </blockquote>
                          <div className="text-center" data-magicpath-id="59" data-magicpath-path="LeadershipSection.tsx">
                            <div className="font-bold text-lg" data-magicpath-id="60" data-magicpath-path="LeadershipSection.tsx">{example.testimonial.author}</div>
                            <div className="text-blue-100" data-magicpath-id="61" data-magicpath-path="LeadershipSection.tsx">{example.testimonial.role}</div>
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
      }} className="text-center mt-16" data-magicpath-id="62" data-magicpath-path="LeadershipSection.tsx">
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-200" data-magicpath-id="63" data-magicpath-path="LeadershipSection.tsx">
            <h3 className="text-2xl font-bold text-slate-900 mb-4" data-magicpath-id="64" data-magicpath-path="LeadershipSection.tsx">
              Ready to Experience This Leadership?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto" data-magicpath-id="65" data-magicpath-path="LeadershipSection.tsx">
              Let's discuss how these leadership approaches can drive transformation and results in your organization.
            </p>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-magicpath-id="66" data-magicpath-path="LeadershipSection.tsx">
              Let's Connect
              <ArrowRight className="ml-2 w-5 h-5" data-magicpath-id="67" data-magicpath-path="LeadershipSection.tsx" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default LeadershipSection;