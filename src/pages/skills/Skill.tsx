"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <SiReact />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript />, level: 85 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 88 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92 },
      { name: "Redux", icon: <SiRedux />, level: 85 },
      { name: "HTML5", icon: <SiHtml5 />, level: 95 },
      { name: "CSS3", icon: <SiCss3 />, level: 90 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 88 },
      { name: "Express.js", icon: <SiExpress />, level: 85 },
      { name: "MongoDB", icon: <SiMongodb />, level: 82 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
      { name: "Prisma", icon: <SiPrisma />, level: 85 },
    ],
  },
  //   {
  //     title: "DevOps & Tools",
  //     skills: [
  //       { name: "Git", icon: <SiGit />, level: 88 },
  //       { name: "Docker", icon: <SiDocker />, level: 75 },
  //       { name: "AWS", icon: <SiAmazonaws />, level: 70 },
  //     ],
  //   },
];

const Skill = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Professional <span className="text-blue-600">Skills</span>
      </motion.h1>

      <div className="space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-8">{category.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl text-blue-600">{skill.icon}</div>
                    <h3 className="text-lg font-medium">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      className="bg-blue-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-600 text-right">
                    {skill.level}%
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
