import type React from 'react';
import { useCallback, useState } from 'react';
import type { FileType } from '../../types';
import { FILE_TYPES } from '../../utils/constants';
import { validateFile, formatFileSize, getFileTypeFromExtension } from '../../utils/fileUtils';

interface FileUploaderProps {
  onFileSelect: (file: File, fileType: FileType) => void;
  disabled?: boolean;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  onFileSelect,
  disabled = false
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback((file: File) => {
    setError(null);

    // Déterminer automatiquement le type de fichier
    const fileType = getFileTypeFromExtension(file.name);
    if (!fileType) {
      setError('Type de fichier non supporté. Utilisez .pptx, .pdf ou .odp');
      return;
    }

    const validation = validateFile(file, fileType);
    if (!validation.isValid) {
      setError(validation.error || 'Fichier invalide');
      return;
    }

    onFileSelect(file, fileType);
  }, [onFileSelect]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    if (disabled) return;

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile, disabled]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  return (
    <div className="w-full max-w-2xl mx-auto">

      {/* Zone de drag & drop */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
          isDragOver
            ? 'border-blue-400 bg-blue-50'
            : 'border-gray-300 bg-gray-50 hover:border-gray-400'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <input
          type="file"
          accept=".pptx,.pdf,.odp"
          onChange={handleFileInput}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        <div className="space-y-4">
          {/* Icône */}
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          {/* Texte principal */}
          <div>
            <p className="text-lg font-medium text-gray-900 mb-2">
              {isDragOver
                ? 'Déposez votre fichier ici'
                : 'Téléchargez votre présentation'}
            </p>
            <p className="text-sm text-gray-600">
              Glissez-déposez ou{' '}
              <span className="text-blue-600 font-medium">cliquez pour parcourir</span>
            </p>
          </div>

          {/* Informations sur les types de fichiers */}
          <div className="text-xs text-gray-500">
            <p>Formats supportés: PowerPoint (.pptx), PDF (.pdf), OpenDocument (.odp)</p>
            <p>Taille maximum: 50MB</p>
          </div>
        </div>
      </div>

      {/* Erreur */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
};
