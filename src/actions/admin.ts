"use server";

import { getSession } from "@/auth";
import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";
import Testimonial from "@/models/Testimonial";
import { projectSchema, testimonialSchema } from "@/lib/validations";

// Helper to check authentication
async function checkAuth() {
  const session = await getSession();
  if (!session) {
    throw new Error("Unauthorized");
  }
}

// --- PROJECT ACTIONS ---
export async function createProject(prevState: any, formData: FormData) {
  try {
    await checkAuth();
    await dbConnect();
    const data = Object.fromEntries(formData.entries());
    const validatedData = projectSchema.parse(data);
    await Project.create(validatedData);
    revalidatePath("/admin/projects");
    revalidatePath("/");
    revalidatePath("/projects");
    return { success: true, message: "Project created successfully." };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create project." };
  }
}

export async function updateProject(id: string, prevState: any, formData: FormData) {
  try {
    await checkAuth();
    await dbConnect();
    const data = Object.fromEntries(formData.entries());
    const validatedData = projectSchema.parse(data);
    await Project.findByIdAndUpdate(id, validatedData);
    revalidatePath("/admin/projects");
    revalidatePath("/");
    revalidatePath("/projects");
    revalidatePath(`/projects/${id}`);
    return { success: true, message: "Project updated successfully." };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update project." };
  }
}

export async function deleteProject(id: string) {
  try {
    await checkAuth();
    await dbConnect();
    await Project.findByIdAndDelete(id);
    revalidatePath("/admin/projects");
    revalidatePath("/");
    revalidatePath("/projects");
    return { success: true, message: "Project deleted." };
  } catch (error: any) {
    return { success: false, error: "Failed to delete project." };
  }
}

// --- TESTIMONIAL ACTIONS ---
export async function createTestimonial(prevState: any, formData: FormData) {
  try {
    await checkAuth();
    await dbConnect();
    const data = Object.fromEntries(formData.entries());
    const validatedData = testimonialSchema.parse(data);
    await Testimonial.create(validatedData);
    revalidatePath("/admin/reviews");
    revalidatePath("/");
    return { success: true, message: "Testimonial created." };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create testimonial." };
  }
}

export async function updateTestimonial(id: string, prevState: any, formData: FormData) {
  try {
    await checkAuth();
    await dbConnect();
    const data = Object.fromEntries(formData.entries());
    const validatedData = testimonialSchema.parse(data);
    await Testimonial.findByIdAndUpdate(id, validatedData);
    revalidatePath("/admin/reviews");
    revalidatePath("/");
    return { success: true, message: "Testimonial updated." };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update testimonial." };
  }
}

export async function deleteTestimonial(id: string) {
  try {
    await checkAuth();
    await dbConnect();
    await Testimonial.findByIdAndDelete(id);
    revalidatePath("/admin/reviews");
    revalidatePath("/");
    return { success: true, message: "Testimonial deleted." };
  } catch (error: any) {
    return { success: false, error: "Failed to delete testimonial." };
  }
}
