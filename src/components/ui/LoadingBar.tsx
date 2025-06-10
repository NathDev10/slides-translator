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
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-4">
        <div className="inline-flex items-center space-x-2">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent" />
          <span className="text-gray-700 font-medium">{message}</span>
        </div>
      </div>

      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white opacity-20 animate-pulse" />
          </div>
        </div>

        <div className="text-center mt-2 text-sm text-gray-600">
          {Math.round(progress)}%
        </div>
      </div>

      <div className="text-center mt-4 text-xs text-gray-500">
        {progress < 30 && "Analyse du fichier..."}
        {progress >= 30 && progress < 60 && "Extraction du contenu..."}
        {progress >= 60 && progress < 90 && "Traduction en cours..."}
        {progress >= 90 && "Finalisation..."}
      </div>
    </div>
  );
};
