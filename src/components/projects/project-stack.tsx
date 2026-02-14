"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useScroll, useTransform, motion } from "framer-motion";
import NoImageAvailable from "../../../public/images/no-available-image.jpeg";

export default function ProjectStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative mt-[10vh]">
      <div className="sticky top-0 h-[50vh] flex items-center justify-center pointer-events-none mb-10">
        <div className="text-center absolute top-20 w-full px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Selected Works
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-lg leading-relaxed">
            A curated selection of projects that demonstrate product thinking
            and technical execution.
          </p>
        </div>
      </div>

      {projects.map((project, i) => {
        // Calculate dynamic scaling for the stack effect
        // We need 'targetScale' to make the card smaller as it goes up
        const targetScale = 1 - (projects.length - i) * 0.05;

        return (
          <Card
            key={i}
            i={i}
            {...project}
            progress={scrollYProgress}
            // Range for animation: Start slightly before creating a smooth entrance
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}

const Card = ({
  i,
  title,
  description,
  technologies,
  live,
  github,
  image,
  color,
  progress,
  range,
  targetScale,
}: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Scale animation as it scrolls up
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    // Sticky container creates the stack effect natively with CSS
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="relative flex flex-col md:flex-row w-full max-w-[1000px] h-[500px] md:h-[600px] rounded-[30px] overflow-hidden shadow-2xl origin-top"
        style={{
          backgroundColor: color || "#1e1e1e",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        {/* Content Side */}
        <div className="flex flex-col justify-between w-full md:w-[45%] p-8 md:p-12 relative z-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {title}
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech: string, j: number) => (
                <span
                  key={j}
                  className="px-3 py-1 bg-white/10 backdrop-blur-md text-white/90 rounded-full text-sm border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {live && (
                <a href={live} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-black hover:bg-gray-100 rounded-full h-12 px-8 font-medium transition-transform hover:scale-105">
                    Visit Site
                  </Button>
                </a>
              )}
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-white/20 text-white bg-transparent hover:bg-white/10 rounded-full h-12 px-6 gap-2 transition-transform hover:scale-105"
                >
                  <FaGithub className="w-5 h-5" /> Code
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative w-full md:w-[60%] h-full md:h-full overflow-hidden">
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full relative"
          >
            <Image
              src={image || NoImageAvailable}
              alt={title}
              fill
              className="object-cover object-left-top"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
