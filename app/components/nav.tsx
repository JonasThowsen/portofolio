'use client';

import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import { useEffect, useState } from 'react'
import LanguageToggle from './LanguageToggle'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  }
}

export function Navbar() {
  const { language } = useLanguage()
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const t = translations[currentLanguage]

  useEffect(() => {
    setCurrentLanguage(language)
  }, [language])

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-col relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-0">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {t[name]}
                </Link>
              ))}
            </div>
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </aside>
  )
}