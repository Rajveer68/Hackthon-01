import React from 'react';
import { Users, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

// You would typically import charts here, using dummy divs for speed
const DashboardHome = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Executive Overview</h1>
        <p className="text-gray-400">Real-time workforce sustainability metrics.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Workforce', val: '1,240', change: '+12%', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
          { label: 'Sustainability Score', val: '88/100', change: '+4.2', icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          { label: 'Attrition Risk', val: 'High', change: 'Eng Dept', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/10' },
          { label: 'Skills Coverage', val: '92%', change: '-2% vs Target', icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        ].map((stat, i) => (
          <div key={i} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-gray-700 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.bg} p-3 rounded-xl`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.val === 'High' ? 'bg-red-900/30 text-red-400' : 'bg-gray-800 text-gray-300'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold text-white mt-1">{stat.val}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Big Chart Area */}
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Hiring vs. Attrition Trends</h3>
          {/* CSS-only Mock Chart for Speed */}
          <div className="h-64 flex items-end justify-between gap-2 px-4 pb-4 border-b border-gray-800">
            {[40, 60, 45, 70, 50, 80, 65, 90, 75, 55, 85, 95].map((h, i) => (
              <div key={i} className="w-full bg-gray-800 rounded-t-md relative group">
                <div 
                  style={{ height: `${h}%` }} 
                  className="bg-gradient-to-t from-blue-900 to-blue-600 w-full rounded-t-md absolute bottom-0 transition-all duration-500 group-hover:bg-blue-500"
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
            <span>Jan</span><span>Dec</span>
          </div>
        </div>

        {/* Recent AI Alerts */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">⚠️ AI Priority Alerts</h3>
          <div className="space-y-4">
            {[
              { msg: "Detected gender bias in 'Senior Dev' promotions.", time: "2h ago", severity: "high" },
              { msg: "Python skills shortage projected for Q3.", time: "5h ago", severity: "med" },
              { msg: "Marketing Dept burnout risk increased.", time: "1d ago", severity: "med" },
            ].map((alert, i) => (
              <div key={i} className="p-4 bg-black border border-gray-800 rounded-xl flex gap-3 hover:border-gray-600 transition-colors cursor-pointer">
                <div className={`h-2 w-2 mt-2 rounded-full shrink-0 ${alert.severity === 'high' ? 'bg-red-500 shadow-[0_0_10px_red]' : 'bg-yellow-500'}`} />
                <div>
                  <p className="text-sm text-gray-200 leading-tight">{alert.msg}</p>
                  <p className="text-xs text-gray-500 mt-2">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardHome;