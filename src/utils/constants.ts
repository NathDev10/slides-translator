import type { Language, FileType } from '../types';

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'Anglais', flag: '🇺🇸' },
  { code: 'es', name: 'Espagnol', flag: '🇪🇸' },
  { code: 'de', name: 'Allemand', flag: '🇩🇪' },
  { code: 'it', name: 'Italien', flag: '🇮🇹' },
  { code: 'pt', name: 'Portugais', flag: '🇵🇹' },
  { code: 'ru', name: 'Russe', flag: '🇷🇺' },
  { code: 'zh', name: 'Chinois', flag: '🇨🇳' },
  { code: 'ja', name: 'Japonais', flag: '🇯🇵' },
  { code: 'ar', name: 'Arabe', flag: '🇸🇦' },
];

export const FILE_TYPES: { value: FileType; label: string; accept: string }[] = [
  { value: 'pptx', label: 'PowerPoint (.pptx)', accept: '.pptx' },
  { value: 'pdf', label: 'PDF (.pdf)', accept: '.pdf' },
  { value: 'odp', label: 'OpenDocument (.odp)', accept: '.odp' },
];

export const FILE_ENDPOINTS = {
  pptx: 'http://test/translate/pptx',
  pdf: 'http://test/translate/pdf',
  odp: 'http://test/translate/odp',
};

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
export const ACCEPTED_FILE_TYPES = [
  'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx
  'application/pdf', // .pdf
  'application/vnd.oasis.opendocument.presentation', // .odp
];
