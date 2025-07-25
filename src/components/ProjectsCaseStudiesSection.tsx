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
    id: 'cold-interest-list',
    title: 'Cold Interest List in a New Market',
    category: 'Digital Marketing',
    summary: 'Six weeks before the pre-sale release of Everly, our first community in Cincinnati, Ohio, the VIP list held only two names. Brand awareness was limited, construction in progress, and previous marketing efforts had stalled.',
    image: '🎯',
    duration: '30 days',
    budget: '$3,500',
    clientType: 'Luxury Real Estate Developer',
    challenges: [{
      title: 'Brand Invisibility',
      description: 'Launching in a new Cincinnati luxury market where our name meant nothing and established competitors dominated awareness'
    }, {
      title: 'Ice-Cold Interest List',
      description: 'Just two prospects on the VIP roster with six weeks until presale kickoff'
    }, {
      title: 'Limited Assets',
      description: 'Buildings still under construction, leaving no finished units or on-site visuals to spark buyer excitement'
    }],
    solutions: [{
      step: 1,
      title: 'Walkability-driven local brand placements',
      description: 'Mapped nearby coffee shops, breweries, and lifestyle venues, then arranged no- to low-cost branded coasters and countertop signs carrying the line "You could walk home from here," boosting visibility and tying Everly to a walkable lifestyle.',
      outcome: 'Secured eight walk-distance partner venues whose coaster and countertop placements made Everly a familiar name in the neighborhood'
    }, {
      step: 2,
      title: 'Targeted luxury direct-mail drop',
      description: 'Sent three high-end mailers to nearby Class A apartment residents with floor plan previews, presale incentives, and a QR code that linked to a landing page outlining a personal invite to our design studio for a closer look at what is coming to Everly.',
      outcome: 'Generated immediate interest from qualified prospects already living in the area'
    }, {
      step: 3,
      title: 'Geo-fenced paid media',
      description: 'Launched a two-week Google and Meta campaign inside a one-mile radius of competitors and downtown offices, serving mobile display ads that echoed the walk-home message.',
      outcome: 'Achieved strong click-through rates among high-intent local prospects'
    }, {
      step: 4,
      title: 'Rapid email nurture',
      description: 'Enrolled every new lead in a three-touch drip sequence with construction updates, lifestyle imagery, and time-sensitive presale offers to keep interest warm until launch.',
      outcome: 'Maintained engagement with all new leads through to presale launch'
    }],
    beforeAfter: [{
      metric: 'VIP List Size',
      before: '2 leads',
      after: '27 leads',
      improvement: '13x growth'
    }, {
      metric: 'Brand Recognition',
      before: '0%',
      after: 'Familiar name',
      improvement: 'From zero to known'
    }, {
      metric: 'QR Scans',
      before: '0',
      after: '120+',
      improvement: 'Strong engagement'
    }],
    results: [{
      metric: 'VIP List Growth',
      value: '32 leads',
      icon: Users,
      description: 'Expanded from 2 to 32 qualified leads in 6 weeks'
    }, {
      metric: 'Presale Contracts',
      value: '2 signed',
      icon: DollarSign,
      description: 'Converted early interest into signed contracts'
    }, {
      metric: 'Walk Home Campaign',
      value: '150+ QR Scans',
      icon: TrendingUp,
      description: 'Generated through walk-home campaign and direct mail drop'
    }, {
      metric: 'Partner Venues',
      value: '8 locations',
      icon: BarChart3,
      description: 'Walk-distance venues displaying our materials'
    }],
    timeline: [{
      phase: 'Market Research',
      duration: 'Week 1',
      activities: ['Mapped walkable venues', 'Identified Class-A buildings', 'Competitive analysis', 'Campaign strategy']
    }, {
      phase: 'Material Production',
      duration: 'Week 2',
      activities: ['Coaster design', 'Direct mail creation', 'Digital ad development', 'Email sequence writing']
    }, {
      phase: 'Launch & Placement',
      duration: 'Week 3',
      activities: ['Venue partnerships', 'Direct mail drop', 'Digital campaign launch', 'Lead capture setup']
    }, {
      phase: 'Nurture & Convert',
      duration: 'Week 4',
      activities: ['Email nurture', 'Hard-hat tours', 'Lead qualification', 'Presale preparation']
    }],
    testimonial: {
      quote: "The walk-home campaign was brilliant. It connected with our target audience perfectly and built genuine local excitement for Everly.",
      author: "Development Team",
      role: "Everly Project Manager"
    }
  }, {
    id: 'customer-service-revamp',
    title: 'Customer Service Revamp',
    category: 'Experience Optimization',
    summary: 'When negative reviews pulled the Google rating down to 3.6 stars and survey response sat in the single digits, a full customer-journey overhaul became urgent.',
    image: '⭐',
    duration: '12 months',
    budget: '$2,000',
    clientType: 'Multi-Community Developer',
    challenges: [{
      title: 'Poor Reviews',
      description: 'Google rating had dropped to 3.6 stars, damaging brand reputation and deterring potential buyers'
    }, {
      title: 'Low Survey Response',
      description: 'Single-digit survey response rates meant we were flying blind on customer satisfaction'
    }, {
      title: 'Communication Gaps',
      description: 'Unclear points of contact, vague timeline expectations, and post-closing warranty confusion'
    }],
    solutions: [{
      step: 1,
      title: 'Resident feedback deep dive',
      description: 'Surveyed every closing and move in from the past two years and identified three core gaps: unclear points of contact, vague timeline expectations, and post closing warranty confusion.',
      outcome: 'Identified specific pain points to address in the customer journey'
    }, {
      step: 2,
      title: 'Printed What to Expect guide',
      description: 'Created and distributed an easy-to-follow booklet that outlined key milestones, one primary point of contact, and warranty steps.',
      outcome: 'Provided clear expectations and reduced confusion throughout the process'
    }, {
      step: 3,
      title: 'Online warranty hub',
      description: 'Launched a form-fill warranty page that captures issues, photos, and notes in one digital queue for faster triage.',
      outcome: 'Routed 98 percent of warranty requests through the new online form'
    }, {
      step: 4,
      title: 'BirdEye review platform',
      description: 'Automated post-tour and post-move-in surveys, triggered friendly review requests, and streamlined response management.',
      outcome: 'Doubled the resident survey response rate'
    }, {
      step: 5,
      title: 'Internal tracking and weekly sync',
      description: 'Built a shared CX tracking sheet and held a brief weekly meeting to align teams and ensure every customer update flows through the designated point of contact.',
      outcome: 'Saved roughly 3 hours of manual follow-up work each week'
    }],
    beforeAfter: [{
      metric: 'Google Rating',
      before: '3.6 stars',
      after: '4.1 stars',
      improvement: '+0.5 stars'
    }, {
      metric: 'Survey Response',
      before: 'Single digits',
      after: 'Doubled',
      improvement: '+100%'
    }, {
      metric: 'Warranty Routing',
      before: 'Scattered',
      after: '98% online',
      improvement: 'Streamlined'
    }],
    results: [{
      metric: 'Google Rating',
      value: '4.1 stars',
      icon: TrendingUp,
      description: 'Lifted from 3.6 within 12 weeks of new customer service journey'
    }, {
      metric: 'Online Warranty',
      value: '98%',
      icon: Users,
      description: 'Requests routed through new form'
    }, {
      metric: 'Time Saved',
      value: '3 hrs/week',
      icon: Clock,
      description: 'Reduced manual follow-up work'
    }, {
      metric: 'Survey Response',
      value: '2x increase',
      icon: BarChart3,
      description: 'Doubled resident feedback rate'
    }],
    timeline: [{
      phase: 'Discovery & Research',
      duration: '2 months',
      activities: ['Survey past residents', 'Identify pain points', 'Map customer journey', 'Define improvement areas']
    }, {
      phase: 'Solution Development',
      duration: '2 months',
      activities: ['Create expectation guide', 'Build warranty portal', 'Setup BirdEye platform', 'Design tracking systems']
    }, {
      phase: 'Implementation',
      duration: '4 months',
      activities: ['Launch new processes', 'Train teams', 'Monitor adoption', 'Gather feedback']
    }, {
      phase: 'Optimization',
      duration: '4 months',
      activities: ['Refine processes', 'Track metrics', 'Continuous improvement', 'Results measurement']
    }],
    testimonial: {
      quote: "The customer service improvements transformed our reputation. We're now getting positive reviews regularly, and our teams are more aligned than ever.",
      author: "Operations Team",
      role: "Community Management"
    }
  }, {
    id: 'flora-grand-opening',
    title: 'High Impact Grand Opening',
    category: 'Event Marketing',
    summary: 'Flora, a new luxury community in a prestigious north side Indianapolis suburb with little brand recognition, needed a launch event that would attract serious buyers, secure its place among competing new builds, showcase its walkable amenities, and jumpstart sales on a tight budget.',
    image: '🎉',
    duration: '4 weeks',
    budget: '$2,000',
    clientType: 'Luxury Community Developer',
    challenges: [{
      title: 'Large Attendance Goal',
      description: ' New upscale community with limited local contacts but a sizeable attendance goal'
    }, {
      title: 'Quiet Site',
      description: 'Low drive-by traffic and minimal brand visibility'
    }, {
      title: 'Vendor Budget',
      description: 'Deliver a polished launch experience for a luxury neighborhood on a low budget and a six-week planning window.'
    }],
    solutions: [{
      step: 1,
      title: 'Audience build and RSVP platform',
      description: 'Purchased a new list of top brokers and high-income renters, created a landing page with an optional RSVP form, and added channel-specific UTM parameters (email, social, print, and personal handoffs) to track attendance and RSVP sources from start to finish.',
      outcome: 'Logged 160 QR scans that fed the event landing page and captured contact data'
    }, {
      step: 2,
      title: 'Multi-channel outreach',
      description: 'Distributed printed QR-coded invites through local businesses, launched a three-email drip that drew 38% opens and an 18% click-through rate, synchronized social posts across our brand and vendor accounts, and equipped the sales team with personalized outreach kits for their VIP list.',
      outcome: 'Maximized local visibility within walking distance of the community'
    }, {
      step: 3,
      title: 'Community-themed activations',
      description: 'Booked a rooftop DJ, brought in a popular food truck, set up a make-your-own bouquet bar with a neighborhood florist, and handed out branded swag bags, all at favorable pricing with local partners that boosted community recognition, amplified event visibility, and opened doors for future collaborations.',
      outcome: 'Delivered full music, food, and interactive experiences while keeping total vendor spend under two thousand dollars'
    }, {
      step: 4,
      title: 'Media amplification',
      description: 'Developed press release frameworks and coordinated with our PR firm to secure impactful media coverage, including two local TV segments, a feature request from Indy Star, and additional press pickup. Executed a tag-to-win QR contest that drove over twenty attendee stories, videos, and posts across social channels.',
      outcome: 'Drew 123 attendees with 68 RSVPs, exceeding turnout goals and confirming strong walk-up interest'
    }],
    beforeAfter: [{
      metric: 'Brand Awareness',
      before: 'Unknown',
      after: 'TV coverage',
      improvement: 'Major visibility'
    }, {
      metric: 'Event Budget',
      before: '$2,000 cap',
      after: 'Under budget',
      improvement: 'Full experience'
    }, {
      metric: 'Lead Generation',
      before: '0 leads',
      after: '6 high-intent',
      improvement: '2 contracts'
    }],
    results: [{
      metric: 'Flora Grand Opening',
      value: '132 attendees',
      icon: Users,
      description: 'Drew 132 attendees with goal of 120'
    }, {
      metric: 'Scheduled Design Studio Follow-Up',
      value: '14 Hot Leads',
      icon: TrendingUp,
      description: 'Attendees who continued the sales process'
    }, {
      metric: 'Video Media Coverage',
      value: '2 TV stations',
      icon: BarChart3,
      description: 'Plus multiple written features'
    }, {
      metric: 'Contracts',
      value: '2 signed',
      icon: DollarSign,
      description: 'Signed within 30 days of the event'
    }],
    timeline: [{
      phase: 'Event Planning',
      duration: '1 week',
      activities: ['Landing page creation', 'QR code design', 'Vendor sourcing', 'Budget allocation']
    }, {
      phase: 'Local Outreach',
      duration: '2 weeks',
      activities: ['Venue partnerships', 'Invite distribution', 'Signage placement', 'Influencer outreach']
    }, {
      phase: 'Event Execution',
      duration: '1 day',
      activities: ['Setup and logistics', 'Vendor coordination', 'Guest welcome', 'Activity management']
    }, {
      phase: 'Follow-up',
      duration: '1 week',
      activities: ['Lead nurturing', 'Media relations', 'Contract negotiation', 'Results tracking']
    }],
    testimonial: {
      quote: "The Flora grand opening exceeded all expectations. The creative approach to community engagement on a tight budget was brilliant and generated real results.",
      author: "Flora Development Team",
      role: "Project Leadership"
    }
  }];
  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };
  return <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">Marketing That Moves the Needle</h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed mb-6">
            Deep dive into real campaigns that delivered exceptional results. 
            Each case study reveals the strategic thinking, creative execution, and measurable outcomes 
            that drive success in marketing.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
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
        }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-emerald-200">
              {/* Project Header */}
              <div className="p-8 cursor-pointer hover:bg-emerald-50 transition-colors duration-300" onClick={() => toggleProject(project.id)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-emerald-900">{project.title}</h3>
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full border border-emerald-200">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-lg text-emerald-700 leading-relaxed max-w-2xl mb-3">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                  <motion.div animate={{
                rotate: expandedProject === project.id ? 180 : 0
              }} transition={{
                duration: 0.3
              }} className="flex-shrink-0">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      {expandedProject === project.id ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5 text-emerald-600" />}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
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
            }} className="border-t border-emerald-200">
                    <div className="p-8 bg-emerald-50 space-y-10">
                      
                      {/* Challenges Section */}
                      <div>
                        <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-red-500" />
                          Key Challenges
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {project.challenges.map((challenge, idx) => <div key={idx} className="bg-red-50 rounded-xl p-4 border border-red-100">
                              <h5 className="font-semibold text-red-900 mb-2">{challenge.title}</h5>
                              <p className="text-red-700 text-sm leading-relaxed">{challenge.description}</p>
                            </div>)}
                        </div>
                      </div>

                      {/* Solutions Process */}
                      <div>
                        <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-emerald-500" />
                          Step-by-Step Solution Process
                        </h4>
                        <div className="space-y-4">
                          {project.solutions.map((solution, idx) => <div key={idx} className="flex items-start space-x-4">
                              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {solution.step}
                              </div>
                              <div className="flex-1">
                                <h5 className="text-lg font-semibold text-emerald-900 mb-2">{solution.title}</h5>
                                <p className="text-emerald-700 leading-relaxed">{solution.description}</p>
                              </div>
                            </div>)}
                        </div>
                      </div>


                      {/* Results & Impact */}
                      <div>
                        <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                          <BarChart3 className="w-5 h-5 mr-2 text-teal-500" />
                          Final Results & Impact
                        </h4>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                          {project.results.map((result, idx) => {
                      const IconComponent = result.icon;
                      return <div key={idx} className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-4 text-center border border-emerald-200">
                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                                  <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl font-bold text-emerald-900 mb-1">{result.value}</div>
                                <div className="text-sm font-medium text-emerald-700 mb-1">{result.metric}</div>
                                <div className="text-xs text-emerald-600 leading-relaxed">{result.description}</div>
                              </div>;
                    })}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div>
                      </div>


                    </div>
                  </motion.div>}
              </AnimatePresence>
            </motion.div>)}
        </div>

      </div>
    </section>;
};
export default ProjectsCaseStudiesSection;