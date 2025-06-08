import type React from 'react';
import { useEffect, useState } from 'react';
interface LoadingBarProps {
  isLoading: boolean;
  message?: string;
  onComplete?: () => void;
}
export const LoadingBar: React.FC<LoadingBarProps> = ({
  isLoading,
  message = "Traduction en cours...",
  onComplete
}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!isLoading) {
      setProgress(0);
      return;
    }
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        // Simulation d'un chargement réaliste
        if (prev < 30) return prev + Math.random() * 3;
        if (prev < 60) return prev + Math.random() * 2;
        if (prev < 90) return prev + Math.random() * 1;
        return prev + Math.random() * 0.5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isLoading, onComplete]);
  if (!isLoading) return null;
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-lg">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-3"></div>
          <span className="text-sm font-medium text-blue-800">{message}</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
      <div className="mt-2 text-center">
        <span className="text-xs text-gray-500">
          {Math.round(progress)}% complété
        </span>
      </div>
    </div>
  );
};