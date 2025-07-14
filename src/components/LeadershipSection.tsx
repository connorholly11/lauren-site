"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users } from 'lucide-react';
const LeadershipSection: React.FC = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-emerald-50">
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
                  <p className="text-emerald-700 leading-relaxed">Rolled out company-wide tools that saved $20,000 annually, leading workshops and meetings to guide adoption.</p>
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
        }}>
            <div className="w-full h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center border border-emerald-200" style={{
            background: "linear-gradient(90deg, oklch(0.95 0.052 163.051) 0%, oklch(0.953 0.051 180.801) 100%)"
          }}>
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full mx-auto flex items-center justify-center" style={{
                background: "linear-gradient(90deg, oklch(0.596 0.145 163.225) 0%, oklch(0.6 0.118 184.704) 100%)"
              }}>
                  <span className="text-3xl text-white">👥</span>
                </div>
                <p className="text-emerald-700 font-medium">Leadership in Action Photo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default LeadershipSection;