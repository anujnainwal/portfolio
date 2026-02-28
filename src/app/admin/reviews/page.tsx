import Link from "next/link";
import { Plus, Pencil, Trash2, Quote } from "lucide-react";
import dbConnect from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import { deleteTestimonial } from "@/actions/admin";

export default async function ReviewsAdminPage() {
  await dbConnect();
  const reviews = await Testimonial.find().sort({ order: 1, createdAt: -1 });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-[#1a1f36] tracking-tight">
          Manage Reviews
        </h1>
        <Link
          href="/admin/reviews/create"
          className="flex items-center gap-2 bg-[#1a1f36] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#161c2d] transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Review
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/80 border-b border-gray-100 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">
                <th className="px-6 py-4 w-1/3">Client</th>
                <th className="px-6 py-4">Quote Snippet</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {reviews.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No reviews found. Add your first testimonial!
                  </td>
                </tr>
              ) : (
                reviews.map((review) => (
                  <tr
                    key={review._id.toString()}
                    className="hover:bg-gray-50/50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                          {review.image ? (
                            <img
                              src={review.image}
                              alt={review.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-sm font-medium text-gray-500">
                              {review.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {review.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {review.role} at {review.company}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <Quote className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
                        <p className="line-clamp-2 italic">{review.quote}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <Link
                          href={`/admin/reviews/edit/${review._id}`}
                          className="text-gray-400 hover:text-[#1a1f36] transition-colors"
                        >
                          <Pencil
                            className="w-[18px] h-[18px]"
                            strokeWidth={2.5}
                          />
                        </Link>
                        <form
                          action={async () => {
                            "use server";
                            await deleteTestimonial(review._id.toString());
                          }}
                        >
                          <button
                            type="submit"
                            className="text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2
                              className="w-[18px] h-[18px]"
                              strokeWidth={2.5}
                            />
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
