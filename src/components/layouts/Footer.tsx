"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  // return (
  //   <footer className="bg-[#1f2937] text-white">
  //     {/* Main Container */}
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  //       {/* Newsletter Section */}
  //       <div className="text-center mb-12">
  //         <h3 className="text-2xl font-semibold mb-3">
  //           Subscribe to our newsletter
  //         </h3>
  //         <div className="flex max-w-md mx-auto gap-2">
  //           <input
  //             type="email"
  //             placeholder="Input your email"
  //             className="flex-1 px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
  //           />
  //           <button className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300">
  //             Subscribe
  //           </button>
  //         </div>
  //       </div>

  //       {/* Links Grid */}
  //       <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
  //         <div className="col-span-2">
  //           <Link href="/" className="flex items-center gap-2 mb-4">
  //             <div className="text-2xl font-bold">Creative Portfolio</div>
  //           </Link>
  //         </div>
  //         <div>
  //           <h4 className="font-semibold mb-4">Company</h4>
  //           <ul className="space-y-2">
  //             <li>
  //               <Link
  //                 href="/about"
  //                 className="hover:text-blue-400 transition-colors"
  //               >
  //                 About us
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/features"
  //                 className="hover:text-blue-400 transition-colors"
  //               >
  //                 Features
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/pricing"
  //                 className="hover:text-blue-400 transition-colors"
  //               >
  //                 Pricing
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  //         <div>
  //           <h4 className="font-semibold mb-4">Help</h4>
  //           <ul className="space-y-2">
  //             <li>
  //               <Link
  //                 href="/help"
  //                 className="hover:text-blue-400 transition-colors"
  //               >
  //                 Help Center
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/contact"
  //                 className="hover:text-blue-400 transition-colors"
  //               >
  //                 Contact us
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/faqs"
  //                 className="hover:text-blue-400 transition-colors"
  //               >
  //                 FAQs
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  //         <div>
  //           <h4 className="font-semibold mb-4">Resources</h4>
  //           <ul className="space-y-2">
  //             <li>
  //               <Link
  //                 href="/careers"
  //                 className="hover:text-blue-400 transition-colors"
  //               >
  //                 Careers
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/terms"
  //                 className="hover:text-blue-400 transition-colors"
  //               >
  //                 Terms
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/privacy"
  //                 className="hover:text-blue-400 transition-colors"
  //               >
  //                 Privacy
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>

  //       {/* Bottom Bar */}
  //       <div className="pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
  //         <p className="text-sm text-gray-400">
  //           © 2024 Creative Portfolio. All rights reserved.
  //         </p>
  //         <div className="flex space-x-6">
  //           <Link
  //             href="#"
  //             className="text-gray-400 hover:text-blue-400 transition-colors"
  //           >
  //             <FaTwitter size={20} />
  //           </Link>
  //           <Link
  //             href="#"
  //             className="text-gray-400 hover:text-blue-400 transition-colors"
  //           >
  //             <FaFacebook size={20} />
  //           </Link>
  //           <Link
  //             href="#"
  //             className="text-gray-400 hover:text-blue-400 transition-colors"
  //           >
  //             <FaLinkedin size={20} />
  //           </Link>
  //           <Link
  //             href="#"
  //             className="text-gray-400 hover:text-blue-400 transition-colors"
  //           >
  //             <FaYoutube size={20} />
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );

  return (
    <footer className="bg-[#1f2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold">Anuj Portfolio</div>
            </Link>
            <p className="text-gray-400 mb-4">
              Full Stack Developer specializing in building exceptional digital
              experiences.
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
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  Email Me
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
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
  );
};

export default Footer;
