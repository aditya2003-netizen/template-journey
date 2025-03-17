
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
    name: "Modern Portfolio",
    description: "A clean, minimalist portfolio template perfect for designers and creatives.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1074&auto=format&fit=crop",
    demoUrl: "https://example.com/demo/portfolio",
    category: "Portfolio",
    tags: ["minimalist", "creative", "professional"]
  },
  {
    id: "t2",
    name: "E-commerce Storefront",
    description: "A complete e-commerce solution with product listings, cart, and checkout.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1170&auto=format&fit=crop",
    demoUrl: "https://example.com/demo/ecommerce",
    category: "E-commerce",
    tags: ["shop", "business", "retail"]
  },
  {
    id: "t3",
    name: "Corporate Landing Page",
    description: "Professional landing page designed for businesses and startups.",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1170&auto=format&fit=crop",
    demoUrl: "https://example.com/demo/corporate",
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
