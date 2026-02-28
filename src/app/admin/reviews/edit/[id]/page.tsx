import TestimonialForm from "@/components/admin/TestimonialForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import dbConnect from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import { notFound } from "next/navigation";
import { Types } from "mongoose";

interface EditTestimonialPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditTestimonialPage({
  params,
}: EditTestimonialPageProps) {
  const { id } = await params;

  if (!Types.ObjectId.isValid(id)) {
    notFound();
  }

  await dbConnect();
  const testimonial = await Testimonial.findById(id).lean();

  if (!testimonial) {
    notFound();
  }

  // Convert MongoDB Document to a plain object
  const serializedTestimonial = JSON.parse(JSON.stringify(testimonial));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/reviews"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Edit Review</h1>
          <p className="text-sm text-gray-500">
            <p className="text-sm text-gray-500">
              Updating review from: {(testimonial as any).name}
            </p>
          </p>
        </div>
      </div>

      <TestimonialForm initialData={serializedTestimonial} />
    </div>
  );
}
