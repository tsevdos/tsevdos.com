import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
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
  type: "content",
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
