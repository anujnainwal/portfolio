import TestimonialForm from "@/components/admin/TestimonialForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreateTestimonialPage() {
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
          <h1 className="text-2xl font-bold text-gray-900">Add New Review</h1>
          <p className="text-sm text-gray-500">
            Add what your clients have to say about you.
          </p>
        </div>
      </div>

      <TestimonialForm />
    </div>
  );
}
