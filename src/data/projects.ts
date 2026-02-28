import { getKihaanEnterprisesImage } from "@/common/images";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  technologies: string[];
  github: string;
  live: string;
  color: string;
  category: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  screenshots: string[];
  year: string;
  role: string;
  video?: string;
}

export const projects: Project[] = [
  {
    id: "kihaan-enterprises",
    title: "Kihaan Enterprises",
    shortDescription: "Digital transformation for a leading electrical contractor.",
    fullDescription:
      "A complete digital overhaul for Kihaan Enterprises, a premier electrical contracting firm. The goal was to replace an outdated static site with a dynamic, high-performance platform that could handle real-time service inquiries and showcase their extensive portfolio of industrial and commercial projects.",
    image: getKihaanEnterprisesImage.previewUrl,
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Framer Motion",
    ],
    github: "#", // Private repo
    live: "https://www.kihaanenterprises.com/",
    color: "#BBACAF",
    category: "Full Stack",
    challenge:
      "The client struggled with a slow, non-responsive website that failed to convert visitors. They needed a system to manage service requests efficiently and a visual identity that reflected their market leadership.",
    solution:
      "I engineered a custom Next.js solution with Server Side Rendering (SSR) for optimal SEO. I implemented a responsive design system using Tailwind CSS and integrated a custom backend for processing inquiries, resulting in a 40% increase in lead generation.",
    keyFeatures: [
      "Real-time Inquiry System",
      "Dynamic Service Catalog",
      "SEO Optimized Architecture",
      "Admin Dashboard for Lead Management",
      "Responsive Mobile-First Design",
    ],
    screenshots: [
        "/images/no-image.jpg",
        "/images/no-image.jpg",
        "/images/no-image.jpg"
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
    year: "2024",
    role: "Lead Full Stack Engineer",
  },
  {
    id: "modern-portfolio",
    title: "Modern Portfolio",
    shortDescription: "High-performance personal portfolio with 3D interactions.",
    fullDescription:
      "A cutting-edge personal portfolio website designed to push the boundaries of web performance and interactivity. It serves as a playground for experimenting with new web technologies like GSAP and Three.js while showcasing my professional work.",
    image: "/images/no-image.jpg", // Using default image
    technologies: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS", "React"],
    github: "https://github.com/anujnainwal/portfolio",
    live: "https://portfolio-anujnainwal.vercel.app/",
    color: "#977F6D",
    category: "Frontend",
    challenge:
      "Creating a unique developer portfolio that stands out in a crowded market without sacrificing accessibility or performance.",
    solution:
      "Leveraged Next.js for speed and SEO, combined with GSAP for high-performance animations. The design focuses on minimalism and content hierarchy, ensuring that the work takes center stage.",
    keyFeatures: [
      "Custom GSAP Animations",
      "Page Transitions",
      "Bento Grid Layout",
      "Dark/Light Mode Support",
      "Fully Accessible Components",
    ],
    screenshots: [
         "/images/no-image.jpg",
         "/images/no-image.jpg"
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
    year: "2023",
    role: "Frontend Engineer / Designer",
  },
  {
    id: "e-commerce-dashboard",
    title: "E-Commerce Dashboard",
    shortDescription: "Comprehensive admin dashboard for retail analytics.",
    fullDescription:
      "A powerful analytics and management dashboard for a mock e-commerce platform. It provides real-time insights into sales, inventory levels, and customer behavior, wrapped in a clean, intuitive interface.",
    image: "/images/no-image.jpg", // Using default image
    technologies: ["React", "TypeScript", "Recharts", "Firebase", "Redux"],
    github: "#",
    live: "#",
    color: "#C2491D",
    category: "Web App",
    challenge:
      "Visualizing complex data sets in a way that is immediately understandable for non-technical stakeholders.",
    solution:
      "Utilized Recharts for composable charting and Firebase for real-time data synchronization. Implemented a modular component architecture allowing for easy expansion of dashboard widgets.",
    keyFeatures: [
      "Real-time Data Visualization",
      "Role-Based Access Control",
      "Inventory Management",
      "Order Processing System",
      "Exportable Reports",
    ],
    screenshots: [],
    year: "2023",
    role: "Frontend Developer",
  },
];
