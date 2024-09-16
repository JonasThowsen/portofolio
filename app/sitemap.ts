import { MetadataRoute } from 'next'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app' // You might want to update this URL to your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}