import ProjectForm from "@/components/admin/ProjectForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";
import { notFound } from "next/navigation";
import { Types } from "mongoose";

interface EditProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProjectPage({
  params,
}: EditProjectPageProps) {
  const { id } = await params;

  if (!Types.ObjectId.isValid(id)) {
    notFound();
  }

  await dbConnect();
  const project = await Project.findById(id).lean();

  if (!project) {
    notFound();
  }

  // Convert MongoDB Document to a plain object that fits the form
  const serializedProject = JSON.parse(JSON.stringify(project));

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
          <h1 className="text-2xl font-bold text-gray-900">Edit Project</h1>
          <p className="text-sm text-gray-500">
            Updating: {(project as any).title}
          </p>
        </div>
      </div>

      <ProjectForm initialData={serializedProject} />
    </div>
  );
}
