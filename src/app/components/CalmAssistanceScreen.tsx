import { useEffect, useState } from 'react';
import { Heart, CheckCircle, Clock } from 'lucide-react';
import { Screen } from '../App';

interface CalmAssistanceScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function CalmAssistanceScreen({ onNavigate }: CalmAssistanceScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const calmMessages = [
    { text: 'Respira, ya te estamos ayudando', icon: Heart },
    { text: 'Ubicando el técnico más cercano...', icon: Clock },
    { text: 'Encontramos a tu técnico', icon: CheckCircle },
    { text: 'Confirmando servicio...', icon: CheckCircle },
  ];

  useEffect(() => {
    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onNavigate('location');
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // Message rotation
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % calmMessages.length);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onNavigate]);

  const CurrentIcon = calmMessages[currentMessage].icon;

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-500 via-teal-500 to-green-400 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Icon */}
        <div className="mb-8 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse"></div>
            <div className="relative bg-white p-8 rounded-full shadow-2xl">
              <CurrentIcon className="w-16 h-16 text-blue-600 animate-pulse" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Calming Message */}
        <div className="mb-12 min-h-[80px]">
          <h1 className="text-white text-3xl mb-4 transition-all duration-500">
            {calmMessages[currentMessage].text}
          </h1>
          <p className="text-white/90 text-lg">
            Estamos contigo en cada paso
          </p>
        </div>

        {/* Progress Circle */}
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto">
            {/* Background circle */}
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="8"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="white"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 56}`}
                strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-200"
              />
            </svg>
            {/* Percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>

        {/* Breathing Guide */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm mx-auto">
          <p className="text-white/90 text-sm mb-2">💆‍♂️ Mientras esperas</p>
          <p className="text-white">
            Respira profundo: Inhala (4s) → Sostén (4s) → Exhala (4s)
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {[0, 1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-2 rounded-full transition-all duration-300 ${
                step <= currentMessage ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Skip button */}
      <button 
        onClick={() => onNavigate('location')}
        className="absolute bottom-8 text-white/80 hover:text-white transition-colors underline"
      >
        Saltar
      </button>
    </div>
  );
}
