import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anuj Singh - Full Stack Engineer",
  description:
    "Portfolio of Anuj Singh, a Full Stack Engineer specializing in scalable web platforms and high-performance Next.js applications.",
  openGraph: {
    title: "Anuj Singh - Full Stack Engineer",
    description:
      "Building scalable web platforms with Next.js, React, and Node.js.",
    type: "website",
    images: ["/images/anuj.jpg"], // Ensure this image exists in public/images
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
