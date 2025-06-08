import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import type { AuthState, User } from '../types';

interface StoredUser {
  id: string;
  email: string;
  password: string;
  name?: string;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name?: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  // Charger l'utilisateur depuis localStorage au démarrage
  useEffect(() => {
    const storedUser = localStorage.getItem('slidesTranslator_user');
    if (storedUser) {
      try {
        const user: User = JSON.parse(storedUser);
        setAuthState({
          user,
          isAuthenticated: true,
        });
      } catch (error) {
        console.error('Erreur lors du chargement des données utilisateur:', error);
        localStorage.removeItem('slidesTranslator_user');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulation d'une authentification
    // Dans un vrai projet, ici on ferait un appel API
    try {
      // Vérifier si l'utilisateur existe dans localStorage
      const existingUsers = JSON.parse(localStorage.getItem('slidesTranslator_users') || '[]');
      const user = existingUsers.find((u: StoredUser) => u.email === email && u.password === password);

      if (user) {
        const userData: User = {
          id: user.id,
          email: user.email,
          name: user.name,
        };

        setAuthState({
          user: userData,
          isAuthenticated: true,
        });

        localStorage.setItem('slidesTranslator_user', JSON.stringify(userData));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      return false;
    }
  };

  const register = async (email: string, password: string, name?: string): Promise<boolean> => {
    try {
      // Vérifier si l'utilisateur existe déjà
      const existingUsers = JSON.parse(localStorage.getItem('slidesTranslator_users') || '[]');
      const userExists = existingUsers.some((u: StoredUser) => u.email === email);

      if (userExists) {
        return false; // Utilisateur déjà existant
      }

      // Créer un nouvel utilisateur
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        password,
        name,
      };

      existingUsers.push(newUser);
      localStorage.setItem('slidesTranslator_users', JSON.stringify(existingUsers));

      // Connexion automatique
      const userData: User = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      };

      setAuthState({
        user: userData,
        isAuthenticated: true,
      });

      localStorage.setItem('slidesTranslator_user', JSON.stringify(userData));
      return true;
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      return false;
    }
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
    localStorage.removeItem('slidesTranslator_user');
  };

  const value = {
    ...authState,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
