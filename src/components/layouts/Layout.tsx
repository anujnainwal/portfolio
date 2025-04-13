"use client";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-3.5" style={{ paddingTop: 85 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">{children}</div>
        </div>
      </main>
      <ScrollToTop
        threshold={500}
        className="bg-purple-600 hover:bg-purple-700"
      />
      <Footer />
    </div>
  );
};

export default Layout;
