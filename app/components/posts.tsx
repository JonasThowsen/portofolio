'use client';

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

type BlogPost = {
  metadata: {
    title: string
    publishedAt: string
    summary: string
    image?: string
  }
  slug: string
  content: string
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    fetch('/api/blog-posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <section>
      <h2 className="font-bold text-2xl mb-6">{t.blogPosts}</h2>
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Link>
      ))}
    </section>
  )
}