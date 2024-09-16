'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center">
      <span className={`mr-2 ${language === 'en' ? 'font-bold' : ''}`}>EN</span>
      <div
        className="w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out cursor-pointer"
        onClick={toggleLanguage}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
            language === 'no' ? 'translate-x-7' : ''
          }`}
        />
      </div>
      <span className={`ml-2 ${language === 'no' ? 'font-bold' : ''}`}>NO</span>
    </div>
  );
};

export default LanguageToggle;