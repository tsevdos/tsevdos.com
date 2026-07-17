import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postsCollection = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    type: z.literal("post"),
    categories: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    permalink: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    type: z.literal("page"),
  }),
});

export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
};
