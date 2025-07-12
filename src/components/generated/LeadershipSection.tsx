"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Lightbulb, Target, CheckCircle, TrendingUp, Award } from 'lucide-react';
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
}
const LeadershipSection: React.FC = () => {
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
    skills: ['Team Building', 'Change Management', 'Performance Coaching', 'Process Optimization']
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
    skills: ['Crisis Management', 'Strategic Communication', 'Stakeholder Management', 'Media Relations']
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
    skills: ['Innovation Management', 'Cross-functional Leadership', 'Strategic Planning', 'Change Leadership']
  }];
  return <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" data-magicpath-id="0" data-magicpath-path="LeadershipSection.tsx">
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
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto" data-magicpath-id="5" data-magicpath-path="LeadershipSection.tsx"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8" data-magicpath-id="6" data-magicpath-path="LeadershipSection.tsx">
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
        }} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500" data-magicpath-id="7" data-magicpath-path="LeadershipSection.tsx">
              {/* Header */}
              <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white" data-magicpath-id="8" data-magicpath-path="LeadershipSection.tsx">
                <div className="flex items-center justify-center mb-6" data-magicpath-id="9" data-magicpath-path="LeadershipSection.tsx">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center" data-magicpath-id="10" data-magicpath-path="LeadershipSection.tsx">
                    <example.icon className="w-10 h-10 text-white" data-magicpath-id="11" data-magicpath-path="LeadershipSection.tsx" />
                  </div>
                </div>
                <div className="text-center" data-magicpath-id="12" data-magicpath-path="LeadershipSection.tsx">
                  <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 text-sm font-semibold rounded-full border border-emerald-400/30 mb-4 inline-block" data-magicpath-id="13" data-magicpath-path="LeadershipSection.tsx">
                    {example.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-4" data-magicpath-id="14" data-magicpath-path="LeadershipSection.tsx">{example.title}</h3>
                  <p className="text-slate-300 leading-relaxed" data-magicpath-id="15" data-magicpath-path="LeadershipSection.tsx">{example.summary}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8" data-magicpath-id="16" data-magicpath-path="LeadershipSection.tsx">
                {/* STAR Method */}
                <div className="space-y-6" data-magicpath-id="17" data-magicpath-path="LeadershipSection.tsx">
                  <div className="border-l-4 border-emerald-500 pl-6" data-magicpath-id="18" data-magicpath-path="LeadershipSection.tsx">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center" data-magicpath-id="19" data-magicpath-path="LeadershipSection.tsx">
                      <Target className="w-5 h-5 mr-2 text-emerald-600" data-magicpath-id="20" data-magicpath-path="LeadershipSection.tsx" />
                      Situation
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed" data-magicpath-id="21" data-magicpath-path="LeadershipSection.tsx">{example.situation}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-6" data-magicpath-id="22" data-magicpath-path="LeadershipSection.tsx">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center" data-magicpath-id="23" data-magicpath-path="LeadershipSection.tsx">
                      <CheckCircle className="w-5 h-5 mr-2 text-orange-600" data-magicpath-id="24" data-magicpath-path="LeadershipSection.tsx" />
                      Action
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed" data-magicpath-id="25" data-magicpath-path="LeadershipSection.tsx">{example.action}</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-6" data-magicpath-id="26" data-magicpath-path="LeadershipSection.tsx">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center" data-magicpath-id="27" data-magicpath-path="LeadershipSection.tsx">
                      <TrendingUp className="w-5 h-5 mr-2 text-teal-600" data-magicpath-id="28" data-magicpath-path="LeadershipSection.tsx" />
                      Results
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed" data-magicpath-id="29" data-magicpath-path="LeadershipSection.tsx">{example.result}</p>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div data-magicpath-id="30" data-magicpath-path="LeadershipSection.tsx">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center" data-magicpath-id="31" data-magicpath-path="LeadershipSection.tsx">
                    <Award className="w-5 h-5 mr-2 text-emerald-600" data-magicpath-id="32" data-magicpath-path="LeadershipSection.tsx" />
                    Key Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-4" data-magicpath-id="33" data-magicpath-path="LeadershipSection.tsx">
                    {example.impact.slice(0, 4).map((metric, idx) => <div key={idx} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 text-center border border-emerald-100" data-magicpath-id="34" data-magicpath-path="LeadershipSection.tsx">
                        <div className="text-2xl font-bold text-slate-900 mb-1" data-magicpath-id="35" data-magicpath-path="LeadershipSection.tsx">{metric.value}</div>
                        <div className="text-xs font-semibold text-slate-700 mb-1" data-magicpath-id="36" data-magicpath-path="LeadershipSection.tsx">{metric.metric}</div>
                        <div className="text-xs text-slate-600" data-magicpath-id="37" data-magicpath-path="LeadershipSection.tsx">{metric.description}</div>
                      </div>)}
                  </div>
                </div>

                {/* Skills */}
                <div data-magicpath-id="38" data-magicpath-path="LeadershipSection.tsx">
                  <h4 className="text-lg font-bold text-slate-900 mb-3" data-magicpath-id="39" data-magicpath-path="LeadershipSection.tsx">Skills Applied</h4>
                  <div className="flex flex-wrap gap-2" data-magicpath-id="40" data-magicpath-path="LeadershipSection.tsx">
                    {example.skills.map((skill, idx) => <span key={idx} className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full border border-emerald-200" data-magicpath-id="41" data-magicpath-path="LeadershipSection.tsx">
                        {skill}
                      </span>)}
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default LeadershipSection;