import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(200),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    status: z.enum(["done", "in-progress", "archived"]).default("done"),
    featured: z.boolean().default(false),
    repo: z.url().optional(),
    demo: z.url().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const lab = defineCollection({
  loader: glob({ base: "./src/content/lab", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(200),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    mode: z.enum(["browser-js", "browser-py", "embed", "view-only"]),
    language: z.string(),
    toolId: z.string().optional(),
    pyFile: z.string().startsWith("/").optional(),
    embedUrl: z.url().optional(),
    repo: z.url().optional(),
    downloadUrl: z.string().startsWith("/").optional(),
    warning: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    ctf: z.object({
      event: z.string(),
      category: z.string(),
      difficulty: z.string(),
    }).optional(),
  }),
});

export const collections = { projects, lab, blog };

