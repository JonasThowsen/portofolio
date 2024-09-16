'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'no' : 'en');
  };

  return (
    <div className="flex items-center">
      <span className={`mr-2 ${language === 'en' ? 'font-bold' : ''}`}>EN</span>
      <button
        className="w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
        onClick={toggleLanguage}
        aria-label={`Switch to ${language === 'en' ? 'Norwegian' : 'English'}`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
            language === 'no' ? 'translate-x-7' : ''
          }`}
        />
      </button>
      <span className={`ml-2 ${language === 'no' ? 'font-bold' : ''}`}>NO</span>
    </div>
  );
};

export default LanguageToggle;