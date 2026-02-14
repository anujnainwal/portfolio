"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import PersonalImage from "../../public/images/anuj.jpg";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Magnetic from "@/components/ui/magnetic";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { SHOW_TESTIMONIALS } from "@/data/testimonials";

// Lazy load heavy interactive components
const ProjectStack = dynamic(
  () => import("@/components/projects/project-stack"),
  {
    loading: () => <div className="h-screen bg-transparent" />,
    ssr: false,
  },
);
const BentoGrid = dynamic(() => import("@/components/services/bento-grid"), {
  loading: () => <div className="h-[50vh] bg-transparent" />,
});
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  {
    loading: () => <div className="h-[40vh] bg-transparent" />,
  },
);
const ContactFormLoader = dynamic(
  () => import("@/components/forms/ContactForm"),
  {
    loading: () => (
      <div className="h-[300px] flex items-center justify-center">
        Loading form...
      </div>
    ),
  },
);

const Home = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="py-20 min-h-[90vh] flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              >
                <span className="block">Full Stack Engineer</span>
                <span className="block text-blue-600">
                  Building Scalable Web Platforms
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="overflow-hidden mb-8"
              >
                <p className="text-gray-600 text-lg">
                  Specialized in high-performance Next.js applications that
                  drive business growth. Converting complex requirements into
                  seamless digital experiences.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <Link href="/projects" aria-label="View Projects">
                  <Magnetic>
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 h-12 text-base"
                    >
                      View Projects
                    </Button>
                  </Magnetic>
                </Link>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <div>
                      <Magnetic>
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 h-12 text-base"
                        >
                          Start a Project
                        </Button>
                      </Magnetic>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Let's Build Something Amazing</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
                        <div className="flex flex-col gap-3">
                          <a
                            href="https://www.linkedin.com/in/anuj-singh-nainwal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Connect on LinkedIn"
                            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <FaLinkedin className="w-5 h-5" />
                            <span>Connect on LinkedIn</span>
                          </a>
                          <a
                            href="mailto:anujsinghnainwal@gmail.com"
                            aria-label="Send email to anujsinghnainwal@gmail.com"
                            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <MdEmail className="w-5 h-5" />
                            <span>anujsinghnainwal@gmail.com</span>
                          </a>
                        </div>
                      </div>

                      <ContactFormLoader
                        onSuccess={() => setIsModalOpen(false)}
                        onCancel={() => setIsModalOpen(false)}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4 mt-8">
                <Link
                  href="https://github.com/anujnainwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub Profile"
                >
                  <FaGithub className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/anuj-singh-nainwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn Profile"
                >
                  <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="#!"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Twitter Profile"
                >
                  <FaTwitter className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <div className="relative h-[400px] md:h-[600px] w-full">
              {imageLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
              )}
              <Image
                src={PersonalImage}
                alt="Developer Anuj Singh"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering high-quality solutions across various domains
          </p>
        </div>
        <BentoGrid />
      </section>

      {/* Client Reviews Section */}
      {SHOW_TESTIMONIALS && <Testimonials />}

      {/* Projects Stack Section */}
      <ProjectStack />
    </>
  );
};

export default Home;
