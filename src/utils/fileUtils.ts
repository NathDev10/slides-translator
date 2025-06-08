import type { FileType } from '../types';
import { MAX_FILE_SIZE, ACCEPTED_FILE_TYPES } from './constants';
export const validateFile = (file: File, selectedType: FileType): { isValid: boolean; error?: string } => {
  // Vérifier la taille
  if (file.size > MAX_FILE_SIZE) {
    return {
      isValid: false,
      error: `Le fichier est trop volumineux. Taille maximum: ${Math.round(MAX_FILE_SIZE / 1024 / 1024)}MB`,
    };
  }
  // Vérifier le type MIME
  if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
    return {
      isValid: false,
      error: 'Type de fichier non supporté. Utilisez .pptx, .pdf ou .odp',
    };
  }
  // Vérifier que l'extension correspond au type sélectionné
  const extension = file.name.split('.').pop()?.toLowerCase();
  if (extension !== selectedType) {
    return {
      isValid: false,
      error: `L'extension du fichier (${extension}) ne correspond pas au type sélectionné (${selectedType})`,
    };
  }
  return { isValid: true };
};
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};