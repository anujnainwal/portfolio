"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { testimonialSchema } from "@/lib/validations";
import { createTestimonial, updateTestimonial } from "@/actions/admin";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ITestimonial } from "@/models/Testimonial";

type TestimonialFormValues = z.infer<typeof testimonialSchema>;

interface TestimonialFormProps {
  initialData?: any | null;
}

export default function TestimonialForm({ initialData }: TestimonialFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const defaultValues: Partial<TestimonialFormValues> = initialData
    ? {
        name: initialData.name,
        role: initialData.role,
        company: initialData.company,
        quote: initialData.quote,
        image: initialData.image || "",
        order: initialData.order || 0,
      }
    : {
        name: "",
        role: "",
        company: "",
        quote: "",
        image: "",
        order: 0,
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema) as any,
    defaultValues: defaultValues as any,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const data = values as TestimonialFormValues;

    setIsSubmitting(true);
    setError(null);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string | Blob);
    });

    try {
      const result = initialData
        ? await updateTestimonial(initialData._id as string, null, formData)
        : await createTestimonial(null, formData);

      if (result.success) {
        router.push("/admin/reviews");
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
            Client Name
          </label>
          <input
            {...register("name")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="e.g. John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Role</label>
          <input
            {...register("role")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="e.g. CEO"
          />
          {errors.role && (
            <p className="text-red-500 text-xs">{errors.role.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Company</label>
          <input
            {...register("company")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="e.g. TechCorp"
          />
          {errors.company && (
            <p className="text-red-500 text-xs">{errors.company.message}</p>
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
          <label className="text-sm font-medium text-gray-700">
            Avatar Image URL (Optional)
          </label>
          <input
            {...register("image")}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="e.g. /images/avatar1.jpg"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Quote</label>
          <textarea
            {...register("quote")}
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:ring-gray-900 focus:border-gray-900"
            placeholder="The full testimonial text..."
          />
          {errors.quote && (
            <p className="text-red-500 text-xs">{errors.quote.message}</p>
          )}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.push("/admin/reviews")}
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
              ? "Update Review"
              : "Add Review"}
        </button>
      </div>
    </form>
  );
}
