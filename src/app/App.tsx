import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { HomeScreen } from './components/HomeScreen';
import { LocationTrackingScreen } from './components/LocationTrackingScreen';
import { TechnicianProfileScreen } from './components/TechnicianProfileScreen';
import { ServiceDetailsScreen } from './components/ServiceDetailsScreen';
import { CalmAssistanceScreen } from './components/CalmAssistanceScreen';
import { NotificationsScreen } from './components/NotificationsScreen';
import { ReviewScreen } from './components/ReviewScreen';
import { ScreenNavigator } from './components/ScreenNavigator';

export type Screen = 
  | 'splash' 
  | 'home' 
  | 'location' 
  | 'technician' 
  | 'service' 
  | 'calm' 
  | 'notifications' 
  | 'review';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedService, setSelectedService] = useState<string>('');

  const handleNavigate = (screen: Screen, service?: string) => {
    if (service) setSelectedService(service);
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '812px' }}>
        {currentScreen === 'splash' && <SplashScreen onContinue={() => handleNavigate('home')} />}
        {currentScreen === 'home' && <HomeScreen onNavigate={handleNavigate} />}
        {currentScreen === 'location' && <LocationTrackingScreen onNavigate={handleNavigate} />}
        {currentScreen === 'technician' && <TechnicianProfileScreen onNavigate={handleNavigate} />}
        {currentScreen === 'service' && <ServiceDetailsScreen selectedService={selectedService} onNavigate={handleNavigate} />}
        {currentScreen === 'calm' && <CalmAssistanceScreen onNavigate={handleNavigate} />}
        {currentScreen === 'notifications' && <NotificationsScreen onNavigate={handleNavigate} />}
        {currentScreen === 'review' && <ReviewScreen onNavigate={handleNavigate} />}
      </div>
      
      {/* Screen Navigation Helper */}
      <ScreenNavigator currentScreen={currentScreen} onNavigate={handleNavigate} />
    </div>
  );
}