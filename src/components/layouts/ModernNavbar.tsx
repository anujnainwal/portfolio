"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "@/components/ui/magnetic";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
];

const ModernNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "py-4" : "py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`mx-auto transition-all duration-300 rounded-full px-6 py-3 flex items-center justify-between ${
              isScrolled
                ? "bg-white/80 backdrop-blur-md shadow-lg border border-white/20 max-w-5xl"
                : "bg-transparent max-w-7xl"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="z-50 relative group">
              <span className="text-xl font-bold tracking-tight group-hover:opacity-70 transition-opacity">
                Anuj Singh
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <Magnetic key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors hover:text-blue-600 ${
                      pathname === link.href ? "text-blue-600" : "text-gray-600"
                    }`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 top-full block h-[1px] w-full bg-blue-600"
                      />
                    )}
                  </Link>
                </Magnetic>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Magnetic>
                <Button className="rounded-full px-6" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
              </Magnetic>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden z-50 p-2 text-gray-600 hover:text-black transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-white md:hidden flex flex-col items-center justify-center"
          >
            <nav
              className="flex flex-col items-center gap-8"
              aria-label="Mobile Navigation"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className={`text-4xl font-bold transition-colors hover:text-blue-600 ${
                      pathname === link.href ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  size="lg"
                  className="rounded-full text-lg px-8 py-6 mt-4"
                  asChild
                  onClick={toggleMenu}
                >
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModernNavbar;
