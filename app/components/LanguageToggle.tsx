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
        className={`w-14 h-7 flex items-center rounded-full toggle-wrapper`}
        onClick={toggleLanguage}
        aria-label={`Switch to ${language === 'en' ? 'Norwegian' : 'English'}`}
        data-language={language}
      />
      <span className={`ml-2 ${language === 'no' ? 'font-bold' : ''}`}>NO</span>
    </div>
  );
};

export default LanguageToggle;
