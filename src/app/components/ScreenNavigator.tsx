import { Screen } from '../App';

interface ScreenNavigatorProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function ScreenNavigator({ currentScreen, onNavigate }: ScreenNavigatorProps) {
  const screens: { id: Screen; label: string }[] = [
    { id: 'splash', label: 'Splash' },
    { id: 'home', label: 'Home' },
    { id: 'service', label: 'Service' },
    { id: 'calm', label: 'Calm' },
    { id: 'location', label: 'Location' },
    { id: 'technician', label: 'Technician' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'review', label: 'Review' },
  ];

  return (
    <div className="fixed bottom-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl text-xs max-w-xs border border-gray-200">
      <p className="mb-3 text-gray-600">
        <span className="text-blue-600">Current:</span> <strong>{currentScreen}</strong>
      </p>
      <div className="grid grid-cols-4 gap-2">
        {screens.map(screen => (
          <button
            key={screen.id}
            onClick={() => onNavigate(screen.id)}
            className={`px-3 py-2 rounded-lg text-xs transition-all ${
              currentScreen === screen.id
                ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {screen.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-gray-500 text-xs text-center">
        👆 Navegación para presentación
      </p>
    </div>
  );
}
