import { defineCollection, z } from 'astro:content';

const useCases = defineCollection({
  type: 'content',
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
