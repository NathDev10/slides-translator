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
      } catch {
        // Si erreur de parsing, nettoyer le localStorage
        localStorage.removeItem('slidesTranslator_user');
      }
    }
  }, []);
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Récupérer les utilisateurs stockés
    const users = JSON.parse(localStorage.getItem('slidesTranslator_users') || '[]') as StoredUser[];
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      const authUser: User = {
        id: user.id,
        email: user.email,
        name: user.name,
      };
      setAuthState({
        user: authUser,
        isAuthenticated: true,
      });
      localStorage.setItem('slidesTranslator_user', JSON.stringify(authUser));
      return true;
    }
    return false;
  };
  const register = async (email: string, password: string, name?: string): Promise<boolean> => {
    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Récupérer les utilisateurs existants
    const users = JSON.parse(localStorage.getItem('slidesTranslator_users') || '[]') as StoredUser[];
    // Vérifier si l'email existe déjà
    if (users.some((u) => u.email === email)) {
      return false;
    }
    // Créer un nouvel utilisateur
    const newStoredUser: StoredUser = {
      id: crypto.randomUUID(),
      email,
      password,
      name,
    };
    users.push(newStoredUser);
    localStorage.setItem('slidesTranslator_users', JSON.stringify(users));
    // Connecter automatiquement l'utilisateur
    const authUser: User = {
      id: newStoredUser.id,
      email: newStoredUser.email,
      name: newStoredUser.name,
    };
    setAuthState({
      user: authUser,
      isAuthenticated: true,
    });
    localStorage.setItem('slidesTranslator_user', JSON.stringify(authUser));
    return true;
  };
  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
    localStorage.removeItem('slidesTranslator_user');
  };
  const value: AuthContextType = {
    ...authState,
    login,
    register,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};