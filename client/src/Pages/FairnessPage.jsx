import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FairnessPage = () => {
  // Mock Data for the chart
  const chartData = {
    labels: ['Junior', 'Mid-Level', 'Senior', 'Lead', 'Exec'],
    datasets: [
      {
        label: 'Male Promotion Rate',
        data: [12, 19, 15, 10, 5],
        backgroundColor: '#3b82f6', // blue-500
      },
      {
        label: 'Female Promotion Rate',
        data: [11, 18, 8, 4, 2], // Deliberately lower for Senior/Lead to show bias
        backgroundColor: '#ec4899', // pink-500
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: 'white' } },
    },
    scales: {
      y: { ticks: { color: '#9ca3af' }, grid: { color: '#374151' } },
      x: { ticks: { color: '#9ca3af' }, grid: { display: false } },
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
           <h1 className="text-3xl font-bold text-white">Fairness & Bias Audit</h1>
           <p className="text-gray-400">AI-driven disparate impact analysis.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium text-sm">
          Run New Audit
        </button>
      </div>

      {/* Main Analysis Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart */}
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-4">Promotion Rate by Gender</h3>
          <Bar data={chartData} options={options} />
        </div>

        {/* AI Insight Box */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex flex-col">
          <h3 className="text-lg font-bold text-white mb-4">🤖 AI Findings</h3>
          
          <div className="flex-1 bg-black/50 border border-gray-800 rounded-xl p-4 mb-4">
             <div className="flex items-center gap-2 mb-2 text-red-400 font-bold text-sm">
                <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                CRITICAL BIAS DETECTED
             </div>
             <p className="text-gray-300 text-sm leading-relaxed">
               The promotion rate for <strong>Females</strong> in Senior and Lead roles is <strong>45% lower</strong> than expected compared to the candidate pool.
             </p>
             <p className="text-gray-300 text-sm mt-3 leading-relaxed">
               <strong>Root Cause:</strong> "Leadership Potential" scores in performance reviews show a linguistic bias favouring masculine traits.
             </p>
          </div>

          <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-4">
             <h4 className="text-blue-400 font-bold text-sm mb-1">Recommendation</h4>
             <p className="text-gray-400 text-xs">
               Implement structured interview scorecards for Q3 promotion cycle to eliminate subjective criteria.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairnessPage;