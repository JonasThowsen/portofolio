'use client';

import { BlogPosts } from 'app/components/posts'
import { useLanguage } from './context/LanguageContext'
import { translations } from './translations'

export default function Page() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {t.title}
      </h1>
      <p className="mb-4">
        {t.introduction}
      </p>
      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">{t.skills}</h2>
        <ul className="list-disc pl-5">
          <li>{t.skillProgramming}</li>
          <li>{t.skillDataAnalysis}</li>
          <li>{t.skillMachineLearning}</li>
        </ul>
      </div>
      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">{t.blogPosts}</h2>
        <BlogPosts />
      </div>
    </section>
  )
}