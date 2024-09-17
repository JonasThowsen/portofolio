'use client';

import { useLanguage } from './context/LanguageContext';
import { translations } from './translations';
import LanguageToggle from './components/LanguageToggle';
import Image from 'next/image';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  function ArrowIcon() {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center relative p-4">
      <div className="fixed top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      
      <main className="w-full max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start">
          <div className="w-48 h-48 sm:w-56 sm:h-56 mb-4 sm:mb-0 sm:mr-8 rounded-full border-4 border-white shadow-lg flex-shrink-0 overflow-hidden">
            <Image 
              src="/jonas-profile.jpg" 
              alt={t.fullName} 
              width={224} 
              height={224} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{t.fullName}</h1>
            <p className="text-lg sm:text-xl md:text-2xl mt-2 opacity-90">{t.age}</p>
            <p className="text-lg sm:text-xl md:text-2xl mt-1 opacity-90">{t.title}</p>
          </div>
        </header>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b border-gray-200 pb-2">{t.contact}</h2>
              <ul className="space-y-2 text-gray-600">
                <li>{t.email}</li>
                <li>{t.phone}</li>
                <li>{t.address}</li>
              </ul>
              <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                <li>
                  <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/jonas-%C3%A5dland-thowsen-006037305/"
                  >
                    <ArrowIcon />
                    <p className="ml-2 h-7 linkedin">LinkedIn</p>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/JonasThowsen"
                  >
                    <ArrowIcon />
                    <p className="ml-2 h-7 github">GitHub</p>
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b border-gray-200 pb-2">{t.education}</h2>
              <div className="mb-4">
                <h3 className="font-medium text-gray-800 text-lg">{t.universityName}</h3>
                <p className="text-gray-600">{t.universityDegree}</p>
                <p className="text-sm text-gray-500">{t.universityPeriod}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg">{t.highSchoolName}</h3>
                <p className="text-gray-600">{t.highSchoolProgram}</p>
                <p className="text-sm text-gray-500">{t.highSchoolPeriod}</p>
              </div>
            </section>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b border-gray-200 pb-2">{t.experience}</h2>
            <div>
              <h3 className="font-medium text-gray-800 text-lg">{t.jobTitle}</h3>
              <p className="text-gray-600">{t.jobCompany}</p>
              <p className="text-sm text-gray-500">{t.jobPeriod}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b border-gray-200 pb-2">{t.skills}</h2>
            <ul className="list-none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {t.skillsList.map((skill, index) => (
                <li key={index} className="bg-gray-100 rounded px-4 py-2 text-gray-700 text-center">{skill}</li>
              ))}
            </ul>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b border-gray-200 pb-2">{t.languages}</h2>
              <ul className="list-none space-y-2">
                {t.languagesList.map((lang, index) => (
                  <li key={index} className="text-gray-600">{lang}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b border-gray-200 pb-2">{t.currentProject}</h2>
              <p className="text-gray-600">{t.currentProjectDescription} <a href="https://sirkusagio-nextjs.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Project Link</a></p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}