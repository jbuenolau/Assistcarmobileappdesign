import { Car, Battery, Wrench, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { Screen } from '../App';

interface ServiceDetailsScreenProps {
  selectedService: string;
  onNavigate: (screen: Screen) => void;
}

export function ServiceDetailsScreen({ selectedService, onNavigate }: ServiceDetailsScreenProps) {
  const serviceDetails = {
    'flat-tire': {
      icon: Car,
      title: 'Cambio de llanta',
      description: 'Nuestro técnico cambiará tu llanta pinchada por la de repuesto de forma segura.',
      price: 'S/ 80',
      duration: '15-20 min',
      color: 'from-blue-500 to-blue-600',
    },
    'battery': {
      icon: Battery,
      title: 'Servicio de batería',
      description: 'Arranque con cables o reemplazo de batería descargada.',
      price: 'S/ 60',
      duration: '10-15 min',
      color: 'from-green-500 to-green-600',
    },
    'tow': {
      icon: Wrench,
      title: 'Servicio de grúa',
      description: 'Remolque seguro de tu vehículo hasta el taller o destino que elijas.',
      price: 'Desde S/ 150',
      duration: '30-45 min',
      color: 'from-teal-500 to-teal-600',
    },
    'emergency': {
      icon: MapPin,
      title: 'Asistencia de emergencia',
      description: 'Técnico especializado llegará a tu ubicación para evaluar y resolver la emergencia.',
      price: 'Desde S/ 100',
      duration: '15-30 min',
      color: 'from-orange-500 to-orange-600',
    },
  };

  const service = serviceDetails[selectedService as keyof typeof serviceDetails] || serviceDetails.emergency;
  const ServiceIcon = service.icon;

  const handleConfirm = () => {
    onNavigate('calm');
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-50 to-green-50 overflow-y-auto">
      {/* Header */}
      <div className={`bg-gradient-to-r ${service.color} px-6 pt-14 pb-24 relative`}>
        <button 
          onClick={() => onNavigate('home')}
          className="mb-6 p-2 bg-white/20 backdrop-blur-sm rounded-full"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
            <ServiceIcon className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-white text-2xl mb-1">{service.title}</h1>
            <p className="text-white/90">Detalles del servicio</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-16 pb-6">
        {/* Service Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          {/* Description */}
          <div className="mb-6">
            <h2 className="text-gray-800 mb-2">Descripción</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-2xl p-4">
              <p className="text-gray-600 text-sm mb-1">Precio</p>
              <p className="text-2xl text-blue-600">{service.price}</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-4">
              <p className="text-gray-600 text-sm mb-1">Duración</p>
              <p className="text-2xl text-green-600">{service.duration}</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-6">
            <h3 className="text-gray-800 mb-3">¿Qué incluye?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Técnico verificado y calificado</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Herramientas profesionales</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Seguimiento en tiempo real</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Garantía del servicio</p>
              </div>
            </div>
          </div>

          {/* Transparent Pricing Notice */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-4 border border-teal-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-teal-900 mb-1">Sin costos ocultos</p>
                <p className="text-teal-700 text-sm">
                  El precio mostrado es el precio final. No hay cargos adicionales sorpresa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button 
          onClick={handleConfirm}
          className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95"
        >
          <span className="text-xl">Confirmar servicio</span>
        </button>

        {/* Cancel Link */}
        <button 
          onClick={() => onNavigate('home')}
          className="w-full mt-4 text-gray-600 py-2 hover:underline"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
