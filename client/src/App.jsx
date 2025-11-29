import React, { useState } from 'react';
import LandingPage from './Pages/LandingPage'; // Make sure filename matches
import AuthPage from './Pages/AuthPage';       // Make sure filename matches

function App() {
  // State to toggle between pages: 'landing' or 'auth'
  const [currentView, setCurrentView] = useState('landing');

  // Function to switch to Auth Page
  const handleGetStarted = () => {
    setCurrentView('auth');
  };

  // Function to go back (Optional, helpful for UX)
  const handleBackToHome = () => {
    setCurrentView('landing');
  };

  return (
    <div>
      {currentView === 'landing' ? (
        // Pass the function down to LandingPage
        
        <LandingPage onGetStarted={handleGetStarted} />
      ) : (
        // Pass the function down to AuthPage
        <AuthPage onBack={handleBackToHome} />
      )}
    </div>
  );
}

export default App;
