
export interface Template {
  id: string;
  name: string;
  description: string;
  image: string;
  demoUrl: string;
  category: string;
  tags: string[];
}

export const templates: Template[] = [
  {
    id: "t1",
    name: "Modern Portfolio - Freyrs",
    description: "A clean, minimalist portfolio template perfect for designers and creatives.",
    image: "images/freyrs.png",
    demoUrl: "https://freyrs.wizcommerce.com/",
    category: "Portfolio",
    tags: ["minimalist", "creative", "professional"]
  },
  {
    id: "t2",
    name: "E-commerce Store - Antique Curiosities",
    description: "A complete e-commerce solution with product listings, cart, and checkout.",
    image: "images/antique.png",
    demoUrl: "https://antiquecuriosities.com/",
    category: "E-commerce",
    tags: ["shop", "business", "retail"]
  },
  {
    id: "t3",
    name: "Fashion Forward rugs - Kas Rugs",
    description: "Professional landing page designed for businesses and startups.",
    image: "images/image.png",
    demoUrl: "https://kasrugs.wizcommerce.com/",
    category: "Business",
    tags: ["corporate", "professional", "business"]
  },
  {
    id: "t4",
    name: "Blog Platform",
    description: "A complete blog template with featured posts, categories, and author profiles.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop",
    demoUrl: "https://example.com/demo/blog",
    category: "Blog",
    tags: ["content", "articles", "writers"]
  },
  {
    id: "t5",
    name: "Restaurant Website",
    description: "Showcase your menu, location, and take reservations with this restaurant template.",
    image: "https://images.unsplash.com/photo-1553527922-767df645c5f5?q=80&w=1170&auto=format&fit=crop",
    demoUrl: "https://example.com/demo/restaurant",
    category: "Food & Beverage",
    tags: ["dining", "food", "hospitality"]
  },
  {
    id: "t6",
    name: "Personal CV",
    description: "Highlight your skills and experience with this professional CV template.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1170&auto=format&fit=crop",
    demoUrl: "https://example.com/demo/cv",
    category: "Resume",
    tags: ["job", "career", "professional"]
  }
];
