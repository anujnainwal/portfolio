"use server";

import dbConnect from "@/lib/db";
import Project from "@/models/Project";
import Testimonial from "@/models/Testimonial";

export async function getPublicProjects() {
  try {
    await dbConnect();
    const projects = await Project.find({}).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getPublicTestimonials() {
  try {
    await dbConnect();
    const testimonials = await Testimonial.find({}).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(testimonials));
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}
