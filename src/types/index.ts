export interface User {
  id: string;
  email: string;
  name?: string;
}
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
export type FileType = 'pptx' | 'pdf' | 'odp';
export interface FileUpload {
  file: File;
  type: FileType;
}
export interface TranslationRequest {
  file: File;
  language: string;
  description: string;
  fileType: FileType;
}
export interface Translation {
  id: string;
  filename: string;
  originalLanguage?: string;
  targetLanguage: string;
  description: string;
  date: string;
  downloadUrl?: string;
  status: 'pending' | 'completed' | 'error';
  userId?: string;
}
export interface Language {
  code: string;
  name: string;
  flag: string;
}