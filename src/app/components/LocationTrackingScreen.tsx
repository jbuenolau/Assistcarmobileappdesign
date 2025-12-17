import { MapPin, Phone, MessageCircle, Navigation, Clock } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LocationTrackingScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function LocationTrackingScreen({ onNavigate }: LocationTrackingScreenProps) {
  return (
    <div className="h-full w-full bg-gray-50 flex flex-col relative">
      {/* Map View */}
      <div className="h-2/3 relative bg-gradient-to-br from-blue-100 to-green-100">
        {/* Map placeholder with overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1760726347898-cd3daa2d5bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW1hJTIwcGVydSUyMGNpdHklMjBzdHJlZXRzfGVufDF8fHx8MTc2NjAwMTU1NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mapa de Lima"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        {/* Location pins */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-blue-600 p-3 rounded-full shadow-lg">
              <MapPin className="w-6 h-6 text-white" fill="white" />
            </div>
          </div>
          <p className="text-xs mt-2 bg-white px-2 py-1 rounded-full shadow-md text-center">
            Tu ubicación
          </p>
        </div>

        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
          <div className="relative">
            <div className="absolute -inset-3 bg-green-400 rounded-full animate-pulse opacity-75"></div>
            <div className="relative bg-green-600 p-3 rounded-full shadow-lg">
              <Navigation className="w-6 h-6 text-white" fill="white" />
            </div>
          </div>
          <p className="text-xs mt-2 bg-white px-2 py-1 rounded-full shadow-md whitespace-nowrap">
            Técnico
          </p>
        </div>

        {/* Back button */}
        <button 
          onClick={() => onNavigate('home')}
          className="absolute top-12 left-4 bg-white p-3 rounded-full shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Status Card */}
      <div className="flex-1 bg-white rounded-t-3xl -mt-8 relative shadow-2xl">
        <div className="px-6 py-6">
          {/* Status Indicator */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700">En camino</span>
            </div>
          </div>

          {/* Main Status */}
          <div className="text-center mb-6">
            <h2 className="text-2xl text-gray-800 mb-2">Técnico en camino</h2>
            <p className="text-gray-600">Carlos está llegando a tu ubicación</p>
          </div>

          {/* ETA */}
          <div className="bg-blue-50 rounded-2xl p-4 mb-6 flex items-center justify-center gap-3">
            <Clock className="w-6 h-6 text-blue-600" />
            <div>
              <p className="text-gray-600 text-sm">Tiempo estimado de llegada</p>
              <p className="text-2xl text-blue-600">8 minutos</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => onNavigate('technician')}
              className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Llamar</span>
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Mensaje</span>
            </button>
          </div>

          {/* View Technician Profile */}
          <button 
            onClick={() => onNavigate('technician')}
            className="w-full mt-4 text-blue-600 py-2 hover:underline"
          >
            Ver perfil del técnico
          </button>
        </div>
      </div>
    </div>
  );
}
