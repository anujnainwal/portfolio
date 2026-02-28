import Link from "next/link";
import { FolderKanban, MessageSquareQuote } from "lucide-react";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";
import Testimonial from "@/models/Testimonial";

export default async function AdminDashboard() {
  await dbConnect();

  const projectCount = await Project.countDocuments();
  const reviewCount = await Testimonial.countDocuments();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-[#1a1f36] tracking-tight">
          Dashboard Overview
        </h1>
        <p className="mt-2 text-gray-600">
          Welcome back! Here's what's happening in your portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Projects Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start gap-6 relative overflow-hidden group hover:border-gray-200 transition-colors">
          <div className="p-4 bg-gray-50 text-[#1a1f36] rounded-xl group-hover:scale-105 transition-transform">
            <FolderKanban className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">
              Total Projects
            </p>
            <p className="text-3xl font-bold text-gray-900">{projectCount}</p>
            <Link
              href="/admin/projects"
              className="text-[#1a1f36] text-sm font-semibold hover:underline mt-2 inline-block opacity-80 hover:opacity-100 transition-opacity"
            >
              Manage Projects →
            </Link>
          </div>
        </div>

        {/* Reviews Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start gap-6 relative overflow-hidden group hover:border-gray-200 transition-colors">
          <div className="p-4 bg-gray-50 text-[#1a1f36] rounded-xl group-hover:scale-105 transition-transform">
            <MessageSquareQuote className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">
              Total Reviews
            </p>
            <p className="text-3xl font-bold text-gray-900">{reviewCount}</p>
            <Link
              href="/admin/reviews"
              className="text-[#1a1f36] text-sm font-semibold hover:underline mt-2 inline-block opacity-80 hover:opacity-100 transition-opacity"
            >
              Manage Reviews →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
