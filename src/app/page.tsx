import Layout from "@/components/layouts/Layout";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import PersonalImage from "../../public/images/anuj.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Full Stack Developer & <br />
              <span className="text-blue-600">Software Engineer</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Building innovative digital solutions with cutting-edge
              technologies. Specialized in creating scalable and user-friendly
              applications.
            </p>
            <div className="flex gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-blue-600 cursor-pointer text-white rounded-md hover:bg-blue-700 transition-all"
              >
                View Projects
              </Link>
              <button className="px-6 py-3 border cursor-pointer border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-all">
                Contact Me
              </button>
            </div>
            <div className="flex gap-4 mt-8">
              <Link
                href="https://github.com/anujnainwal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/anuj-singh-nainwal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              </Link>
              <Link href="#!" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src={PersonalImage}
              alt="Developer"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering high-quality solutions across various domains
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Some of my recent work in web development and design
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all inline-block"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section> */}
    </Layout>
  );
};

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications using React, Next.js, and modern frontend technologies.",
    icon: "💻",
  },
  {
    title: "Backend Development",
    description:
      "Creating robust and scalable server-side solutions with Node.js, Express, and various databases.",
    icon: "⚙️",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive user interfaces and experiences that engage and delight users.",
    icon: "🎨",
  },
];

// const stats = [
//   { value: "100+", label: "Projects Completed" },
//   { value: "50+", label: "Happy Clients" },
//   { value: "5+", label: "Years Experience" },
//   { value: "24/7", label: "Support" },
// ];
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with modern features and secure payment integration.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team features.",
    image: "/images/projects/taskapp.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website with smooth animations and responsive design.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["React", "Tailwind", "Framer"],
  },
  {
    title: "Blog Platform",
    description: "A feature-rich blogging platform with CMS integration.",
    image: "/images/projects/blog.jpg",
    technologies: ["Next.js", "MongoDB", "AWS"],
  },
];
export default Home;
