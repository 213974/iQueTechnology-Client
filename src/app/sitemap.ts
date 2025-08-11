// src/app/sitemap.ts
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/cmmc-explained',
    '/compliance-as-a-service',
    '/managed-services',
    '/cisco',
    '/schedule-assessment',
    '/featured-services'
  ];

  // In the future, we would fetch dynamic routes (like blog posts) from the database here.
  // const dynamicRoutes = await getBlogPostsFromDatabase();

  return staticRoutes.map((route) => ({
    url: `https://www.iquetechnology.com${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}