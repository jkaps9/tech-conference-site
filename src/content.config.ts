// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection, reference } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const tracks = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/tracks" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      color: z.string(),
    }),
});

const speakers = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/speakers" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      company: z.string(),
      avatar: image(),
      bio: z.string(),
      featured: z.boolean().optional().default(false),
      color: z.string(),
    }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/talks" }),
  schema: ({ image }) =>
    z.object({
      id: z.string().optional(),
      title: z.string(),
      speaker: z.string(),
      track: z.string(),
      description: z.string(),
      day: z.number(),
      startTime: z.string(),
      endTime: z.string(),
      location: z.string(),
      highlighted: z.boolean().optional().default(false),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = { tracks, speakers, talks };
