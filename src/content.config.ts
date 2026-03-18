import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string().trim().min(1),
    summary: z.string().trim().min(1),
    date: z.coerce.date().optional(),
    tags: z
      .array(z.string().trim().min(1))
      .default([])
      .transform((tags) => Array.from(new Set(tags))),
    liveUrl: z.url().optional(),
    repoUrl: z.url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
