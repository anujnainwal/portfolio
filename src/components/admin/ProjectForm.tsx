"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { projectSchema } from "@/lib/validations";
import { createProject, updateProject } from "@/actions/admin";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IProject } from "@/models/Project";

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  initialData?: any | null;
}

export default function ProjectForm({ initialData }: ProjectFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const defaultValues: Partial<ProjectFormValues> = initialData
    ? {
        title: initialData.title,
        shortDescription: initialData.shortDescription,
        fullDescription: initialData.fullDescription,
        image: initialData.image,
        technologies: initialData.technologies.join(", "),
        github: initialData.github || "",
        live: initialData.live || "",
        color: initialData.color,
        category: initialData.category,
        challenge: initialData.challenge,
        solution: initialData.solution,
        keyFeatures: initialData.keyFeatures.join(", "),
        screenshots: initialData.screenshots.join(", "),
        year: initialData.year,
        role: initialData.role,
        video: initialData.video || "",
        order: initialData.order || 0,
      }
    : {
        title: "",
        shortDescription: "",
        fullDescription: "",
        image: "",
        technologies: "",
        github: "",
        live: "",
        color: "#000000",
        category: "Full Stack",
        challenge: "",
        solution: "",
        keyFeatures: "",
        screenshots: "",
        year: new Date().getFullYear().toString(),
        role: "Lead Developer",
        video: "",
        order: 0,
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema) as any,

    defaultValues: defaultValues as any,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const data = values as ProjectFormValues;

    setIsSubmitting(true);
    setError(null);

    // We need to pass FormData to server actions
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string | Blob);
    });

    try {
      const result = initialData
        ? await updateProject(initialData._id as string, null, formData)
        : await createProject(null, formData);

      if (result.success) {
        router.push("/admin/projects");
        router.refresh();
      } else {
        setError(result.error);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 bg-white p-6 rounded-xl border border-gray-200"
    >
      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Project Title
          </label>
          <input
            {...register("title")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="e.g. Modern Portfolio"
          />
          {errors.title && (
            <p className="text-red-500 text-xs">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Category</label>
          <input
            {...register("category")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="e.g. Frontend, Web App"
          />
          {errors.category && (
            <p className="text-red-500 text-xs">{errors.category.message}</p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">
            Short Description
          </label>
          <textarea
            {...register("shortDescription")}
            rows={2}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="A brief summary for the project card"
          />
          {errors.shortDescription && (
            <p className="text-red-500 text-xs">
              {errors.shortDescription.message}
            </p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">
            Full Description
          </label>
          <textarea
            {...register("fullDescription")}
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="Detailed description for the project page"
          />
          {errors.fullDescription && (
            <p className="text-red-500 text-xs">
              {errors.fullDescription.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Main Image URL
          </label>
          <input
            {...register("image")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="e.g. /images/project1.jpg"
          />
          {errors.image && (
            <p className="text-red-500 text-xs">{errors.image.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Technologies (comma separated)
          </label>
          <input
            {...register("technologies")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="e.g. Next.js, React, Tailwind"
          />
          {errors.technologies && (
            <p className="text-red-500 text-xs">
              {errors.technologies.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            GitHub URL
          </label>
          <input
            {...register("github")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="https://github.com/..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Live URL</label>
          <input
            {...register("live")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="https://..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Brand Color HEX
          </label>
          <div className="flex gap-2">
            <input
              type="color"
              {...register("color")}
              className="h-10 w-10 rounded cursor-pointer"
            />
            <input
              {...register("color")}
              className="w-full flex-1 px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            />
          </div>
          {errors.color && (
            <p className="text-red-500 text-xs">{errors.color.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Year</label>
          <input
            {...register("year")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
          />
          {errors.year && (
            <p className="text-red-500 text-xs">{errors.year.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Role</label>
          <input
            {...register("role")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
          />
          {errors.role && (
            <p className="text-red-500 text-xs">{errors.role.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Order (for sorting)
          </label>
          <input
            type="number"
            {...register("order")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Challenge</label>
          <textarea
            {...register("challenge")}
            rows={3}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
          />
          {errors.challenge && (
            <p className="text-red-500 text-xs">{errors.challenge.message}</p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Solution</label>
          <textarea
            {...register("solution")}
            rows={3}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
          />
          {errors.solution && (
            <p className="text-red-500 text-xs">{errors.solution.message}</p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">
            Key Features (comma separated)
          </label>
          <textarea
            {...register("keyFeatures")}
            rows={2}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">
            Screenshots URLs (comma separated)
          </label>
          <textarea
            {...register("screenshots")}
            rows={2}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.push("/admin/projects")}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 disabled:opacity-50"
        >
          {isSubmitting
            ? "Saving..."
            : initialData
              ? "Update Project"
              : "Create Project"}
        </button>
      </div>
    </form>
  );
}
