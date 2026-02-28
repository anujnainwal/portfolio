"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaServer,
  FaPaintBrush,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiGit,
  SiGraphql,
  SiPython,
} from "react-icons/si";

const AboutPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skills = [
    {
      category: "Frontend Development",
      icon: <FaCode className="text-blue-500" />,
      items: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Backend & Database",
      icon: <FaServer className="text-green-500" />,
      items: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "GraphQL", icon: <SiGraphql /> },
      ],
    },
    {
      category: "Tools & Others",
      icon: <FaPaintBrush className="text-purple-500" />,
      items: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Python", icon: <SiPython /> },
      ],
    },
  ];

  const experience = [
    {
      year: "June 2025 - Present",
      role: "Full Stack Developer",
      company: "Xicom Technologies",
      description:
        "Building scalable full-stack applications, optimizing frontend performance, and integrating complex backend services using modern technologies.",
    },
    {
      year: "Jan 2024 - June 2025",
      role: "Backend Developer (Node.js)",
      company: "Rapidsofts",
      description:
        "Specialized in backend development with Node.js, designing RESTful APIs, and managing database schema/optimizations for high-performance applications.",
    },
    {
      year: "June 2022 - Nov 2023",
      role: "Associate Software Developer",
      company: "Detroit Software Consultants",
      description:
        "Started my career assisting in software development lifecycles, debugging code, and contributing to both frontend and backend modules.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-blue-600 font-semibold tracking-wider uppercase mb-2 block">
                About Me
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Crafting Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Masterpieces
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I'm a passionate Full Stack Engineer with a keen eye for design
                and a drive for technical excellence. I specialize in building
                performant, scalable, and beautiful web applications that solve
                real-world problems.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf" // Placeholder link
                  download
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  <FaDownload /> Download Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/anuj.jpg"
                  alt="Anuj Nainwal"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium opacity-80">Hello, I'm</p>
                  <p className="text-2xl font-bold">Anuj Nainwal</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Arsenal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A curated set of technologies I use to build robust and scalable
              applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 bg-gray-50/50"
                    >
                      <span className="text-xl text-gray-400 shrink-0">
                        {skill.icon}
                      </span>
                      <span className="text-gray-700 font-medium text-sm whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-10"
              >
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <FaBriefcase className="text-gray-400" /> Professional Journey
                </h2>
              </motion.div>

              <div className="space-y-12">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-gray-100"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm" />
                    <span className="text-sm text-blue-600 font-semibold mb-1 block">
                      {job.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {job.role}
                    </h3>
                    <p className="text-gray-500 mb-2">{job.company}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {job.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Philosophy */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3 mb-10">
                  <FaGraduationCap className="text-gray-400" /> Education
                </h2>

                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-gray-500 mb-4">
                    University of Technology • 2016 - 2020
                  </p>
                  <p className="text-gray-600">
                    Specialized in Software Engineering and Artificial
                    Intelligence. Graduated with First Class Honors.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Philosophy
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    I believe that great software is born at the intersection of{" "}
                    <strong>clean code</strong>,{" "}
                    <strong>intuitive design</strong>, and{" "}
                    <strong>user empathy</strong>.
                  </p>
                  <p>
                    Every line of code I write is aimed at creating seamless,
                    efficient, and accessible experiences. I am constantly
                    learning, evolving, and pushing the boundaries of what's
                    possible on the web.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
