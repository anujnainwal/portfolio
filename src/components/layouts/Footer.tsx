"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { useContact } from "@/hooks/useContactForm";
import Modal from "../common/Modal";
import ContactForm from "../forms/ContactForm";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  /* const { sendContactForm, loading, error, success } = useContact();
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }; */
  return (
    <>
      {" "}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          title="Contact Us"
          size="lg"
          // onClose={() => setIsModalOpen(false)}
          onClose={() => setIsModalOpen(false)}
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

            <ContactForm
              onSuccess={() => setIsModalOpen(false)}
              onCancel={() => setIsModalOpen(false)}
            />
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
