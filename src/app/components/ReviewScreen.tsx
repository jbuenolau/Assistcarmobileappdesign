import { useState } from 'react';
import { Star, Send, CheckCircle } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ReviewScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function ReviewScreen({ onNavigate }: ReviewScreenProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const quickFeedback = [
    'Excelente servicio',
    'Muy profesional',
    'Rápido y eficiente',
    'Amable y educado',
    'Resolvió mi problema',
  ];

  const [selectedQuickFeedback, setSelectedQuickFeedback] = useState<string[]>([]);

  const handleQuickFeedbackToggle = (item: string) => {
    if (selectedQuickFeedback.includes(item)) {
      setSelectedQuickFeedback(selectedQuickFeedback.filter(i => i !== item));
    } else {
      setSelectedQuickFeedback([...selectedQuickFeedback, item]);
    }
  };

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
      setTimeout(() => {
        onNavigate('home');
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="h-full w-full bg-gradient-to-br from-green-500 to-teal-500 flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <div className="mb-6 flex items-center justify-center">
            <div className="bg-white p-8 rounded-full shadow-2xl animate-bounce">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-white text-3xl mb-4">¡Gracias por tu opinión!</h1>
          <p className="text-white/90 text-lg">
            Tu feedback nos ayuda a mejorar cada día
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-50 to-green-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 px-6 pt-14 pb-8">
        <button 
          onClick={() => onNavigate('home')}
          className="mb-6 p-2 bg-white/20 backdrop-blur-sm rounded-full"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h1 className="text-white text-2xl mb-1">Califica el servicio</h1>
        <p className="text-blue-100">Tu opinión es importante para nosotros</p>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Technician Info */}
        <div className="bg-white rounded-2xl p-5 shadow-md mb-6">
          <div className="flex items-start gap-4 mb-6">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1708745427274-d5de5122fd57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwcmVhc3N1cmluZyUyMHRlY2huaWNpYW4lMjBtZWNoYW5pY3xlbnwxfHx8fDE3NjYwMDE1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Luan Lau"
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-gray-800 mb-1">Luan Lau</h3>
              <p className="text-gray-600 text-sm">Cambio de llanta</p>
              <p className="text-gray-500 text-xs">17 de diciembre, 2025</p>
            </div>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <h2 className="text-gray-800 text-center mb-4">¿Cómo calificas el servicio?</h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <Star
                  className={`w-12 h-12 ${
                    star <= (hoveredRating || rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill={star <= (hoveredRating || rating) ? '#FACC15' : 'none'}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-center text-gray-600 mt-2">
              {rating === 5 && '¡Excelente!'}
              {rating === 4 && 'Muy bueno'}
              {rating === 3 && 'Bueno'}
              {rating === 2 && 'Regular'}
              {rating === 1 && 'Necesita mejorar'}
            </p>
          )}
        </div>

        {/* Quick Feedback */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <h2 className="text-gray-800 mb-3">¿Qué te gustó más?</h2>
          <div className="flex flex-wrap gap-2">
            {quickFeedback.map((item) => (
              <button
                key={item}
                onClick={() => handleQuickFeedbackToggle(item)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedQuickFeedback.includes(item)
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Written Feedback */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <h2 className="text-gray-800 mb-3">Cuéntanos más (opcional)</h2>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Escribe aquí tu experiencia..."
            className="w-full h-32 p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none resize-none"
            maxLength={500}
          />
          <p className="text-gray-400 text-xs mt-2">{feedback.length}/500 caracteres</p>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={rating === 0}
          className={`w-full py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 ${
            rating > 0
              ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:shadow-2xl transform hover:scale-105 active:scale-95'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Send className="w-5 h-5" />
          <span className="text-xl">Enviar evaluación</span>
        </button>

        {/* Skip Link */}
        <button 
          onClick={() => onNavigate('home')}
          className="w-full mt-4 text-gray-600 py-2 hover:underline"
        >
          Omitir por ahora
        </button>
      </div>
    </div>
  );
}