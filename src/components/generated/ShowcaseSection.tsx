import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Target, Zap, Mail, Printer, Settings, Search, Database, Image } from 'lucide-react';
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
  gallery?: string[];
}
const ShowcaseSection: React.FC = () => {
  const [selectedWork, setSelectedWork] = React.useState<number | null>(null);
  const [showGallery, setShowGallery] = React.useState<boolean>(false);
  const workSamples: WorkSample[] = [{
    id: 1,
    title: "Email Marketing",
    category: "Digital Communications",
    description: "Comprehensive email marketing campaigns driving customer engagement and conversion through strategic automation, segmentation, and personalized content delivery.",
    metrics: [{
      label: "Open Rate",
      value: "45.2%",
      icon: Mail
    }, {
      label: "Click Rate",
      value: "12.8%",
      icon: Target
    }, {
      label: "Revenue Generated",
      value: "$2.4M",
      icon: TrendingUp
    }],
    image: "Email Campaign Preview",
    tags: ["Automation", "Segmentation", "A/B Testing"],
    gallery: ["Email Template 1", "Email Template 2", "Analytics Dashboard", "Campaign Results"]
  }, {
    id: 2,
    title: "Print Marketing",
    category: "Traditional Media",
    description: "Strategic print marketing materials including brochures, direct mail campaigns, and promotional materials that bridge digital and physical brand experiences.",
    metrics: [{
      label: "Response Rate",
      value: "8.5%",
      icon: Printer
    }, {
      label: "Brand Recall",
      value: "67%",
      icon: Users
    }, {
      label: "Cost Efficiency",
      value: "35%",
      icon: Target
    }],
    image: "Print Materials",
    tags: ["Direct Mail", "Brochures", "Brand Collateral"],
    gallery: ["Brochure Design", "Direct Mail Piece", "Business Cards", "Trade Show Materials"]
  }, {
    id: 3,
    title: "Vendor Management",
    category: "Operations",
    description: "End-to-end vendor relationship management including procurement, performance monitoring, and strategic partnerships that optimize costs and quality.",
    metrics: [{
      label: "Cost Savings",
      value: "28%",
      icon: TrendingUp
    }, {
      label: "Vendor Satisfaction",
      value: "94%",
      icon: Users
    }, {
      label: "Process Efficiency",
      value: "42%",
      icon: Settings
    }],
    image: "Vendor Dashboard",
    tags: ["Procurement", "Performance", "Partnerships"],
    gallery: ["Vendor Scorecard", "Contract Management", "Performance Metrics", "Partnership Overview"]
  }, {
    id: 4,
    title: "SEO Strategy",
    category: "Digital Marketing",
    description: "Comprehensive search engine optimization strategy including technical SEO, content optimization, and link building to improve organic visibility and traffic.",
    metrics: [{
      label: "Organic Traffic",
      value: "185%",
      icon: TrendingUp
    }, {
      label: "Keyword Rankings",
      value: "320+",
      icon: Search
    }, {
      label: "Domain Authority",
      value: "78",
      icon: Target
    }],
    image: "SEO Analytics",
    tags: ["Technical SEO", "Content", "Link Building"],
    gallery: ["Keyword Research", "Technical Audit", "Content Strategy", "Ranking Reports"]
  }, {
    id: 5,
    title: "CMS Management",
    category: "Technology",
    description: "Content management system optimization and maintenance ensuring seamless content delivery, user experience, and technical performance across platforms.",
    metrics: [{
      label: "Page Load Speed",
      value: "2.1s",
      icon: Zap
    }, {
      label: "Uptime",
      value: "99.9%",
      icon: Database
    }, {
      label: "User Satisfaction",
      value: "92%",
      icon: Users
    }],
    image: "CMS Dashboard",
    tags: ["WordPress", "Performance", "Security"],
    gallery: ["Admin Interface", "Performance Metrics", "Security Reports", "Content Workflow"]
  }, {
    id: 6,
    title: "Brand Strategy",
    category: "Creative Direction",
    description: "Comprehensive brand strategy development including visual identity, messaging framework, and brand positioning to create cohesive and impactful brand experiences.",
    metrics: [{
      label: "Brand Recognition",
      value: "73%",
      icon: Target
    }, {
      label: "Engagement Rate",
      value: "34.5%",
      icon: Users
    }, {
      label: "Market Share",
      value: "18%",
      icon: TrendingUp
    }],
    image: "Brand Guidelines",
    tags: ["Identity", "Positioning", "Guidelines"],
    gallery: ["Logo Design", "Color Palette", "Typography", "Brand Applications"]
  }];
  return <section id="showcase" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" style={{
    display: "none"
  }}>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore my comprehensive bodies of work across different marketing disciplines and operational areas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
        }} className="group cursor-pointer" onClick={() => setSelectedWork(selectedWork === work.id ? null : work.id)}>
              <div className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm"></div>
                  <div className="relative z-10 text-center">
                    <Image className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                    <span className="text-slate-600 font-medium text-sm">Upload Image</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {work.category}
                    </span>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {work.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {work.description.substring(0, 120)}...
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map(tag => <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {tag}
                      </span>)}
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
          }} className="mt-4 bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-slate-900">
                      {work.title} Details
                    </h4>
                    <button onClick={e => {
                e.stopPropagation();
                setShowGallery(!showGallery);
              }} className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2" style={{
                display: "none"
              }}>
                      <Image className="w-4 h-4" />
                      View Gallery
                    </button>
                  </div>
                  
                  <p className="text-slate-600 mb-6">
                    {work.description}
                  </p>

                  {/* Gallery Section */}
                  {showGallery && work.gallery && <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                      <h5 className="font-medium text-slate-900 mb-3">Project Gallery</h5>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {work.gallery.map((item, idx) => <div key={idx} className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <Image className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                              <span className="text-xs text-slate-500">{item}</span>
                            </div>
                          </div>)}
                      </div>
                    </div>}
                  
                  {/* Analytics/Insights */}
                  <div className="mb-4">
                    <h5 className="font-medium text-slate-900 mb-3">Key Insights & Analytics</h5>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {work.metrics.map((metric, metricIndex) => <div key={metricIndex} className="bg-slate-50 rounded-lg p-4 text-center">
                          <div className="flex items-center justify-center mb-2">
                            <metric.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="text-2xl font-bold text-slate-900 mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-slate-600">
                            {metric.label}
                          </div>
                        </div>)}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button onClick={e => {
                e.stopPropagation();
                setSelectedWork(null);
              }} className="text-slate-500 hover:text-slate-700 font-medium text-sm">
                      ← Close Details
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm" style={{
                display: "none"
              }}>
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