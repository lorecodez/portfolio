import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {

    const changeFrequency = 'monthly';

  return [
    {
      url: 'https://lorenzowashington.com',
      lastModified: new Date(),
      changeFrequency,
      priority: 1,
    },
    {
      url: 'https://lorenzowashington/about-me',
      lastModified: new Date(),
      changeFrequency,
      priority: 0.8,
    },
    {
      url: 'https://lorenzowashington.com/blog',
      lastModified: new Date(),
      changeFrequency,
      priority: 0.5,
    },
    {
        url: 'https://lorenzowashington.com/contact',
        lastModified: new Date(),
        changeFrequency,
        priority: 0.9,
    },
    {
        url: 'https://lorenzowashington.com/services',
        lastModified: new Date(),
        changeFrequency,
        priority: 0.7,
    },
    {
        url: 'https://lorenzowashington.com/projects',
        lastModified: new Date(),
        changeFrequency,
        priority: 0.5,
    },
    {
        url: 'https://lorenzowashington.com/posts',
        lastModified: new Date(),
        changeFrequency,
        priority: 0.5,
    },
  ]
}