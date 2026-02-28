"use client";

import React from "react";
import ContactForm from "@/components/forms/ContactForm";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration?
            I'd love to hear from you. Fill out the form below or reach out via
            social media.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Connect with me
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:anujsinghnainwal@gmail.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <MdEmail className="w-5 h-5" />
                  <span className="text-sm">anujsinghnainwal@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/anuj-singh-nainwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/anujnainwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://twitter.com/in/anuj-singh-nainwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-400 transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                  <span className="text-sm">Twitter</span>
                </a>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Let's Build Something
              </h3>
              <p className="text-sm text-blue-700">
                I'm currently available for freelance projects and open to
                full-time opportunities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
