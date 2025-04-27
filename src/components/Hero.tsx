import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onStart?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const { t } = useTranslation();

  return (
    <div 
      className="relative min-h-[600px] flex items-center text-white"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/85 to-blue-900/80"></div>
      
      <div className="container relative mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-green-100 drop-shadow">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={onStart}
            className="bg-white text-green-700 font-bold py-3 px-6 rounded-lg hover:bg-green-100 transition-all transform hover:scale-105 duration-200 shadow-lg"
          >
            {t('hero.startButton')}
          </button>
          <button className="bg-green-700/30 backdrop-blur-sm border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white/20 transition-all">
            {t('hero.learnMore')}
          </button>
        </div>
        <div className="animate-bounce inline-block drop-shadow-lg">
          <ArrowDown className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;