import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  fullDescription: z.string().min(1, "Full description is required"),
  image: z.string().min(1, "Main image URL is required"),
  technologies: z.string(),
  github: z.string().optional(),
  live: z.string().optional(),
  color: z.string().min(1, "Color code is required"),
  category: z.string().min(1, "Category is required"),
  challenge: z.string().min(1, "Challenge is required"),
  solution: z.string().min(1, "Solution is required"),
  keyFeatures: z.string(),
  screenshots: z.string(),
  year: z.string().min(1, "Year is required"),
  role: z.string().min(1, "Role is required"),
  video: z.string().optional(),
  order: z.coerce.number().default(0),
});

export const testimonialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  company: z.string().min(1, "Company is required"),
  quote: z.string().min(1, "Quote is required"),
  image: z.string().optional(),
  order: z.coerce.number().default(0),
});
