import type React from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  currentPage: 'home' | 'auth' | 'history';
  onNavigate: (page: 'home' | 'auth' | 'history') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              📊 SlidesTranslator
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Accueil
            </button>

            {isAuthenticated && (
              <button
                onClick={() => onNavigate('history')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'history'
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Historique
              </button>
            )}
          </nav>

          {/* Actions utilisateur */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700 hidden sm:block">
                  Bonjour, {user?.name || user?.email}
                </span>
                <button
                  onClick={logout}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <button
                onClick={() => onNavigate('auth')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Se connecter
              </button>
            )}
          </div>
        </div>

        {/* Navigation mobile */}
        <div className="md:hidden border-t border-gray-200 pt-2 pb-3">
          <div className="flex space-x-6">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              Accueil
            </button>

            {isAuthenticated && (
              <button
                onClick={() => onNavigate('history')}
                className={`text-sm font-medium ${
                  currentPage === 'history' ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                Historique
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
