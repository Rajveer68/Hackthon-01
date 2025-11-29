import React from 'react';
import { ArrowUpRight, ArrowDownRight, Database, Brain, Code, Cloud } from 'lucide-react';

const SkillsPage = () => {
  const skills = [
    { name: "Artificial Intelligence", current: 12, required: 40, gap: -28, status: "Critical", icon: Brain },
    { name: "Data Engineering", current: 25, required: 30, gap: -5, status: "Moderate", icon: Database },
    { name: "React / Frontend", current: 50, required: 45, gap: +5, status: "Surplus", icon: Code },
    { name: "Cloud / AWS", current: 18, required: 25, gap: -7, status: "Moderate", icon: Cloud },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Skills Gap Forecast (2025)</h1>
        <p className="text-gray-400">Projected workforce capabilities vs. business needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-gray-800 p-3 rounded-xl">
                <skill.icon className="text-blue-400 w-6 h-6" />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                skill.gap < 0 ? 'bg-red-900/30 text-red-400' : 'bg-green-900/30 text-green-400'
              }`}>
                {skill.gap > 0 ? `+${skill.gap} Surplus` : `${skill.gap} Gap`}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-1">{skill.name}</h3>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Current</span>
                <span className="text-white font-mono">{skill.current}</span>
              </div>
              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                <div style={{ width: `${(skill.current / skill.required) * 100}%` }} className="bg-blue-600 h-full rounded-full"></div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>Target (2025)</span>
                <span className="text-white font-mono">{skill.required}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Action Plan */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-900 border border-gray-800 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>
        
        <h3 className="text-xl font-bold text-white mb-4">Recommended Strategy: "Upskill First"</h3>
        <p className="text-gray-400 max-w-2xl mb-6">
          Based on the analysis, hiring external AI talent will be 40% more expensive than upskilling your current "Data Engineering" team. Flash recommends launching an internal "AI Bootcamp" for 15 employees.
        </p>
        
        <button className="bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
          Generate Training Plan
        </button>
      </div>
    </div>
  );
};

export default SkillsPage;