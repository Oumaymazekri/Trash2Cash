import React from 'react';
import { Check, AlertCircle, Info } from 'lucide-react';
import { PlasticType } from '../types/types';
import { useTranslation } from 'react-i18next';

interface ResultsDisplayProps {
  isAnalyzing: boolean;
  result: PlasticType | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ isAnalyzing, result }) => {
  const { t } = useTranslation();

  if (!isAnalyzing && !result) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto mt-8 transition-all duration-500">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        {t('scan.analysis.result')}
      </h2>

      {isAnalyzing ? (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
          <p className="text-gray-600">{t('scan.analysis.inProgress')}</p>
        </div>
      ) : result ? (
        <div>
          <div className="flex items-center justify-center mb-4">
            <div className={`h-16 w-16 rounded-full flex items-center justify-center ${
              result.recyclable ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}>
              {result.recyclable ? (
                <Check className="h-8 w-8" />
              ) : (
                <AlertCircle className="h-8 w-8" />
              )}
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">{result.name}</h3>
            <p className="text-gray-600">{result.code}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-800">{t('scan.analysis.characteristics')}</h4>
                <p className="text-gray-600 text-sm mt-1">{result.description}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">{t('scan.analysis.estimatedPrice')}</h4>
              <p className="text-2xl font-bold text-green-600">{result.pricePerKg} DT/kg</p>
              <p className="text-gray-500 text-sm mt-1">{t('scan.analysis.priceNote')}</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">{t('scan.analysis.recommendation')}</h4>
              <p className="text-gray-700">{result.recyclingTips}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ResultsDisplay;