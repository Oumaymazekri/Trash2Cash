import React from 'react';
import { plasticTypesData } from '../data/plasticData';
import { useTranslation } from 'react-i18next';

const PlasticTypesInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-5xl mx-auto mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {t('plasticTypes.title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plasticTypesData.map((type) => (
          <div 
            key={type.code} 
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className={`h-2 ${type.recyclable ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg text-gray-800">{type.name}</h3>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm font-medium">
                  {type.code}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-3">{type.description}</p>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{t('plasticTypes.recyclable')}:</span>
                  <span className={type.recyclable ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                    {type.recyclable ? t('plasticTypes.recyclable') : t('plasticTypes.notRecyclable')}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('plasticTypes.pricePerKg')}:</span>
                  <span className="font-medium">{type.pricePerKg} DT/kg</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlasticTypesInfo;