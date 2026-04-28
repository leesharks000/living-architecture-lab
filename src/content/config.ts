import { defineCollection, z } from 'astro:content';

const scaleSchema = z.object({
  scale: z.number().min(1).max(5),
  name: z.string(),
  units: z.string(),
  domain: z.string(),
  artifacts: z.array(z.string()),
  status: z.string(),
  sims: z.array(z.string()).default([]),
  doi: z.array(z.string()).default([]),
});

const projectSchema = z.object({
  name: z.string(),
  scale: z.number().min(1).max(5),
  status: z.enum(['concept', 'design', 'prototype', 'field-test', 'deployed']),
  artifact_class: z.string(),
  description: z.string(),
  alice_quote: z.string().optional(),
  doi: z.array(z.string()).default([]),
});

const principleSchema = z.object({
  name: z.string(),
  epigraph: z.string(),
  alice_quote: z.string().optional(),
});

const personSchema = z.object({
  name: z.string(),
  role: z.string(),
  mpai_doi: z.string(),
  pronouns: z.string().optional(),
});

export const collections = {
  scales: defineCollection({ type: 'content', schema: scaleSchema }),
  projects: defineCollection({ type: 'content', schema: projectSchema }),
  principles: defineCollection({ type: 'content', schema: principleSchema }),
  people: defineCollection({ type: 'content', schema: personSchema }),
};
