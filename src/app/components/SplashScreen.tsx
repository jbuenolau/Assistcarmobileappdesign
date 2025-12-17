import { useEffect, useState } from 'react';
import logoImg from 'figma:asset/ab66da3a022c4eee1e55eb5f9a9c69628803ba42.png';

interface SplashScreenProps {
  onContinue: () => void;
}

export function SplashScreen({ onContinue }: SplashScreenProps) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleLogin = () => {
    // Simulate login flow - in production this would navigate to login screen
    onContinue();
  };

  const handleRegister = () => {
    // Simulate register flow - in production this would navigate to register screen
    onContinue();
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-500 via-teal-500 to-green-400 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      
      {/* Logo and Content - Centered */}
      <div className={`transition-all duration-1000 ${fadeIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} z-10 flex-1 flex flex-col items-center justify-center`}>
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <img src={logoImg} alt="AssistCar Logo" className="w-64 h-auto drop-shadow-2xl" />
        </div>
        
        {/* Tagline */}
        <p className="text-white/95 text-xl text-center px-4 max-w-md mb-4">
          Menos estrés en emergencias vehiculares
        </p>
        <p className="text-white/80 text-center px-4">
          Asistencia las 24 horas, los 7 días de la semana
        </p>
      </div>
      
      {/* Auth Buttons */}
      <div className={`w-full max-w-sm space-y-4 z-10 transition-all duration-1000 delay-300 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} pb-8`}>
        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-white text-blue-600 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95"
        >
          <span className="text-lg">Iniciar sesión</span>
        </button>
        
        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-white/10 backdrop-blur-sm text-white py-4 rounded-2xl border-2 border-white/40 hover:bg-white/20 transition-all transform hover:scale-105 active:scale-95"
        >
          <span className="text-lg">Registrarse</span>
        </button>
        
        {/* Guest Access */}
        <button
          onClick={onContinue}
          className="w-full text-white/80 py-3 hover:text-white transition-colors"
        >
          <span className="underline">Continuar como invitado</span>
        </button>
      </div>
    </div>
  );
}