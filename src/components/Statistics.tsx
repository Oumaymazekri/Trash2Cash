import React from 'react';
import { BarChart, LineChart, PieChart, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Statistics: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-5xl mx-auto mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {t('statistics.title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-green-600 font-bold text-3xl mb-1">120kg</div>
          <div className="text-gray-600 text-sm">{t('statistics.recycledPlastic')}</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-blue-600 font-bold text-3xl mb-1">240 DT</div>
          <div className="text-gray-600 text-sm">{t('statistics.generatedValue')}</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 text-center">
          <div className="text-purple-600 font-bold text-3xl mb-1">184kg</div>
          <div className="text-gray-600 text-sm">{t('statistics.co2Saved')}</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-4 text-center">
          <div className="text-amber-600 font-bold text-3xl mb-1">2.8k</div>
          <div className="text-gray-600 text-sm">{t('statistics.analysisPerformed')}</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">{t('statistics.distribution')}</h3>
            <PieChart className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-gray-400 text-sm">{t('statistics.distribution')}</div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">{t('statistics.evolution')}</h3>
            <LineChart className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-gray-400 text-sm">{t('statistics.evolution')}</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm mb-4">
          {t('statistics.impact')}
        </p>
        <a href="#" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
          {t('statistics.viewAll')}
          <TrendingUp className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default Statistics;