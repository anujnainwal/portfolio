"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import ScrollToTop from "@/components/common/ScrollToTop";

const About = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid md:grid-cols-2 gap-12 items-center mb-20"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            A passionate Full Stack Developer with expertise in creating
            innovative web solutions. I specialize in building scalable
            applications using modern technologies.
          </p>
          <div className="flex gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-2xl text-gray-600 hover:text-blue-600"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-2xl text-gray-600 hover:text-blue-600"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-2xl text-gray-600 hover:text-blue-600"
            >
              <FaTwitter />
            </motion.a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <FaDownload /> Download Resume
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative h-[400px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/your-photo.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-4xl mb-4 text-blue-600">{skill.icon}</div>
              <h3 className="font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-600">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const skills = [
  { name: "React", level: "Advanced", icon: "⚛️" },
  { name: "Node.js", level: "Intermediate", icon: "🟢" },
  { name: "TypeScript", level: "Advanced", icon: "📘" },
  { name: "MongoDB", level: "Intermediate", icon: "🍃" },
  // Add more skills
];

const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2021 - Present",
    description:
      "Led development of multiple web applications using React and TypeScript.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions",
    period: "2019 - 2021",
    description:
      "Developed and maintained various web applications using MERN stack.",
  },
  // Add more experience
];

export default About;
