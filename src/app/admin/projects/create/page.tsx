import ProjectForm from "@/components/admin/ProjectForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreateProjectPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/projects"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Add New Project</h1>
          <p className="text-sm text-gray-500">
            Fill in the details to add a project to your portfolio.
          </p>
        </div>
      </div>

      <ProjectForm />
    </div>
  );
}
