export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

export const SHOW_TESTIMONIALS = true;

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Solutions",
    quote:
      "Anuj transformed our outdated platform into a high-performance machine. His attention to detail and ability to solve complex technical challenges is unmatched.",
    image: "/images/no-image.jpg",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateX",
    quote:
      "Working with Anuj was a game-changer for our startup. He didn't just write code; he helped shape the product strategy and delivered a pixel-perfect MVP ahead of schedule.",
    image: "/images/no-image.jpg",
  },
  {
    id: "3",
    name: "Emily Davis",
    role: "Marketing Director",
    company: "GrowthGuru",
    quote:
      "The new website Anuj built for us increased our conversion rates by 40%. His understanding of SEO and user experience played a huge role in our recent success.",
    image: "/images/no-image.jpg",
  },
  {
    id: "4",
    name: "David Wilson",
    role: "Founder",
    company: "NextGen Apps",
    quote:
      "Anuj is a rare find—a developer with a keen eye for design. The animations and interactions he implemented made our app feel truly premium.",
    image: "/images/no-image.jpg",
  },
];
