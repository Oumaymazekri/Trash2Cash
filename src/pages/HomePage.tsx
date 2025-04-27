import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Statistics from '../components/Statistics';
import PlasticTypesInfo from '../components/PlasticTypesInfo';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartScanning = () => {
    navigate('/scan');
  };

  return (
    <>
      <Hero onStart={handleStartScanning} />
      <HowItWorks onStart={handleStartScanning} />
      <div className="container mx-auto px-4 py-12">
        <Statistics />
        <PlasticTypesInfo />
      </div>
    </>
  );
};

export default HomePage;