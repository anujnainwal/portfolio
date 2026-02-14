"use client";
import React, { FormEvent, useState, useRef } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowRight } from "react-icons/fa";
import { MdEmail, MdContentCopy, MdCheck } from "react-icons/md";
import { useContact } from "@/hooks/useContactForm";
import Modal from "../common/Modal";
import ContactForm from "../forms/ContactForm";
import Magnetic from "@/components/ui/magnetic";
import { useScroll, useTransform, motion } from "framer-motion";

const ModernFooter = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);
  const container = useRef(null);

  // Parallax effect for the footer
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

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

  const copyEmail = () => {
    navigator.clipboard.writeText("anujsinghnainwal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      ref={container}
      className="relative bg-[#0a0a0a] text-white overflow-hidden pt-0 pb-10 px-0"
    >
      {/* Marquee Section */}
      <div className="w-full bg-blue-600 overflow-hidden py-4 mb-20">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <h2
              key={i}
              className="text-2xl md:text-3xl font-bold uppercase tracking-wider mx-8 text-white/90"
            >
              Let's Work Together — Get in Touch — Start a Project —
            </h2>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 h-full flex flex-col justify-between">
        {/* Contact Modal Logic */}
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            title="Contact Us"
            size="lg"
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

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 md:mb-32">
          <div className="mb-10 md:mb-0">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Have an <br /> <span className="text-gray-600">idea?</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <Magnetic>
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full cursor-pointer hover:bg-gray-200 transition-all group border border-transparent"
                >
                  <span className="text-xl font-medium">Start a Project</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Magnetic>
              <Magnetic>
                <div
                  onClick={copyEmail}
                  className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full cursor-pointer hover:bg-white/10 transition-all group"
                >
                  <span className="text-xl font-medium">
                    anujsinghnainwal@gmail.com
                  </span>
                  {copied ? (
                    <MdCheck className="text-green-400" />
                  ) : (
                    <MdContentCopy className="group-hover:text-blue-400 transition-colors" />
                  )}
                </div>
              </Magnetic>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-right items-start md:items-end">
            <Link
              href="/about"
              className="text-xl text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-xl text-gray-400 hover:text-white transition-colors"
            >
              Work
            </Link>
            <Link
              href="/skills"
              className="text-xl text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </Link>
            <a
              href="mailto:anujsinghnainwal@gmail.com"
              className="text-xl text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <div className="flex gap-6 mb-4 md:mb-0">
            <Magnetic>
              <Link
                href="https://github.com/anujnainwal"
                target="_blank"
                className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all"
              >
                <FaGithub size={24} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="https://www.linkedin.com/in/anuj-singh-nainwal/"
                target="_blank"
                className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all"
              >
                <FaLinkedin size={24} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="#!"
                target="_blank"
                className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all"
              >
                <FaTwitter size={24} />
              </Link>
            </Magnetic>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Anuj Singh</p>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <p>
              Local time:{" "}
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/40 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2"></div>
      </div>
    </footer>
  );
};

export default ModernFooter;
