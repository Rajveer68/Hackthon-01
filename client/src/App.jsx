import React, { useState } from 'react';
import LandingPage from './Pages/LandingPage';
import AuthPage from './Pages/AuthPage';
import DashboardLayout from './Pages/DashboardLayout';
import DashboardHome from './Pages/DashboardHome';
import FairnessPage from './Pages/FairnessPage';
import SkillsPage from './Pages/SkillsPage';

function App() {
  // View State: 'landing' | 'auth' | 'dashboard'
  const [currentView, setCurrentView] = useState('landing');
  
  // Dashboard Tab State: 'overview' | 'fairness' | 'skills'
  const [activeTab, setActiveTab] = useState('overview');

  // --- NAVIGATION FUNCTIONS ---
  const navigateToAuth = () => setCurrentView('auth');
  const navigateToHome = () => setCurrentView('landing');
  const navigateToDashboard = () => setCurrentView('dashboard');
  
  const handleLogout = () => {
    setCurrentView('landing');
    setActiveTab('overview');
  };

  // --- RENDER LOGIC ---

  // 1. Show Landing Page
  if (currentView === 'landing') {
    return <LandingPage onNavigate={navigateToAuth} />;
  }

  // 2. Show Auth Page (Sign In / Sign Up)
  if (currentView === 'auth') {
    return (
      <AuthPage 
        onBack={navigateToHome} 
        onLoginSuccess={navigateToDashboard} 
      />
    );
  }

  // 3. Show Dashboard (Protected Area)
  return (
    <DashboardLayout 
      activeTab={activeTab} 
      onTabChange={setActiveTab} 
      onLogout={handleLogout}
    >
      {activeTab === 'overview' && <DashboardHome />}
      {activeTab === 'fairness' && <FairnessPage />}
      {activeTab === 'skills' && <SkillsPage />}
    </DashboardLayout>
  );
}

export default App;