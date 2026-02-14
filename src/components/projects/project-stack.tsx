"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ProjectStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div ref={container} className="relative mt-[10vh] mb-[10vh]">
      <div className="md:sticky top-0 h-auto md:h-[30vh] flex items-center justify-center pointer-events-none mb-10 z-0">
        <div className="text-center md:absolute top-10 w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Selected Works
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-lg leading-relaxed">
              A curated selection of projects that demonstrate product thinking
              and technical execution.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col gap-10 md:gap-0">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              isMobile={isMobile}
            />
          );
        })}
      </div>
    </div>
  );
}

const Card = ({
  i,
  id,
  title,
  shortDescription,
  challenge,
  technologies,
  live,
  github,
  image,
  color,
  progress,
  range,
  targetScale,
  isMobile,
}: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Determine if image is external string or imported asset
  const isExternalImage =
    typeof image === "string" &&
    (image.startsWith("http") || image.startsWith("/"));

  // On mobile, check if we should disable the sticky/scale effects
  // We'll just render a standard card block
  if (isMobile) {
    return (
      <div className="px-4 w-full">
        <div
          className="flex flex-col rounded-[30px] overflow-hidden shadow-xl border border-gray-100"
          style={{ backgroundColor: color || "#1e1e1e" }}
        >
          {/* Image generic */}
          <div className="relative w-full h-[250px]">
            {image ? (
              isExternalImage ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={image || "/images/no-image.jpg"}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white/50">
                <span className="text-xl font-bold">{title}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-white/90 text-base mb-6">{shortDescription}</p>
            <Link href={`/projects/${id}`}>
              <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-full h-12 font-medium">
                View Case Study <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4"
    >
      <motion.div
        className="relative flex flex-col md:flex-row w-full max-w-[1100px] h-[600px] md:h-[650px] rounded-[30px] overflow-hidden shadow-2xl origin-top border border-gray-100/10"
        style={{
          backgroundColor: color || "#1e1e1e",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        {/* Content Side */}
        <div className="flex flex-col justify-between w-full md:w-[45%] p-8 md:p-12 relative z-10">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {title}
              </h3>
            </div>

            <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium">
              {shortDescription}
            </p>

            {challenge && (
              <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <h4 className="text-white/60 text-sm uppercase tracking-wider font-bold mb-2">
                  The Challenge
                </h4>
                <p className="text-white/80 text-sm line-clamp-3">
                  {challenge}
                </p>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech: string, j: number) => (
                <span
                  key={j}
                  className="px-3 py-1 bg-white/10 backdrop-blur-md text-white/90 rounded-full text-sm border border-white/10"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="px-3 py-1 bg-white/5 text-white/60 rounded-full text-sm">
                  +{technologies.length - 4}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href={`/projects/${id}`} className="flex-1 md:flex-none">
                <Button className="w-full md:w-auto bg-white text-black hover:bg-gray-200 rounded-full h-12 px-8 font-medium transition-transform hover:scale-105 flex items-center gap-2">
                  View Case Study <ArrowRight size={18} />
                </Button>
              </Link>

              <div className="flex gap-2">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Site"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-12 h-12 border-white/20 bg-transparent text-white hover:bg-white/10"
                      title="Live Site"
                    >
                      <ExternalLink size={20} />
                    </Button>
                  </a>
                )}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Source"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-12 h-12 border-white/20 bg-transparent text-white hover:bg-white/10"
                    title="View Source"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image Side - Clickable to case study */}
        <Link
          href={`/projects/${id}`}
          className="relative w-full md:w-[60%] h-full md:h-full overflow-hidden block group cursor-pointer"
        >
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full relative"
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 text-white font-medium flex items-center gap-2">
                Explore Project <ArrowRight size={18} />
              </div>
            </div>
            {image ? (
              isExternalImage ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-left-top"
                />
              ) : (
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-left-top"
                />
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white/50">
                <span className="text-xl font-bold">{title}</span>
              </div>
            )}
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};
