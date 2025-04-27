import React from 'react';
import { Upload, Search, BarChart, Recycle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HowItWorksProps {
  onStart?: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onStart }) => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('scan.upload.dragDrop'),
      description: t('scan.subtitle'),
      icon: Upload,
      color: 'bg-blue-500'
    },
    {
      title: t('scan.analysis.inProgress'),
      description: t('scan.analysis.characteristics'),
      icon: Search,
      color: 'bg-purple-500'
    },
    {
      title: t('scan.analysis.result'),
      description: t('scan.analysis.estimatedPrice'),
      icon: BarChart,
      color: 'bg-amber-500'
    },
    {
      title: t('plasticTypes.recyclingTips'),
      description: t('plasticTypes.recyclable'),
      icon: Recycle,
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          {t('about.technology.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className={`${step.color} h-16 w-16 rounded-full flex items-center justify-center text-white`}>
                  <step.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={onStart}
            className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105 duration-200"
          >
            {t('hero.startButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;