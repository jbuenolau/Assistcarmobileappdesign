import { Car, Battery, Wrench, MapPin, Bell, User } from 'lucide-react';
import { Screen } from '../App';

interface HomeScreenProps {
  onNavigate: (screen: Screen, service?: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const services = [
    { id: 'flat-tire', icon: Car, label: 'Llanta pinchada', color: 'bg-blue-500' },
    { id: 'battery', icon: Battery, label: 'Batería', color: 'bg-green-500' },
    { id: 'tow', icon: Wrench, label: 'Grúa', color: 'bg-teal-500' },
    { id: 'emergency', icon: MapPin, label: 'Emergencia', color: 'bg-orange-500' },
  ];

  const handleEmergency = () => {
    onNavigate('service', 'emergency');
  };

  const handleServiceClick = (serviceId: string) => {
    onNavigate('service', serviceId);
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-50 to-green-50 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-14 pb-6 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl text-gray-800 mb-1">Hola 👋</h1>
            <p className="text-gray-600">¿Necesitas ayuda?</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => onNavigate('notifications')}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Bell className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <User className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8 overflow-y-auto">
        {/* Emergency CTA */}
        <button
          onClick={handleEmergency}
          className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 mb-8"
        >
          <div className="flex items-center justify-center mb-3">
            <Car className="w-12 h-12" strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl mb-2">Pedir ayuda ahora</h2>
          <p className="text-blue-100">Asistencia en menos de 30 segundos</p>
        </button>

        {/* Services Grid */}
        <div className="mb-6">
          <h3 className="text-gray-700 mb-4">¿Qué necesitas?</h3>
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
              >
                <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-3 mx-auto`}>
                  <service.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <p className="text-gray-700 text-center">{service.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Safety Message */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-5 border border-teal-200">
          <p className="text-teal-800 text-center">
            🛡️ Todos nuestros técnicos están verificados y calificados
          </p>
        </div>
      </div>
    </div>
  );
}
