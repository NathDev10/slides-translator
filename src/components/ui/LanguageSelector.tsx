import type React from 'react';
import { useState } from 'react';
import { SUPPORTED_LANGUAGES } from '../../utils/constants';
import type { Language } from '../../types';
interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (languageCode: string) => void;
  disabled?: boolean;
}
export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLang = SUPPORTED_LANGUAGES.find(lang => lang.code === selectedLanguage);
  const handleSelect = (languageCode: string) => {
    onLanguageChange(languageCode);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Langue cible
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`w-full flex items-center justify-between px-4 py-3 border rounded-lg text-left transition-colors ${
            disabled
              ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          }`}
        >
          <div className="flex items-center">
            {selectedLang ? (
              <>
                <span className="text-xl mr-3">{selectedLang.flag}</span>
                <span className="text-gray-900">{selectedLang.name}</span>
              </>
            ) : (
              <span className="text-gray-500">Sélectionnez une langue</span>
            )}
          </div>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && !disabled && (
          <>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
              {SUPPORTED_LANGUAGES.map((language: Language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => handleSelect(language.code)}
                  className={`w-full flex items-center px-4 py-3 text-left hover:bg-blue-50 transition-colors ${
                    selectedLanguage === language.code
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-900'
                  }`}
                >
                  <span className="text-xl mr-3">{language.flag}</span>
                  <span>{language.name}</span>
                  {selectedLanguage === language.code && (
                    <svg
                      className="w-5 h-5 text-blue-600 ml-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};