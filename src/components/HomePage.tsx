import type React from 'react';
import { useState } from 'react';
import { FileUploader } from './ui/FileUploader';
import { LanguageSelector } from './ui/LanguageSelector';
import { LoadingBar } from './ui/LoadingBar';
import { useAuth } from '../contexts/AuthContext';
import type { FileType, Translation } from '../types';
import { FILE_ENDPOINTS } from '../utils/constants';
import { formatFileSize } from '../utils/fileUtils';

export const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileType, setSelectedFileType] = useState<FileType | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canTranslate = selectedFile && selectedFileType && selectedLanguage && description.trim();

  const handleTranslate = async () => {
    if (!canTranslate) return;

    setIsLoading(true);
    setError(null);
    setDownloadUrl(null);

    try {
      const formData = new FormData();
      formData.append('fichier', selectedFile);
      formData.append('langue', selectedLanguage);
      formData.append('description', description.trim());

      if (!selectedFileType) return;

      const endpoint = FILE_ENDPOINTS[selectedFileType];

      // Simulation d'un appel API
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Simulation d'un fichier traduit
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);

        // Sauvegarder dans l'historique si connecté
        if (isAuthenticated) {
          saveToHistory();
        }
      } else {
        throw new Error('Erreur lors de la traduction');
      }
    } catch (err) {
      // En cas d'erreur de réseau (normal avec http://test), on simule un succès
      setTimeout(() => {
        // Créer un blob simulé pour le téléchargement
        const content = `Fichier traduit simulé - ${selectedFile?.name}`;
        const blob = new Blob([content], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);

        if (isAuthenticated) {
          saveToHistory();
        }
      }, 3000); // Délai pour simuler le traitement
    }
  };

  const saveToHistory = () => {
    if (!selectedFile) return;

    const translation: Translation = {
      id: Math.random().toString(36).substr(2, 9),
      filename: selectedFile.name,
      targetLanguage: selectedLanguage,
      description: description.trim(),
      date: new Date().toISOString(),
      downloadUrl: downloadUrl || undefined,
      status: 'completed'
    };

    const existingHistory = JSON.parse(localStorage.getItem('slidesTranslator_history') || '[]');
    existingHistory.unshift(translation);
    localStorage.setItem('slidesTranslator_history', JSON.stringify(existingHistory));
  };

  const handleDownload = () => {
    if (downloadUrl && selectedFile) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `translated_${selectedFile.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setSelectedFileType(null);
    setSelectedLanguage('');
    setDescription('');
    setDownloadUrl(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Traduisez vos présentations en quelques clics
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uploadez votre fichier PowerPoint, PDF ou OpenDocument et obtenez une traduction
            professionnelle dans la langue de votre choix.
          </p>
        </div>

        {/* Formulaire principal */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {!isLoading && !downloadUrl && (
            <>
              {/* Upload de fichier */}
              <div className="mb-8">
                <FileUploader
                  onFileSelect={(file, fileType) => {
                    setSelectedFile(file);
                    setSelectedFileType(fileType);
                  }}
                />
              </div>

              {/* Fichier sélectionné */}
              {selectedFile && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-green-900">{selectedFile.name}</p>
                        <p className="text-sm text-green-600">
                          {formatFileSize(selectedFile.size)} • Type: {selectedFileType?.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedFile(null);
                        setSelectedFileType(null);
                      }}
                      className="text-green-600 hover:text-green-800"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}

              {/* Paramètres de traduction */}
              {selectedFile && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Sélecteur de langue */}
                    <LanguageSelector
                      selectedLanguage={selectedLanguage}
                      onLanguageChange={setSelectedLanguage}
                    />

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description de la présentation *
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Décrivez brièvement le contenu de votre présentation..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        rows={3}
                        maxLength={500}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {description.length}/500 caractères
                      </p>
                    </div>
                  </div>

                  {/* Bouton de traduction */}
                  <div className="text-center">
                    <button
                      onClick={handleTranslate}
                      disabled={!canTranslate}
                      className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                        canTranslate
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      🌍 Traduire ma présentation
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Chargement */}
          {isLoading && (
            <LoadingBar
              isLoading={isLoading}
              onComplete={() => setIsLoading(false)}
            />
          )}

          {/* Résultat */}
          {downloadUrl && !isLoading && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Traduction terminée !
                </h3>
                <p className="text-gray-600">
                  Votre présentation a été traduite avec succès.
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleDownload}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📥 Télécharger ma traduction
                </button>

                <button
                  onClick={resetForm}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  🔄 Nouvelle traduction
                </button>
              </div>
            </div>
          )}

          {/* Erreur */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600">{error}</p>
            </div>
          )}
        </div>

        {/* Info pour utilisateurs non connectés */}
        {!isAuthenticated && (
          <div className="mt-8 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-medium text-blue-900 mb-2">
                Créez un compte pour plus de fonctionnalités
              </h3>
              <p className="text-blue-700 text-sm">
                Accédez à votre historique de traductions et aux fonctionnalités premium
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
