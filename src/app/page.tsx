"use client";
import Layout from "@/components/layouts/Layout";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import PersonalImage from "../../public/images/anuj.jpg";
import NoImageAvailable from "../../public/images/no-available-image.jpeg";
import Link from "next/link";
import { useContact } from "@/hooks/useContactForm";
import { MdEmail } from "react-icons/md";
import Modal from "@/components/common/Modal";
import { getKihaanEnterprisesImage } from "@/comman/comman";

const Home = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const [projectImagesLoading, setProjectImagesLoading] = useState<boolean[]>(
    new Array(projects.length).fill(true)
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { sendContactForm, loading, error, success } = useContact();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await sendContactForm(formData);
    if (result) {
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setIsSuccess(false);
        setIsModalOpen(false);
      }, 2000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
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
              <button
                className="px-6 py-3 border cursor-pointer border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-all"
                onClick={() => setIsModalOpen(true)}
              >
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
        <div className="grid md:grid-cols-2 gap-8 mb-5">
          {projects.length > 0 ? (
            projects.slice(0, 4).map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group overflow-hidden border border-gray-100"
              >
                <div className="relative h-[250px] rounded-t-2xl overflow-hidden">
                  {projectImagesLoading[index] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}
                  <Image
                    src={project?.image || NoImageAvailable}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={100}
                    priority={index < 2}
                    className="object-cover object-top w-full h-full scale-125 transition-all duration-[1.5s] ease-in-out group-hover:translate-y-[-20%] animate-fastScroll"
                    onLoadingComplete={() => {
                      const newLoadingState = [...projectImagesLoading];
                      newLoadingState[index] = false;
                      setProjectImagesLoading(newLoadingState);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-blue-50/50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 ${
                        project.live ? "flex-1" : "w-full"
                      } px-6 py-3 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors`}
                    >
                      <FaGithub className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 bg-gray-50 rounded-2xl">
              <p className="text-gray-600 font-medium">No Projects Found</p>
            </div>
          )}
        </div>
        {projects.length !== 0 && (
          <div className="text-center">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all inline-block"
            >
              View All Projects
            </Link>
          </div>
        )}
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
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          title="Contact Us"
          size="md"
          // onClose={() => setIsModalOpen(false)}
          onClose={() => {
            if (!loading) {
              setIsModalOpen(false);
              setFormData({ name: "", email: "", subject: "", message: "" });
            }
          }}
        >
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

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                  {error}
                </div>
              )}
              {isSuccess && (
                <div className="p-3 bg-green-50 text-green-600 rounded-lg flex items-center justify-between">
                  <span>{success}</span>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  minLength={3}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={loading}
                  className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || success !== null}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : success ? "Sent!" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
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

interface Project {
  title: string;
  description: string;
  image?: any;
  technologies: string[];
  github: string;
  live?: string;
}
const projects: Project[] = [
  {
    title: "Kihaan Enterprises",
    description:
      "Kihaan Enterprises is a full-service electrical contractor based in Dehradun, Uttarakhand, offering comprehensive solutions across residential, commercial, and industrial sectors. With a focus on reliability, safety, and customer satisfaction, they provide everything from electrical design and installation to CCTV and air-conditioning services, backed by a 100% satisfaction guarantee.",
    image: getKihaanEnterprisesImage.previewUrl,
    technologies: [
      "Html",
      "Css",
      "TailwindCss",
      "Node.js",
      "Express.js",
      "Mongodb",
    ],
    github: "#!",
    live: "https://www.kihaanenterprises.com/",
  },
  // {
  //   title: "Task Management App",
  //   description:
  //     "A collaborative task management tool with real-time updates and team features.",
  //   // image: "/images/projects/taskapp.jpg",
  //   technologies: ["Next.js", "TypeScript", "Prisma"],
  // },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "A modern portfolio website with smooth animations and responsive design.",
  //   // image: "/images/projects/portfolio.jpg",
  //   technologies: ["React", "Tailwind", "Framer"],
  // },
  // {
  //   title: "Blog Platform",
  //   description: "A feature-rich blogging platform with CMS integration.",
  //   // image: "/images/projects/blog.jpg",
  //   technologies: ["Next.js", "MongoDB", "AWS"],
  // },
];
export default Home;
