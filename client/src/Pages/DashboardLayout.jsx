import React, { useState } from 'react';
import { 
  LayoutDashboard, Scale, Zap, TrendingUp, LogOut, 
  Menu, Bell, User, Search 
} from 'lucide-react';

const DashboardLayout = ({ children, activeTab, onTabChange, onLogout }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'fairness', label: 'Fairness AI', icon: Scale },
    { id: 'skills', label: 'Skills Forecast', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex font-sans selection:bg-blue-600">
      
      {/* SIDEBAR */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gray-950 border-r border-gray-800 transition-all duration-300 flex flex-col fixed h-full z-20`}>
        {/* Logo */}
        <div className="h-20 flex items-center justify-center border-b border-gray-800">
          <div className="flex items-center gap-2">
             <div className="bg-blue-600 p-1.5 rounded-lg">
                <Zap className="h-5 w-5 text-white" fill="currentColor" />
              </div>
            {isSidebarOpen && <span className="font-bold text-xl tracking-tight">Flash</span>}
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 py-6 px-3 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'text-gray-400 hover:bg-gray-900 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {isSidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-900/20 rounded-xl transition-all"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        
        {/* Top Header */}
        <header className="h-20 bg-black/50 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-8 sticky top-0 z-10">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-400 hover:text-white">
            <Menu />
          </button>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
               <input 
                 type="text" 
                 placeholder="Search employees..." 
                 className="bg-gray-900 border border-gray-800 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500"
               />
            </div>
            <button className="relative text-gray-400 hover:text-white">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-8 w-8 bg-linear-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-xs">
              AD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto bg-black">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;