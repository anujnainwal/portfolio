"use client";
import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { projects, Project } from "@/data/projects";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
} from "react-icons/si";

// Helper to get icon for technology
const getTechIcon = (tech: string) => {
  const normalize = tech.toLowerCase();
  if (normalize.includes("react"))
    return <SiReact className="text-[#61DAFB]" />;
  if (normalize.includes("next"))
    return <SiNextdotjs className="text-black dark:text-white" />;
  if (normalize.includes("tailwind"))
    return <SiTailwindcss className="text-[#06B6D4]" />;
  if (normalize.includes("type"))
    return <SiTypescript className="text-[#3178C6]" />;
  if (normalize.includes("node"))
    return <SiNodedotjs className="text-[#339933]" />;
  if (normalize.includes("mongo"))
    return <SiMongodb className="text-[#47A248]" />;
  if (normalize.includes("firebase"))
    return <SiFirebase className="text-[#FFCA28]" />;
  if (normalize.includes("redux"))
    return <SiRedux className="text-[#764ABC]" />;
  if (normalize.includes("framer")) return <SiFramer className="text-black" />;
  if (normalize.includes("html")) return <SiHtml5 className="text-[#E34F26]" />;
  if (normalize.includes("css")) return <SiCss3 className="text-[#1572B6]" />;
  if (normalize.includes("java"))
    return <SiJavascript className="text-[#F7DF1E]" />;
  return null;
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

interface ImageComponentProps extends Omit<
  React.ComponentProps<typeof Image>,
  "src" | "alt"
> {
  src: string;
  alt: string;
}

const ImageComponent = ({ src, alt, ...props }: ImageComponentProps) => {
  // Check if src is an external URL
  const isExternal =
    typeof src === "string" && (src.startsWith("http") || src.startsWith("//"));

  if (isExternal) {
    return (
      <Image
        src={src}
        alt={alt}
        {...props}
        unoptimized
        loader={({ src }) => src}
      />
    );
  }

  return <Image src={src} alt={alt} {...props} />;
};

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const projectsPerPage = 6;

  // Deriving categories from actual data would be better in a real app,
  // but hardcoding common ones is fine for now.
  const categories = ["All", "Full Stack", "Frontend", "Web App"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage,
  );

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          Featured Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          A collection of my recent work displaying my skills in web
          development, design, and problem solving.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex justify-center gap-4 mb-16 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => {
              setFilter(category);
              setCurrentPage(1);
            }}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === category
                ? "bg-gray-900 text-white shadow-xl shadow-gray-200"
                : "bg-white text-gray-600 border border-gray-100 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              layoutId={`card-${project.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="h-full flex flex-col">
                <Link
                  href={`/projects/${project.id}`}
                  className="block relative h-64 w-full overflow-hidden bg-gray-50 group"
                >
                  <ImageComponent
                    src={project.image || "/images/no-image.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white font-medium flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                      View Case Study <FaArrowRight />
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <Link
                      href={`/projects/${project.id}`}
                      className="hover:underline decoration-gray-900 underline-offset-4 decoration-2"
                    >
                      <motion.h3
                        className="text-xl font-bold text-gray-900"
                        layoutId={`title-${project.id}`}
                      >
                        {project.title}
                      </motion.h3>
                    </Link>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full border"
                      style={{
                        color: project.color,
                        borderColor: `${project.color}40`,
                        backgroundColor: `${project.color}10`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                    {project.shortDescription}
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-center gap-3 mb-6">
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <div
                          key={i}
                          title={tech}
                          className="text-xl text-gray-400 hover:text-gray-900 transition-colors"
                        >
                          {getTechIcon(tech)}
                        </div>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-xs text-gray-400 font-medium">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <FaGithub />{" "}
                        <span className="underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4">
                          Source
                        </span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <FaExternalLinkAlt size={12} />{" "}
                        <span className="underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4">
                          Live Demo
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length > projectsPerPage && (
        <motion.div
          className="flex justify-center gap-2 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Pagination Controls could rely on same logic as before, omitted for brevity if unchanged logic is fine, but rewriting for clarity since I replaced the whole file */}
          {Array.from({
            length: Math.ceil(filteredProjects.length / projectsPerPage),
          }).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                currentPage === index + 1
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsPage;
