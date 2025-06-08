import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { HomePage } from './components/HomePage';
import { AuthPage } from './components/AuthPage';
import { HistoryPage } from './components/HistoryPage';
import './index.css'
type Page = 'home' | 'auth' | 'history';
function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };
  const handleAuthSuccess = () => {
    setCurrentPage('home');
  };
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'auth':
        return <AuthPage onSuccess={handleAuthSuccess} />;
      case 'history':
        return <HistoryPage />;
      default:
        return <HomePage />;
    }
  };
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        {renderPage()}
      </div>
    </AuthProvider>
  );
}
export default App;