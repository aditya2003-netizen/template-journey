
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
    image: "images/pdhomes.png",
    demoUrl: "https://pdhome.wizcommerce.com/",
    category: "Blog",
    tags: ["content", "articles", "writers"]
  },
  {
    id: "t5",
    name: "Restaurant Website",
    description: "Showcase your menu, location, and take reservations with this restaurant template.",
    image: "images/creemers.png",
    demoUrl: "https://creemers.wizcommerce.com/",
    category: "Food & Beverage",
    tags: ["dining", "food", "hospitality"]
  },
  {
    id: "t6",
    name: "Howard Elliott",
    description: "Elegant furniture showcase template with product galleries and online ordering.",
    image: "images/howard_elliott.png",
    demoUrl: "https://howardelliott.wizcommerce.com/",
    category: "E-commerce",
    tags: ["furniture", "home", "interior", "shopping"]
  }
];
