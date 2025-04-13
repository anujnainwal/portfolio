"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full top-[0] z-[50] backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-20">
          {/* Logo */}
          <Link href="/" className="text-xl sm:text-2xl font-bold text-black">
            Creative Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-10">
            <NavLink href="/" pathname={pathname}>
              Home
            </NavLink>
            <NavLink href="/projects" pathname={pathname}>
              Projects
            </NavLink>
            <NavLink href="/about" pathname={pathname}>
              About
            </NavLink>
            <NavLink href="/skills" pathname={pathname}>
              Skills
            </NavLink>

            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 text-black hover:bg-black/20 rounded-md transition-all duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "opacity-100 visible h-[100vh]" : "opacity-0 invisible"
          } fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-[40]`}
          onClick={() => setIsOpen(false)}
        />
        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full" // Changed from -translate-x-full
          } fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out sm:hidden z-[45]`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="text-xl font-bold">
                Creative Portfolio
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              <NavLink href="/" pathname={pathname}>
                Home
              </NavLink>
              <NavLink href="/projects" pathname={pathname}>
                Projects
              </NavLink>
              <NavLink href="/about" pathname={pathname}>
                About
              </NavLink>
              <NavLink href="/skills" pathname={pathname}>
                Skills
              </NavLink>
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
const NavLink = ({
  href,
  pathname,
  children,
}: {
  href: string;
  pathname: string | null;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <span
      className={`text-[#66656583] relative
          ${
            href === pathname
              ? "text-blue-600 after:w-full"
              : "hover:text-blue-600 after:w-0 hover:after:w-full"
          } 
          font-medium inline-block cursor-pointer
          after:content-[''] after:absolute after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-2
          after:transition-all after:duration-300
        `}
    >
      {children}
    </span>
  </Link>
);
export default Navbar;
