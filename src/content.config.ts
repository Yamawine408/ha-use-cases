import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const useCases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/use-cases' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    difficulty: z.enum(['かんたん', 'ふつう', '上級']).optional(),
    requirements: z.array(z.string()).default([]),
    references: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { useCases };
