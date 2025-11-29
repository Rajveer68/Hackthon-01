import React from 'react';
import { 
  ArrowRight, Zap, BarChart3, ShieldCheck, Users, 
  BrainCircuit, TrendingUp, CheckCircle2, Lock, 
  Link
} from 'lucide-react';
import TopElement from '../Components/Globe';




const LandingPage = ({onGetStarted}) => {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* ----------------------------------------------------
          NAVBAR
      ----------------------------------------------------- */}
      <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300">
                <Zap className="h-5 w-5 text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Flash
              </span>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <button onClick={onGetStarted} className="px-5 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ----------------------------------------------------
          HERO SECTION
      ----------------------------------------------------- */}
      <TopElement></TopElement>
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">

        {/* Glowing Background Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-[100%] blur-[100px] -z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-700 text-blue-400 text-xs font-bold uppercase tracking-wide mb-8 hover:border-blue-500/50 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            AI-Powered Workforce Sustainability
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Build a Team That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-pulse">
              Lasts Forever.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop hiring for yesterday. Flash uses fair AI to detect skills gaps, 
            predict attrition, and eliminate bias—ensuring your workforce is future-ready.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button  onClick={onGetStarted} className="px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center gap-2 group">
              Start Analysis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 text-base font-bold text-white bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 hover:border-gray-500 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------
          MOVING CARDS (INFINITE SCROLL)
          Use the 'animate-scroll' class defined in index.css
      ----------------------------------------------------- */}
      <div className="w-full bg-black/50 border-y border-gray-800 py-8 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10" />
        
        <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused]">
          {/* Double the list for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex justify-around w-full shrink-0 items-center gap-12 px-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-bold flex items-center gap-2"><BrainCircuit /> NeuralHiring</span>
              <span className="text-xl font-bold flex items-center gap-2"><BarChart3 /> DataFlow</span>
              <span className="text-xl font-bold flex items-center gap-2"><ShieldCheck /> SecureTalent</span>
              <span className="text-xl font-bold flex items-center gap-2"><Users /> PeopleFirst</span>
              <span className="text-xl font-bold flex items-center gap-2"><TrendingUp /> GrowthAI</span>
              <span className="text-xl font-bold flex items-center gap-2"><Lock /> TrustForce</span>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------
          FEATURES GRID
      ----------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Intelligence beyond the resume.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our algorithms don't just read data; they understand potential. 
            See how Flash transforms raw HR data into strategic gold.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Bias Detection Engine</h3>
            <p className="text-gray-400 leading-relaxed">
              Automatically flag hiring patterns that show risk of disparate impact against gender or ethnicity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Skills Gap Forecasting</h3>
            <p className="text-gray-400 leading-relaxed">
              Predict which skills your company will lack in 12-24 months based on market trends and attrition.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-emerald-500/50 hover:bg-gray-900 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Sustainability Scoring</h3>
            <p className="text-gray-400 leading-relaxed">
              Get a single "Health Score" for every department to instantly identify burnout risks and turnover.
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------
          INTERACTIVE DASHBOARD PREVIEW
      ----------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="relative rounded-3xl bg-gray-900 border border-gray-800 p-4 md:p-12 overflow-hidden">
          
          {/* Background Gradient for Card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">See the invisible.</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Real-time Analytics</h4>
                    <p className="text-sm text-gray-400">Data updates instantly as you hire or promote.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Ethical AI Models</h4>
                    <p className="text-sm text-gray-400">Auditable algorithms that prioritize fairness.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Actionable Insights</h4>
                    <p className="text-sm text-gray-400">Don't just see the problem. Get the solution.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Fake Dashboard UI */}
            <div className="bg-gray-950 rounded-xl border border-gray-800 p-6 shadow-2xl relative transform md:rotate-2 hover:rotate-0 transition-all duration-500">
               {/* Dashboard Header */}
               <div className="flex justify-between items-center mb-6">
                 <div className="h-2 w-20 bg-gray-800 rounded"></div>
                 <div className="flex gap-2">
                   <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                   <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                   <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                 </div>
               </div>
               
               {/* Chart Bars */}
               <div className="flex items-end gap-2 h-32 mb-6">
                 <div className="w-1/5 bg-gray-800 h-[40%] rounded-t"></div>
                 <div className="w-1/5 bg-blue-900 h-[60%] rounded-t"></div>
                 <div className="w-1/5 bg-blue-700 h-[80%] rounded-t relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      +24%
                    </div>
                 </div>
                 <div className="w-1/5 bg-blue-500 h-[50%] rounded-t"></div>
                 <div className="w-1/5 bg-indigo-500 h-[70%] rounded-t"></div>
               </div>

               {/* Stats Row */}
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
                   <p className="text-xs text-gray-500">Attrition Risk</p>
                   <p className="text-lg font-bold text-white">Low</p>
                 </div>
                 <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
                   <p className="text-xs text-gray-500">Diversity Score</p>
                   <p className="text-lg font-bold text-green-400">92/100</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    
  );
};

export default LandingPage;