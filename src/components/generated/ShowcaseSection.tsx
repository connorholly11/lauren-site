import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Target, Zap } from 'lucide-react';
interface WorkSample {
  id: number;
  title: string;
  category: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    icon: React.ComponentType<{
      className?: string;
    }>;
  }[];
  image: string;
  tags: string[];
}
const ShowcaseSection: React.FC = () => {
  const [selectedWork, setSelectedWork] = React.useState<number | null>(null);
  const workSamples: WorkSample[] = [{
    id: 1,
    title: "E-commerce Growth Campaign",
    category: "Digital Marketing",
    description: "Comprehensive digital marketing strategy that increased online sales by 250% through targeted social media campaigns, email marketing automation, and conversion optimization.",
    metrics: [{
      label: "Sales Increase",
      value: "250%",
      icon: TrendingUp
    }, {
      label: "New Customers",
      value: "15K+",
      icon: Users
    }, {
      label: "Conversion Rate",
      value: "8.5%",
      icon: Target
    }],
    image: "Campaign Thumbnail",
    tags: ["Social Media", "Email Marketing", "Analytics"]
  }, {
    id: 2,
    title: "Brand Awareness Initiative",
    category: "Brand Strategy",
    description: "Multi-channel brand awareness campaign that reached 2M+ people and increased brand recognition by 180% through strategic content marketing and influencer partnerships.",
    metrics: [{
      label: "Reach",
      value: "2M+",
      icon: Users
    }, {
      label: "Brand Lift",
      value: "180%",
      icon: TrendingUp
    }, {
      label: "Engagement",
      value: "12.3%",
      icon: Zap
    }],
    image: "Brand Campaign",
    tags: ["Content Marketing", "Influencer", "Branding"]
  }, {
    id: 3,
    title: "Lead Generation Funnel",
    category: "Performance Marketing",
    description: "Optimized lead generation funnel that reduced cost per acquisition by 60% while increasing qualified leads by 400% through strategic landing page optimization and targeted advertising.",
    metrics: [{
      label: "Lead Increase",
      value: "400%",
      icon: TrendingUp
    }, {
      label: "CPA Reduction",
      value: "60%",
      icon: Target
    }, {
      label: "Conversion Rate",
      value: "15.2%",
      icon: Zap
    }],
    image: "Funnel Analytics",
    tags: ["PPC", "Landing Pages", "Conversion Optimization"]
  }, {
    id: 4,
    title: "Product Launch Strategy",
    category: "Product Marketing",
    description: "End-to-end product launch strategy that generated $2M in pre-orders and achieved 95% of year-one sales targets within the first quarter through integrated marketing campaigns.",
    metrics: [{
      label: "Pre-orders",
      value: "$2M",
      icon: TrendingUp
    }, {
      label: "Target Achievement",
      value: "95%",
      icon: Target
    }, {
      label: "Market Share",
      value: "23%",
      icon: Users
    }],
    image: "Product Launch",
    tags: ["Product Launch", "PR", "Integrated Marketing"]
  }];
  return <section id="showcase" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-magicpath-id="0" data-magicpath-path="ShowcaseSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="ShowcaseSection.tsx">
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
      }} className="text-center mb-16" data-magicpath-id="2" data-magicpath-path="ShowcaseSection.tsx">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" data-magicpath-id="3" data-magicpath-path="ShowcaseSection.tsx">
            Featured Work
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto" data-magicpath-id="4" data-magicpath-path="ShowcaseSection.tsx">
            Explore some of my most impactful marketing campaigns and strategic initiatives
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8" data-magicpath-id="5" data-magicpath-path="ShowcaseSection.tsx">
          {workSamples.map((work, index) => <motion.div key={work.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="group cursor-pointer" onClick={() => setSelectedWork(selectedWork === work.id ? null : work.id)} data-magicpath-id="6" data-magicpath-path="ShowcaseSection.tsx">
              <div className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2" data-magicpath-id="7" data-magicpath-path="ShowcaseSection.tsx">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center" data-magicpath-id="8" data-magicpath-path="ShowcaseSection.tsx">
                  <span className="text-slate-600 font-medium" data-magicpath-id="9" data-magicpath-path="ShowcaseSection.tsx">{work.image}</span>
                </div>
                
                {/* Content */}
                <div className="p-6" data-magicpath-id="10" data-magicpath-path="ShowcaseSection.tsx">
                  <div className="flex items-center justify-between mb-3" data-magicpath-id="11" data-magicpath-path="ShowcaseSection.tsx">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full" data-magicpath-id="12" data-magicpath-path="ShowcaseSection.tsx">
                      {work.category}
                    </span>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" data-magicpath-id="13" data-magicpath-path="ShowcaseSection.tsx" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors" data-magicpath-id="14" data-magicpath-path="ShowcaseSection.tsx">
                    {work.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-2" data-magicpath-id="15" data-magicpath-path="ShowcaseSection.tsx">
                    {work.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4" data-magicpath-id="16" data-magicpath-path="ShowcaseSection.tsx">
                    {work.tags.map(tag => <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded" data-magicpath-id="17" data-magicpath-path="ShowcaseSection.tsx">
                        {tag}
                      </span>)}
                  </div>
                  
                  {/* Metrics Preview */}
                  <div className="grid grid-cols-3 gap-4" data-magicpath-id="18" data-magicpath-path="ShowcaseSection.tsx">
                    {work.metrics.map((metric, metricIndex) => <div key={metricIndex} className="text-center" data-magicpath-id="19" data-magicpath-path="ShowcaseSection.tsx">
                        <div className="flex items-center justify-center mb-1" data-magicpath-id="20" data-magicpath-path="ShowcaseSection.tsx">
                          <metric.icon className="w-4 h-4 text-blue-600" data-magicpath-id="21" data-magicpath-path="ShowcaseSection.tsx" />
                        </div>
                        <div className="text-lg font-bold text-slate-900" data-magicpath-id="22" data-magicpath-path="ShowcaseSection.tsx">{metric.value}</div>
                        <div className="text-xs text-slate-500" data-magicpath-id="23" data-magicpath-path="ShowcaseSection.tsx">{metric.label}</div>
                      </div>)}
                  </div>
                </div>
              </div>
              
              {/* Expanded Details */}
              {selectedWork === work.id && <motion.div initial={{
            opacity: 0,
            height: 0
          }} animate={{
            opacity: 1,
            height: 'auto'
          }} exit={{
            opacity: 0,
            height: 0
          }} transition={{
            duration: 0.3
          }} className="mt-4 bg-white border border-slate-200 rounded-xl p-6 shadow-lg" data-magicpath-id="24" data-magicpath-path="ShowcaseSection.tsx">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3" data-magicpath-id="25" data-magicpath-path="ShowcaseSection.tsx">
                    Campaign Details
                  </h4>
                  <p className="text-slate-600 mb-4" data-magicpath-id="26" data-magicpath-path="ShowcaseSection.tsx">
                    {work.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-4" data-magicpath-id="27" data-magicpath-path="ShowcaseSection.tsx">
                    {work.metrics.map((metric, metricIndex) => <div key={metricIndex} className="bg-slate-50 rounded-lg p-4 text-center" data-magicpath-id="28" data-magicpath-path="ShowcaseSection.tsx">
                        <div className="flex items-center justify-center mb-2" data-magicpath-id="29" data-magicpath-path="ShowcaseSection.tsx">
                          <metric.icon className="w-6 h-6 text-blue-600" data-magicpath-id="30" data-magicpath-path="ShowcaseSection.tsx" />
                        </div>
                        <div className="text-2xl font-bold text-slate-900 mb-1" data-magicpath-id="31" data-magicpath-path="ShowcaseSection.tsx">
                          {metric.value}
                        </div>
                        <div className="text-sm text-slate-600" data-magicpath-id="32" data-magicpath-path="ShowcaseSection.tsx">{metric.label}</div>
                      </div>)}
                  </div>
                  
                  <div className="mt-4 flex justify-end" data-magicpath-id="33" data-magicpath-path="ShowcaseSection.tsx">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm" data-magicpath-id="34" data-magicpath-path="ShowcaseSection.tsx">
                      View Full Case Study →
                    </button>
                  </div>
                </motion.div>}
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default ShowcaseSection;