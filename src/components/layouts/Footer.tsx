"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContact } from "@/hooks/useContactForm";
import Modal from "../common/Modal";

const Footer = () => {
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
    <>
      {" "}
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
      <footer className="bg-[#1f2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="text-2xl font-bold">Anuj Portfolio</div>
              </Link>
              <p className="text-gray-400 mb-4">
                Full Stack Developer specializing in building exceptional
                digital experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Skills
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <span
                    className="hover:text-blue-400 transition-colors cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get in Touch
                  </span>
                </li>
                <li>
                  <a
                    href="mailto:anujsinghnainwal@gmail.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Email Me
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1FzWh_4GgDEvPHDhySY1yCLZBGNpZ3v7C/view?usp=sharing"
                    download="Anuj_Singh_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Anuj Singh. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://github.com/anujnainwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/anuj-singh-nainwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
