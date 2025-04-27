import React, { useState } from 'react';
import UploadSection from '../components/UploadSection';
import ResultsDisplay from '../components/ResultsDisplay';
import { getAnalysisResult } from '../data/plasticData';
import { PlasticType } from '../types/types';

const ScanPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<PlasticType | null>(null);

  const handleImageSelected = (image: File | null) => {
    setSelectedImage(image);
    
    if (image) {
      setIsAnalyzing(true);
      setAnalysisResult(null);
      
      setTimeout(() => {
        const result = getAnalysisResult();
        setAnalysisResult(result);
        setIsAnalyzing(false);
      }, 2000);
    } else {
      setIsAnalyzing(false);
      setAnalysisResult(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Scanner une bouteille
      </h1>
      <UploadSection onImageSelected={handleImageSelected} />
      <ResultsDisplay isAnalyzing={isAnalyzing} result={analysisResult} />
    </div>
  );
};

export default ScanPage;