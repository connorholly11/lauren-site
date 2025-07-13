"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users } from 'lucide-react';
const LeadershipSection: React.FC = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-emerald-50" data-magicpath-id="0" data-magicpath-path="LeadershipSection.tsx">
      <div className="max-w-6xl mx-auto" data-magicpath-id="1" data-magicpath-path="LeadershipSection.tsx">
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
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-6" data-magicpath-id="3" data-magicpath-path="LeadershipSection.tsx" style={{
          fontSize: "2.25rem"
        }}>Lead By Going The Extra 1%</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto" data-magicpath-id="4" data-magicpath-path="LeadershipSection.tsx"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="5" data-magicpath-path="LeadershipSection.tsx">
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
        }} className="space-y-8" data-magicpath-id="6" data-magicpath-path="LeadershipSection.tsx">
            <div className="space-y-6" data-magicpath-id="7" data-magicpath-path="LeadershipSection.tsx">
              <div className="flex items-center space-x-4" data-magicpath-id="8" data-magicpath-path="LeadershipSection.tsx">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center" data-magicpath-id="9" data-magicpath-path="LeadershipSection.tsx">
                  <Award className="w-6 h-6 text-white" data-magicpath-id="10" data-magicpath-path="LeadershipSection.tsx" />
                </div>
                <div data-magicpath-id="11" data-magicpath-path="LeadershipSection.tsx">
                  <h3 className="text-xl font-bold text-emerald-900" data-magicpath-id="12" data-magicpath-path="LeadershipSection.tsx">Voted "Cream of the Crop" in Culture</h3>
                  <p className="text-emerald-700" data-magicpath-id="13" data-magicpath-path="LeadershipSection.tsx">Recognized across the company for consistently going above and beyond, with standout contributions to team culture and cross-department collaboration.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-magicpath-id="14" data-magicpath-path="LeadershipSection.tsx">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center" data-magicpath-id="15" data-magicpath-path="LeadershipSection.tsx">
                  <TrendingUp className="w-6 h-6 text-white" data-magicpath-id="16" data-magicpath-path="LeadershipSection.tsx" />
                </div>
                <div data-magicpath-id="17" data-magicpath-path="LeadershipSection.tsx">
                  <h3 className="text-xl font-bold text-emerald-900" data-magicpath-id="18" data-magicpath-path="LeadershipSection.tsx">AI Integration Leader</h3>
                  <p className="text-emerald-700" data-magicpath-id="19" data-magicpath-path="LeadershipSection.tsx">Rolled out company-wide tools that saved $20,000 annually, leading workshops and meetings to guide adoption.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-magicpath-id="20" data-magicpath-path="LeadershipSection.tsx">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center" data-magicpath-id="21" data-magicpath-path="LeadershipSection.tsx">
                  <Users className="w-6 h-6 text-white" data-magicpath-id="22" data-magicpath-path="LeadershipSection.tsx" />
                </div>
                <div data-magicpath-id="23" data-magicpath-path="LeadershipSection.tsx">
                  <h3 className="text-xl font-bold text-emerald-900" data-magicpath-id="24" data-magicpath-path="LeadershipSection.tsx">Driven by Curiosity</h3>
                  <p className="text-emerald-700" data-magicpath-id="25" data-magicpath-path="LeadershipSection.tsx">Focused on growth through hands-on learning. Built this entire site using AI, customizing every piece without writing a single line of code.</p>
                </div>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-emerald-600 pl-6 italic text-lg text-emerald-700" data-magicpath-id="26" data-magicpath-path="LeadershipSection.tsx">"I appreciate Lauren's willingness to jump in and help whenever and wherever asked. She ask's the right questions and always gets things done quickly with a purpose!" - J.P VP Leadership</blockquote>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} data-magicpath-id="27" data-magicpath-path="LeadershipSection.tsx">
            <div className="w-full h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center border border-emerald-200" data-magicpath-id="28" data-magicpath-path="LeadershipSection.tsx" style={{
            background: "linear-gradient(90deg, oklch(0.95 0.052 163.051) 0%, oklch(0.953 0.051 180.801) 100%)"
          }}>
              <div className="text-center space-y-4" data-magicpath-id="29" data-magicpath-path="LeadershipSection.tsx">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full mx-auto flex items-center justify-center" data-magicpath-id="30" data-magicpath-path="LeadershipSection.tsx" style={{
                background: "linear-gradient(90deg, oklch(0.596 0.145 163.225) 0%, oklch(0.6 0.118 184.704) 100%)"
              }}>
                  <span className="text-3xl text-white" data-magicpath-id="31" data-magicpath-path="LeadershipSection.tsx">👥</span>
                </div>
                <p className="text-emerald-700 font-medium" data-magicpath-id="32" data-magicpath-path="LeadershipSection.tsx">Leadership in Action Photo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default LeadershipSection;