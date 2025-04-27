import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo agrandi */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Trash2Cash" className="h-20 w-auto" /> {/* Logo plus grand */}
        </Link>

        {/* Menu centré */}
        <nav className="flex flex-1 justify-center">
          <ul className="flex space-x-12">
            <li>
              <Link
                to="/"
                className={`text-green-600 hover:text-green-800 transition-colors ${
                  location.pathname === '/' ? 'font-bold' : ''
                }`}
              >
                {t('header.home')}
              </Link>
            </li>
            <li>
              <Link
                to="/scan"
                className={`text-green-600 hover:text-green-800 transition-colors ${
                  location.pathname === '/scan' ? 'font-bold' : ''
                }`}
              >
                {t('header.scan')}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-green-600 hover:text-green-800 transition-colors ${
                  location.pathname === '/about' ? 'font-bold' : ''
                }`}
              >
                {t('header.about')}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`text-green-600 hover:text-green-800 transition-colors ${
                  location.pathname === '/contact' ? 'font-bold' : ''
                }`}
              >
                {t('header.contact')}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Partie droite */}
        <div className="flex items-center gap-6">
          {/* Zone login/register */}
          <div className="flex items-center gap-3 border-l pl-6 border-green-400">
            <Link
              to="/login"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <LogIn className="h-4 w-4" />
              <span>{t('header.login')}</span>
            </Link>
            <Link
              to="/register"
              className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {t('header.register')}
            </Link>
          </div>
        </div>

        {/* Bouton langue très à droite */}
        <button
          onClick={toggleLanguage}
          className="ml-6 px-2 py-1 text-green-600 border border-green-600 rounded hover:bg-green-50 transition-colors text-sm"
        >
          {i18n.language === 'fr' ? 'EN' : 'FR'}
        </button>
      </div>
    </header>
  );
};

export default Header;
