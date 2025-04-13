"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiRedux,
} from "react-icons/si";
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

const cardVariants = {
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
    scale: 1.02,
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

const projects = [
  {
    id: 1,
    title: "Creative Agency Website",
    description:
      "Modern website design with interactive elements and smooth animations for a creative agency.",
    image:
      "https://pagecreative.co.uk/wp-content/uploads/2023/10/AdobeStock_223290240-1-2-scaled.jpeg",
    technologies: [
      <SiReact key="react" />,
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tail" />,
    ],
    github: "https://github.com/yourusername/creative-agency",
    live: "https://creative-agency.demo.com",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Digital Marketing Dashboard",
    description:
      "Comprehensive analytics dashboard for tracking marketing campaigns and user engagement.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0eXmTpXbgY1YAjj4hb7u8pTHQDpVJdOE5Q&s",
    technologies: [
      <SiTypescript key="ts" />,
      <SiReact key="react" />,
      <SiRedux key="redux" />,
    ],
    github: "https://github.com/yourusername/marketing-dashboard",
    live: "https://dashboard.demo.com",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description:
      "Interactive learning management system with real-time collaboration features.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4L8dcJdtyXa-e0M9xz3XQIcvCwWjBscL2tg&s",
    technologies: [
      <SiNextdotjs key="next" />,
      <SiPrisma key="prisma" />,
      <SiPostgresql key="postgres" />,
    ],
    github: "https://github.com/yourusername/e-learning",
    live: "https://e-learning.demo.com",
    category: "Web App",
  },
  {
    id: 4,
    title: "E-Learning Platform",
    description:
      "Interactive learning management system with real-time collaboration features.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4L8dcJdtyXa-e0M9xz3XQIcvCwWjBscL2tg&s",
    technologies: [
      <SiNextdotjs key="next" />,
      <SiPrisma key="prisma" />,
      <SiPostgresql key="postgres" />,
    ],
    github: "https://github.com/yourusername/e-learning",
    live: "https://e-learning.demo.com",
    category: "Web App",
  },
  {
    id: 5,
    title: "E-Learning Platform",
    description:
      "Interactive learning management system with real-time collaboration features.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4L8dcJdtyXa-e0M9xz3XQIcvCwWjBscL2tg&s",
    technologies: [
      <SiNextdotjs key="next" />,
      <SiPrisma key="prisma" />,
      <SiPostgresql key="postgres" />,
    ],
    github: "https://github.com/yourusername/e-learning",
    live: "https://e-learning.demo.com",
    category: "Web App",
  },
  {
    id: 6,
    title: "E-Learning Platform",
    description:
      "Interactive learning management system with real-time collaboration features.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4L8dcJdtyXa-e0M9xz3XQIcvCwWjBscL2tg&s",
    technologies: [
      <SiNextdotjs key="next" />,
      <SiPrisma key="prisma" />,
      <SiPostgresql key="postgres" />,
    ],
    github: "https://github.com/yourusername/e-learning",
    live: "https://e-learning.demo.com",
    category: "Web App",
  },
  {
    id: 7,
    title: "E-Learning Platform",
    description:
      "Interactive learning management system with real-time collaboration features.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4L8dcJdtyXa-e0M9xz3XQIcvCwWjBscL2tg&s",
    technologies: [
      <SiNextdotjs key="next" />,
      <SiPrisma key="prisma" />,
      <SiPostgresql key="postgres" />,
    ],
    github: "https://github.com/yourusername/e-learning",
    live: "https://e-learning.demo.com",
    category: "Web App",
  },
];

interface ImageComponentProps
  extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> {
  src: string;
  alt: string;
}
const ImageComponent = ({ src, alt, ...props }: ImageComponentProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      unoptimized // Add this for external images
      loader={({ src }) => src} // Custom loader for external URLs
    />
  );
};

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(null);
  const projectsPerPage = 6;

  const categories = ["All", "Full Stack", "Frontend", "Web App"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  //   const currentProjects = filteredProjects.slice(
  //     indexOfFirstProject,
  //     indexOfLastProject
  //   );

  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <div className="py-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Featured Projects
      </motion.h1>

      {/* Category Filter */}
      <motion.div
        className="flex justify-center gap-4 mb-12 flex-wrap"
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
            className={`px-6 py-2.5 rounded-full transition-all ${
              filter === category
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 hover:bg-gray-200"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              layoutId={`card-${project.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <ImageComponent
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex gap-4 scale-90 group-hover:scale-100 transition-transform">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white"
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <motion.h3
                    className="text-xl font-semibold"
                    layoutId={`title-${project.id}`}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.span
                    className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2, color: "#2563eb" }}
                      className="text-2xl text-gray-600 transition-colors"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length > projectsPerPage && (
        <motion.div
          className="flex justify-center gap-2 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {Array.from({
            length: Math.ceil(filteredProjects.length / projectsPerPage),
          }).map((_, index) => (
            <motion.button
              key={index}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-md transition-all ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 hover:bg-gray-300"
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
