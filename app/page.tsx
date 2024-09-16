'use client';

import { useLanguage } from './context/LanguageContext';
import { translations } from './translations';
import LanguageToggle from './components/LanguageToggle';
import Image from 'next/image';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      
      <main className="bg-white shadow-xl rounded-lg overflow-hidden">
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 flex flex-col sm:flex-row items-center sm:items-start">
          <div className="w-40 h-40 sm:w-48 sm:h-48 mb-4 sm:mb-0 sm:mr-8 overflow-hidden rounded-full border-4 border-white shadow-lg flex-shrink-0">
            <Image 
              src="/jonas-profile.jpg" 
              alt={t.fullName} 
              width={192} 
              height={192} 
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold whitespace-nowrap">{t.fullName}</h1>
            <p className="text-xl sm:text-2xl mt-2 opacity-90">{t.age}</p>
            <p className="text-xl sm:text-2xl mt-2 opacity-90">{t.title}</p>
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
              <p className="text-gray-600">{t.currentProjectDescription}  <a href="https://sirkusagio-nextjs.vercel.app" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Project Link</a></p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}