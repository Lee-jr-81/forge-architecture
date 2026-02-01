import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  // We destructure 'image' from the helper function
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      year: z.string(),
      image: image(), // This is the 'Pro' validator
      description: z.string(),
      category: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
