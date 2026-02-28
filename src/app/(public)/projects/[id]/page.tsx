import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheck,
} from "react-icons/fa";
import { projects } from "@/data/projects";

// Type safely for params
type Props = {
  params: Promise<{ id: string }>;
};

// Generate metadata
export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} - Case Study`,
    description: project.shortDescription,
  };
}

const ProjectDetails = async ({ params }: Props) => {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return notFound();
  }

  // Determine if image is external string or imported asset
  const isExternalImage =
    typeof project.image === "string" &&
    (project.image.startsWith("http") || project.image.startsWith("/"));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gray-50 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-200/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-4 py-1.5 rounded-full text-sm font-semibold border"
                style={{
                  color: project.color,
                  borderColor: `${project.color}40`,
                  backgroundColor: `${project.color}10`,
                }}
              >
                {project.category}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 font-medium">{project.year}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
                style={{ backgroundColor: "#111" }} /* Force dark background */
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors"
              >
                <FaGithub /> Source Code
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Main Visual */}
            <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              {isExternalImage ? (
                <img
                  src={project.image || "/images/no-image.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={project.image || "/images/no-image.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  The Challenge
                </h2>
                <div className="h-1 w-20 bg-gray-200 rounded-full mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  The Solution
                </h2>
                <div className="h-1 w-20 bg-gray-200 rounded-full mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  {project.solution}
                </p>
              </section>
            </div>

            {/* Video Section */}
            {project.video && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                  Project Demo
                </h2>
                <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-black">
                  <video
                    src={project.video}
                    controls
                    className="w-full h-full object-contain"
                  />
                </div>
              </section>
            )}

            {/* Carousel Gallery */}
            {project.screenshots && project.screenshots.length > 0 && (
              <section className="overflow-hidden">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Interface Gallery
                </h2>
                {/* Scroll Container with hidden scrollbar for "Amo" feel */}
                <div
                  className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory no-scrollbar"
                  style={{ scrollBehavior: "smooth" }}
                >
                  {project.screenshots.map((shot, index) => (
                    <div
                      key={index}
                      className="relative min-w-[85%] md:min-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 flex-shrink-0 snap-center"
                    >
                      <Image
                        src={shot}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-12">
            {/* Key Features */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Key Features
              </h3>
              <ul className="space-y-4 mb-8">
                {project.keyFeatures?.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[20px] text-green-500">
                      <FaCheck />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  My Role
                </h3>
                <p className="text-gray-600 text-lg">{project.role}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
