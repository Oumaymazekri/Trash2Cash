import { PlasticType } from '../types/types';
import i18n from '../i18n';

const getTranslatedData = (): PlasticType[] => {
  const t = i18n.t;

  return [
    {
      code: 'PET / #1',
      name: t('plasticTypes.pet.name'),
      description: t('plasticTypes.pet.description'),
      recyclable: true,
      pricePerKg: 0.90,
      recyclingTips: t('plasticTypes.pet.tips')
    },
    {
      code: 'HDPE / #2',
      name: t('plasticTypes.hdpe.name'),
      description: t('plasticTypes.hdpe.description'),
      recyclable: true,
      pricePerKg: 0.75,
      recyclingTips: t('plasticTypes.hdpe.tips')
    },
    {
      code: 'PVC / #3',
      name: t('plasticTypes.pvc.name'),
      description: t('plasticTypes.pvc.description'),
      recyclable: false,
      pricePerKg: 0.30,
      recyclingTips: t('plasticTypes.pvc.tips')
    },
    {
      code: 'LDPE / #4',
      name: t('plasticTypes.ldpe.name'),
      description: t('plasticTypes.ldpe.description'),
      recyclable: false,
      pricePerKg: 0.45,
      recyclingTips: t('plasticTypes.ldpe.tips')
    },
    {
      code: 'PP / #5',
      name: t('plasticTypes.pp.name'),
      description: t('plasticTypes.pp.description'),
      recyclable: true,
      pricePerKg: 0.60,
      recyclingTips: t('plasticTypes.pp.tips')
    },
    {
      code: 'PS / #6',
      name: t('plasticTypes.ps.name'),
      description: t('plasticTypes.ps.description'),
      recyclable: false,
      pricePerKg: 0.15,
      recyclingTips: t('plasticTypes.ps.tips')
    },
    {
      code: 'OTHER / #7',
      name: t('plasticTypes.other.name'),
      description: t('plasticTypes.other.description'),
      recyclable: false,
      pricePerKg: 0.06,
      recyclingTips: t('plasticTypes.other.tips')
    }
  ];
};

export const plasticTypesData = getTranslatedData();

export const getAnalysisResult = (): PlasticType => {
  const randomIndex = Math.floor(Math.random() * plasticTypesData.length);
  return plasticTypesData[randomIndex];
};