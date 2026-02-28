"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  FaCode,
  FaServer,
  FaPaintBrush,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, pixel-perfect web applications with modern frameworks.",
    icon: <FaCode className="w-6 h-6" />,
    className: "md:col-span-2",
  },
  {
    title: "Backend Architecture",
    description: "Robust and scalable server-side solutions.",
    icon: <FaServer className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user experiences.",
    icon: <FaPaintBrush className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Mobile First",
    description: "Seamless experiences across all devices.",
    icon: <FaMobileAlt className="w-6 h-6" />,
    className: "md:col-span-2",
  },
  {
    title: "Performance Optimization",
    description: "Speed and efficiency at the core.",
    icon: <FaRocket className="w-6 h-6" />,
    className: "md:col-span-3",
  },
];

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4">
      {services.map((service, i) => (
        <BentoCard key={i} service={service} index={i} />
      ))}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BentoCard({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-xl border border-gray-100",
        service.className,
      )}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-500 leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
