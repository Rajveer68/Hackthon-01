import React, { useState } from 'react';
import { 
  Mail, Lock, User, Building, ArrowRight, Zap, Eye, EyeOff 
} from 'lucide-react';

const AuthPage = ({ onBack }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Toggle Card Side
  const toggleCard = () => setIsFlipped(!isFlipped);

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* ----------------------------------------------------
          BACKGROUND DECORATION (Consistent with Landing)
      ----------------------------------------------------- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] -z-10" />

      {/* ----------------------------------------------------
          LOGO (Top Left)
      ----------------------------------------------------- */}
      <div className="absolute top-8 left-8 flex items-center gap-2">
        <button 
        onClick={onBack} 
        className="absolute top-8 left-8 flex items-center gap-2 hover:opacity-80 transition-opacity z-50"
        ></button>
        <div className="bg-blue-600 p-1.5 rounded-lg">
          <Zap className="h-5 w-5 text-white" fill="currentColor" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">Flash</span>
      </div>

      {/* ----------------------------------------------------
          THE FLIP CARD CONTAINER
      ----------------------------------------------------- */}
      <div className="w-full max-w-md h-[600px] perspective-1000">
        
        <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* ====================================================
              FRONT SIDE: SIGN IN
          ===================================================== */}
          <div className="absolute w-full h-full backface-hidden">
            <div className="h-full bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col justify-center">
              
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-gray-400">Enter your credentials to access the dashboard.</p>
              </div>

              <form className="space-y-5">
                {/* Email Input */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      type="email" 
                      placeholder="you@company.com"
                      className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••"
                      className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl py-3 pl-10 pr-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                      {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <a href="#" className="text-sm text-blue-400 hover:text-blue-300">Forgot Password?</a>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all transform active:scale-95">
                  Sign In
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-400">
                  Don't have an account?{' '}
                  <button onClick={toggleCard} className="text-blue-400 font-semibold hover:underline cursor-pointer">
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* ====================================================
              BACK SIDE: SIGN UP
          ===================================================== */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="h-full bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col justify-center">
              
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                <p className="text-gray-400 text-sm">Join Flash to build a sustainable workforce.</p>
              </div>

              <form className="space-y-4">
                
                {/* Full Name */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Company Name */}
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <input 
                    type="text" 
                    placeholder="Company Name"
                    className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <input 
                    type="email" 
                    placeholder="Work Email"
                    className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <input 
                    type="password" 
                    placeholder="Create Password"
                    className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all transform active:scale-95 flex items-center justify-center gap-2 mt-2">
                  Get Started <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Already have an account?{' '}
                  <button onClick={toggleCard} className="text-blue-400 font-semibold hover:underline cursor-pointer">
                    Sign In
                  </button>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthPage;