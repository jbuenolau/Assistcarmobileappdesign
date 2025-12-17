import { Star, Shield, Award, CheckCircle, Phone, MessageCircle, MapPin } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TechnicianProfileScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function TechnicianProfileScreen({ onNavigate }: TechnicianProfileScreenProps) {
  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-50 to-green-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 px-6 pt-14 pb-24 relative">
        <button 
          onClick={() => onNavigate('location')}
          className="mb-6 p-2 bg-white/20 backdrop-blur-sm rounded-full"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h1 className="text-white text-2xl mb-1">Perfil del Técnico</h1>
        <p className="text-blue-100">Especialista verificado</p>
      </div>

      {/* Profile Card */}
      <div className="px-6 -mt-16 pb-6">
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          {/* Technician Photo */}
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1708745427274-d5de5122fd57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwcmVhc3N1cmluZyUyMHRlY2huaWNpYW4lMjBtZWNoYW5pY3xlbnwxfHx8fDE3NjYwMDE1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luan Lau"
                className="w-20 h-20 rounded-2xl object-cover"
              />
              
              <div className="flex items-center justify-center bg-blue-100 w-12 h-12 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-xl text-gray-800 mb-1">Luan Lau</h2>
              <p className="text-gray-600 mb-2">Técnico Mecánico Senior</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400" fill="#FACC15" />
                  ))}
                </div>
                <span className="text-gray-700">4.9</span>
                <span className="text-gray-500">(127 reseñas)</span>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <Shield className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <p className="text-xs text-blue-800">Verificado</p>
            </div>
            <div className="bg-green-50 rounded-xl p-3 text-center">
              <Award className="w-6 h-6 text-green-600 mx-auto mb-1" />
              <p className="text-xs text-green-800">Calificado</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-3 text-center">
              <Star className="w-6 h-6 text-purple-600 mx-auto mb-1" />
              <p className="text-xs text-purple-800">Top Rated</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-4 mb-6">
            <h3 className="text-gray-800 mb-3">Certificaciones</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700 text-sm">Mecánica Automotriz Avanzada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700 text-sm">Sistemas Eléctricos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700 text-sm">Primeros Auxilios</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <p className="text-3xl text-blue-600 mb-1">850+</p>
              <p className="text-gray-600 text-sm">Servicios completados</p>
            </div>
            <div className="text-center">
              <p className="text-3xl text-green-600 mb-1">5 años</p>
              <p className="text-gray-600 text-sm">Experiencia</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Llamar a Carlos</span>
            </button>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>Mensaje</span>
              </button>
              <button 
                onClick={() => onNavigate('location')}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                <span>Ubicación</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}