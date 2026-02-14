"use client";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import PersonalImage from "../../public/images/anuj.jpg";
import NoImageAvailable from "../../public/images/no-available-image.jpeg";
import Link from "next/link";
import { useContact } from "@/hooks/useContactForm";
import { MdEmail } from "react-icons/md";
// import Modal from "@/components/common/Modal"; // Replaced with Shadcn Dialog
import { getKihaanEnterprisesImage } from "@/common/images"; // Updated import path
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ContactForm from "@/components/forms/ContactForm";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Magnetic from "@/components/ui/magnetic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectStack from "@/components/projects/project-stack";
import BentoGrid from "@/components/services/bento-grid";

const Home = () => {
  const container = React.useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-text-reveal", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        skewY: 7,
      }).from(
        ".hero-image-reveal",
        {
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1",
      );
    },
    { scope: container },
  );

  const [imageLoading, setImageLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div ref={container}>
        {/* Hero Section */}
        <section className="py-20 min-h-[90vh] flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <div className="overflow-hidden">
                  <span className="hero-text-reveal inline-block">
                    Full Stack Engineer
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="hero-text-reveal inline-block text-blue-600">
                    Building Scalable Web Platforms
                  </span>
                </div>
              </h1>
              <div className="overflow-hidden mb-8">
                <p className="hero-text-reveal text-gray-600 text-lg">
                  Specialized in high-performance Next.js applications that
                  drive business growth. Converting complex requirements into
                  seamless digital experiences.
                </p>
              </div>
              <div className="hero-text-reveal flex gap-4">
                <Link href="/projects">
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
                            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <FaLinkedin className="w-5 h-5" />
                            <span>Connect on LinkedIn</span>
                          </a>
                          <a
                            href="mailto:anujsinghnainwal@gmail.com"
                            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <MdEmail className="w-5 h-5" />
                            <span>anujsinghnainwal@gmail.com</span>
                          </a>
                        </div>
                      </div>

                      <ContactForm
                        onSuccess={() => setIsModalOpen(false)}
                        onCancel={() => setIsModalOpen(false)}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="hero-text-reveal flex gap-4 mt-8">
                <Link
                  href="https://github.com/anujnainwal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/anuj-singh-nainwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                </Link>
                <Link href="#!" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="hero-image-reveal relative h-[400px] md:h-[600px] w-full">
              {imageLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
              )}
              <Image
                src={PersonalImage}
                alt="Developer"
                fill
                className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                onLoadingComplete={() => setImageLoading(false)}
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

      {/* Projects Stack Section */}
      <ProjectStack />
    </>
  );
};

// const stats = [
//   { value: "100+", label: "Projects Completed" },
//   { value: "50+", label: "Happy Clients" },
//   { value: "5+", label: "Years Experience" },
//   { value: "24/7", label: "Support" },
// ];

export default Home;
