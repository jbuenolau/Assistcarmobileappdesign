import { Bell, Wrench, Calendar, Lightbulb, Heart, ChevronRight } from 'lucide-react';
import { Screen } from '../App';

interface NotificationsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function NotificationsScreen({ onNavigate }: NotificationsScreenProps) {
  const notifications = [
    {
      id: 1,
      type: 'maintenance',
      icon: Wrench,
      title: 'Mantenimiento de aceite',
      message: 'Tu vehículo necesita cambio de aceite en 2 semanas',
      time: 'Hace 2 horas',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      id: 2,
      type: 'reminder',
      icon: Calendar,
      title: 'Revisión de frenos',
      message: 'Recuerda revisar tus frenos este mes',
      time: 'Hace 1 día',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      id: 3,
      type: 'tip',
      icon: Lightbulb,
      title: 'Tip para reducir estrés',
      message: 'Mantén un kit de emergencia en tu vehículo: linterna, agua, cables de batería',
      time: 'Hace 2 días',
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
    },
    {
      id: 4,
      type: 'wellness',
      icon: Heart,
      title: 'Respira y relájate',
      message: 'Si te sientes ansioso mientras conduces, toma pausas cada 2 horas',
      time: 'Hace 3 días',
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
    },
  ];

  const preventiveTips = [
    {
      icon: '🔋',
      title: 'Batería saludable',
      description: 'Revisa tu batería cada 6 meses',
    },
    {
      icon: '🛞',
      title: 'Presión de llantas',
      description: 'Verifica la presión semanalmente',
    },
    {
      icon: '🧰',
      title: 'Kit de emergencia',
      description: 'Mantén herramientas básicas en el auto',
    },
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-50 to-green-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 px-6 pt-14 pb-8">
        <button 
          onClick={() => onNavigate('home')}
          className="mb-6 p-2 bg-white/20 backdrop-blur-sm rounded-full"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
            <Bell className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-white text-2xl mb-1">Notificaciones</h1>
            <p className="text-blue-100">Mantente informado</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Notifications List */}
        <div className="mb-8">
          <h2 className="text-gray-700 mb-4">Recientes</h2>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className={`${notification.bgColor} p-3 rounded-xl`}>
                    <notification.icon className={`w-5 h-5 ${notification.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-gray-800">{notification.title}</h3>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                    <p className="text-gray-400 text-xs">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preventive Tips Section */}
        <div className="mb-6">
          <h2 className="text-gray-700 mb-4">Tips preventivos</h2>
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <div className="space-y-4">
              {preventiveTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-2xl">{tip.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 mb-1">{tip.title}</h3>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stress Reduction Tips */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="w-6 h-6" />
            <h3 className="text-lg">Tips para reducir estrés</h3>
          </div>
          <ul className="space-y-2 text-sm text-white/90">
            <li>• Mantén la calma en situaciones inesperadas</li>
            <li>• Respira profundo antes de tomar decisiones</li>
            <li>• Ten siempre AssistCar a la mano</li>
            <li>• Planifica tus viajes con anticipación</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
