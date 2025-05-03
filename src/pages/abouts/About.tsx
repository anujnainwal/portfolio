"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import PersonalImage from "../../../public/images/anuj.jpg";
const About = () => {
  const [imageLoading, setImageLoading] = useState(true);
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
          <div className="space-y-6 text-lg">
            <p className="leading-relaxed bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-2xl">
              <span className="text-2xl font-bold text-blue-600 block mb-2">
                I'm Anuj Singh Nainwal
              </span>
              <span className="text-gray-700">
                a Full Stack Developer with{" "}
                <span className="font-semibold text-blue-600">3+ years</span> of
                experience in the MERN stack.
              </span>
            </p>

            <p className="leading-relaxed p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              I specialize in building{" "}
              <span className="text-blue-600">
                secure, scalable web applications
              </span>
              , developing <span className="text-blue-600">RESTful APIs</span>,
              and integrating third-party services like{" "}
              <span className="font-medium">Stripe</span> and{" "}
              <span className="font-medium">Plaid</span>.
            </p>

            <p className="leading-relaxed p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="inline-flex items-center gap-2 mb-2">
                <span className="text-blue-500 text-2xl">⚡</span>
                <span className="font-semibold">Technical Expertise</span>
              </span>
              <br />
              Creating responsive UIs with{" "}
              <span className="font-medium">Material UI</span>,{" "}
              <span className="font-medium">Ant Design</span>, and{" "}
              <span className="font-medium">Tailwind CSS</span>. Strong
              experience in data visualization using{" "}
              <span className="font-medium">ApexCharts</span> and{" "}
              <span className="font-medium">ArcGIS</span>.
            </p>

            <p className="leading-relaxed p-6 bg-blue-50 rounded-2xl text-blue-800">
              <span className="font-semibold block mb-2">
                💡 What drives me
              </span>
              Passionate about <span className="font-bold">clean code</span>,{" "}
              <span className="font-bold">cloud deployment</span> (AWS, Vercel),
              and delivering high-performance, user-friendly solutions.
            </p>
          </div>
          <div className="flex gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/anuj-singh-nainwal/"
              target="_blank"
              className="text-2xl text-gray-600 hover:text-blue-600"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/anujnainwal"
              target="_blank"
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
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1FzWh_4GgDEvPHDhySY1yCLZBGNpZ3v7C"
            download="Anuj_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-fit"
          >
            <FaDownload /> Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative h-[400px] rounded-2xl overflow-hidden"
        >
          {" "}
          {imageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
          )}
          <Image
            src={PersonalImage}
            alt="Developer"
            fill
            className="object-cover rounded-2xl"
            onLoadingComplete={() => setImageLoading(false)}
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
          {skills.map((skill) => (
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
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-500">📍</span>
                    <span className="text-sm text-gray-600">
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">{exp.description}</div>
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
interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: React.ReactNode;
}

const experience: Experience[] = [
  {
    role: "MERN Stack Developer",
    company: "RapidSofts",
    period: "January 2024 - Present",
    location: "Mohali, Punjab",
    description: (
      <ul className="list-disc pl-4 space-y-2 text-gray-600">
        <li>
          Developed scalable web applications using Node.js, Express.js,
          React.js, and MySQL
        </li>
        <li>
          Integrated payment solutions with Stripe for recurring subscriptions
        </li>
        <li>Implemented bank linking functionality using Plaid API</li>
        <li>Added geospatial features using ArcGIS</li>
        <li>Built responsive UIs with Tailwind CSS</li>
        <li>Implemented secure authentication using JWT</li>
      </ul>
    ),
  },
  {
    role: "Associate Software Developer",
    company: "Detroit Software Consultants India Pvt. Ltd.",
    location: "Gurugram, India",
    period: "June 2022 - November 2023",
    description: (
      <ul className="list-disc pl-4 space-y-2 text-gray-600">
        <li>Enhanced web applications using React.js and JavaScript</li>
        <li>Designed and implemented chatbot workflows</li>
        <li>Optimized application performance</li>
        <li>Implemented Firebase push notifications</li>
        <li>Created interactive data visualizations using ApexCharts</li>
      </ul>
    ),
  },
];

export default About;
