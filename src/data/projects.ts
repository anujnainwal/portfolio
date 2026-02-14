import { getKihaanEnterprisesImage } from "@/common/images";

export interface Project {
  title: string;
  description: string;
  image?: any;
  technologies: string[];
  github: string;
  live?: string;
  color: string; 
}

export const projects: Project[] = [
  {
    title: "Kihaan Enterprises",
    description:
      "Complete digital transformation for a leading electrical contractor. Built a high-performance React platform that digitized their service catalog, integrated a real-time inquiry system, and improved local SEO visibility.",
    image: getKihaanEnterprisesImage.previewUrl,
    technologies: [
      "Html",
      "Css",
      "TailwindCss",
      "Node.js",
      "Express.js",
      "Mongodb",
    ],
    github: "#!",
    live: "https://www.kihaanenterprises.com/",
    color: "#BBACAF", 
  },
  {
     title: "Modern Portfolio",
     description: "A high-performance personal portfolio website featuring GSAP animations, 3D interactions, and a clean, accessible UI built with Next.js and Tailwind CSS.",
     // image: "/images/projects/portfolio.jpg", // Placeholder if needed
     technologies: ["Next.js", "GSAP", "Tailwind", "React"],
     github: "https://github.com/anujnainwal/portfolio",
     live: "https://portfolio-anujnainwal.vercel.app/",
     color: "#977F6D",
  },
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics. Features dark mode, real-time data visualization, and role-based access control.",
    technologies: ["React", "TypeScript", "Recharts", "Firebase"],
    github: "#", 
    live: "#",
    color: "#C2491D",
  }
];
