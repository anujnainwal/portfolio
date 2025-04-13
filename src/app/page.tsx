import Layout from "@/components/layouts/Layout";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Creative Developer & <br />
              <span className="text-blue-600">Freelance Professional</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Transforming ideas into exceptional digital experiences.
              Specialized in web development and creative solutions.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
                View Projects
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-all">
                Contact Me
              </button>
            </div>
            <div className="flex gap-4 mt-8">
              <FaGithub className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/hero-image.jpg"
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

      {/* Stats Section */}
      <section className="py-20">
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
      </section>
    </Layout>
  );
};

const services = [
  {
    title: "Web Development",
    description:
      "Creating responsive and dynamic web applications using modern technologies.",
    icon: "🌐",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces for better experiences.",
    icon: "🎨",
  },
  {
    title: "Mobile Development",
    description:
      "Building cross-platform mobile applications for iOS and Android.",
    icon: "📱",
  },
];

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

export default Home;
