import Link from "next/link";
import { Plus, Eye, Pencil, Trash2, ExternalLink } from "lucide-react";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";
import { deleteProject } from "@/actions/admin";

export default async function ProjectsAdminPage() {
  await dbConnect();
  const projects = await Project.find().sort({ order: 1, createdAt: -1 });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-[#1a1f36] tracking-tight">
          Manage Projects
        </h1>
        <Link
          href="/admin/projects/create"
          className="flex items-center gap-2 bg-[#1a1f36] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#161c2d] transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/80 border-b border-gray-100 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Year</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projects.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No projects found. Add your first project!
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr
                    key={project._id.toString()}
                    className="hover:bg-gray-50/50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-10 h-10 rounded-md bg-cover bg-center shrink-0 shadow-sm"
                          style={{
                            backgroundImage: `url(${project.image || "/images/no-image.jpg"})`,
                          }}
                        />
                        <div>
                          <p className="font-semibold text-gray-900">
                            {project.title}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-1">
                            {project.shortDescription}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {project.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {project.year}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${project.live ? "bg-green-50 text-green-700 border border-green-200" : "bg-yellow-50 text-yellow-700 border border-yellow-200"}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${project.live ? "bg-green-500" : "bg-yellow-500"}`}
                        ></span>
                        {project.live ? "Live" : "In Development"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-gray-900"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        <Link
                          href={`/admin/projects/edit/${project._id}`}
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
                            await deleteProject(project._id.toString());
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
