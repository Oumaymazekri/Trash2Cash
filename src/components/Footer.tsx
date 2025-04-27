import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Recycle className="h-6 w-6" />
              <span className="font-bold text-lg">EcoScan</span>
            </Link>
            <p className="text-gray-400 text-sm">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t('footer.links.home')}
                </Link>
              </li>
              <li>
                <Link to="/scan" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t('footer.links.scan')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t('footer.links.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t('footer.links.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.contactTitle')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">{t('footer.contact.email')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">{t('footer.contact.phone')}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">{t('footer.contact.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} EcoScan. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
