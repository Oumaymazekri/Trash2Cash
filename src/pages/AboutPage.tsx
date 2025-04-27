import React from 'react';
import { Leaf, Recycle, Award, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          {t('about.title')}
        </h1>
        
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-gray-600 text-center text-xl mb-12">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">{t('about.mission.title')}</h2>
            </div>
            <p className="text-gray-600">
              {t('about.mission.description')}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Recycle className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">{t('about.impact.title')}</h2>
            </div>
            <p className="text-gray-600">
              {t('about.impact.description')}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {t('about.technology.title')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('about.technology.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Award className="h-5 w-5 text-amber-500" />
                <h3 className="font-bold text-gray-800">{t('about.technology.accuracy.title')}</h3>
              </div>
              <p className="text-gray-600 text-sm">
                {t('about.technology.accuracy.description')}
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-5 w-5 text-purple-500" />
                <h3 className="font-bold text-gray-800">{t('about.technology.community.title')}</h3>
              </div>
              <p className="text-gray-600 text-sm">
                {t('about.technology.community.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('about.cta.description')}
          </p>
          <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
            {t('about.cta.button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;