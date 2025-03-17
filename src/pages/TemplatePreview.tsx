
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TemplateData {
  siteName: string;
  tagline: string;
  description: string;
  primaryColor: string;
  contactEmail: string;
  templateId: string;
  templateName: string;
  templateImage: string;
  templateUrl: string;
}

const TemplatePreview = () => {
  const navigate = useNavigate();
  const [templateData, setTemplateData] = useState<TemplateData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve the template data from localStorage
    const storedData = localStorage.getItem('templateData');
    if (storedData) {
      setTemplateData(JSON.parse(storedData));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!templateData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-medium mb-4">No template data found</h1>
        <p className="text-muted-foreground mb-6">Please select a template and customize it first</p>
        <Button onClick={() => navigate('/')}>
          Return to templates
        </Button>
      </div>
    );
  }

  const { siteName, tagline, description, primaryColor, contactEmail, templateUrl } = templateData;

  // Select the appropriate template based on the demoUrl
  const renderTemplatePreview = () => {
    // Extract domain from URL to identify which template to use
    const urlDomain = templateUrl.includes('wizcommerce.com') 
      ? templateUrl.split('//')[1].split('.wizcommerce')[0]
      : '';

    switch (urlDomain) {
      case 'freyrs':
        return <FreyrsTemplate data={templateData} />;
      case 'antiquecuriosities':
        return <AntiqueTemplate data={templateData} />;
      case 'kasrugs':
        return <KasRugsTemplate data={templateData} />;
      case 'pdhome':
        return <BlogTemplate data={templateData} />;
      case 'creemers':
        return <RestaurantTemplate data={templateData} />;
      case 'howardelliott':
        return <CVTemplate data={templateData} />;
      default:
        return <FreyrsTemplate data={templateData} />; // Default to Freyrs template
    }
  };

  return (
    <div style={{ "--primary-color": primaryColor } as React.CSSProperties}>
      <header className="fixed top-0 left-0 right-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Templates
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">Download</Button>
            <Button>Edit Template</Button>
          </div>
        </div>
      </header>

      <div className="pt-20">
        {renderTemplatePreview()}
      </div>
    </div>
  );
};

// Template-specific components
interface TemplateComponentProps {
  data: TemplateData;
}

const FreyrsTemplate = ({ data }: TemplateComponentProps) => {
  const { siteName, tagline, description, primaryColor, contactEmail } = data;
  return (
    <>
      <section className="min-h-[80vh] bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: primaryColor }}>
            {siteName}
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 max-w-2xl">
            {tagline}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="px-8 py-6 text-lg"
              style={{ backgroundColor: primaryColor }}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">My Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg group">
                <div className="aspect-square bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-light text-gray-400">
                    Project {item}
                  </div>
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white">View Project</Button>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-medium">Project Title {item}</h3>
                <p className="text-muted-foreground">Design / Photography</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: primaryColor }}>
                {siteName}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
                © {new Date().getFullYear()} {siteName}. All rights reserved.
              </p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-300">
                Contact: <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const AntiqueTemplate = ({ data }: TemplateComponentProps) => {
  const { siteName, tagline, description, primaryColor, contactEmail } = data;
  return (
    <>
      <section className="min-h-[70vh] bg-amber-50 dark:bg-amber-950 flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6" style={{ color: primaryColor }}>
            {siteName}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
            {tagline}
          </p>
          <Button 
            className="px-8 py-3 text-lg rounded-none font-serif"
            style={{ backgroundColor: primaryColor }}
          >
            Shop Collection
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-12 text-center">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="aspect-[3/4] bg-amber-100 dark:bg-amber-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-3xl font-serif text-amber-500">
                    Item {item}
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-serif">Antique Item {item}</h3>
                  <p className="text-muted-foreground">$199.99</p>
                  <Button 
                    variant="outline" 
                    className="mt-2 w-full rounded-none"
                    style={{ borderColor: primaryColor, color: primaryColor }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-amber-100 dark:bg-amber-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif mb-4" style={{ color: primaryColor }}>
            {siteName}
          </h2>
          <p className="mb-4">
            {description}
          </p>
          <p className="text-amber-800 dark:text-amber-300">
            Contact: <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a>
          </p>
          <p className="mt-6 text-sm">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

const KasRugsTemplate = ({ data }: TemplateComponentProps) => {
  const { siteName, tagline, description, primaryColor, contactEmail } = data;
  return (
    <>
      <section className="min-h-[70vh] bg-neutral-100 dark:bg-neutral-900">
        <div className="grid md:grid-cols-2 h-full">
          <div className="flex items-center justify-center p-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: primaryColor }}>
                {siteName}
              </h1>
              <p className="text-xl mb-6">
                {tagline}
              </p>
              <p className="mb-8 text-muted-foreground">
                {description}
              </p>
              <Button 
                className="px-8 py-3"
                style={{ backgroundColor: primaryColor }}
              >
                Shop Now
              </Button>
            </div>
          </div>
          <div className="bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
            <div className="text-4xl font-light text-neutral-400 p-12">
              Featured Product Image
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: primaryColor }}>
            Product Categories
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Modern", "Traditional", "Vintage", "Outdoor"].map((category, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-square bg-neutral-200 dark:bg-neutral-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {category}
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-medium text-center">{category} Rugs</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: primaryColor }}>
                {siteName}
              </h2>
              <p className="text-muted-foreground">
                {description}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Shop", "About", "Contact"].map((link, idx) => (
                  <li key={idx}><a href="#" className="hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <p className="mb-2">Email: <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a></p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p>Address: 123 Rug Street, Floor City</p>
            </div>
          </div>
          <div className="border-t border-neutral-200 dark:border-neutral-800 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} {siteName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

const BlogTemplate = ({ data }: TemplateComponentProps) => {
  const { siteName, tagline, description, primaryColor, contactEmail } = data;
  return (
    <>
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: primaryColor }}>
            {siteName}
          </h1>
          <p className="text-xl mb-12 text-muted-foreground">
            {tagline}
          </p>
          
          <article className="prose dark:prose-invert lg:prose-xl max-w-none">
            <h2>Welcome to our Blog</h2>
            <p>{description}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt 
              consectetur, nisi elit lacinia nisi, nec ultricies nisi elit ut nisi. Sed euismod, urna 
              eu tincidunt consectetur, nisi elit lacinia nisi, nec ultricies nisi elit ut nisi.
            </p>
            <h3>Recent Articles</h3>
            <div className="not-prose">
              <div className="grid gap-8 mt-8">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border-b pb-8 last:border-0">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-800 mb-4 flex items-center justify-center">
                      <span className="text-gray-400">Featured Image {item}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Article Title {item}</h3>
                    <p className="text-sm text-muted-foreground mb-3">Posted on January {item}, 2023 • 5 min read</p>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt 
                      consectetur, nisi elit lacinia nisi, nec ultricies nisi elit ut nisi.
                    </p>
                    <Button variant="outline" style={{ color: primaryColor, borderColor: primaryColor }}>
                      Read More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer className="py-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>
                {siteName}
              </h2>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {siteName}. All rights reserved.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm">
                Contact: <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const RestaurantTemplate = ({ data }: TemplateComponentProps) => {
  const { siteName, tagline, description, primaryColor, contactEmail } = data;
  return (
    <>
      <section className="min-h-[70vh] bg-neutral-900 text-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6" style={{ color: primaryColor }}>
            {siteName}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-xl mx-auto">
            {tagline}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="px-8 py-3 text-lg"
              style={{ backgroundColor: primaryColor }}
            >
              Our Menu
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-3 text-lg border-white text-white"
            >
              Reservations
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-4 text-center">About Us</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            {description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {["Breakfast", "Lunch", "Dinner"].map((meal, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" 
                  style={{ backgroundColor: primaryColor }}
                >
                  <span className="text-white font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-medium">{meal}</h3>
                <p className="text-muted-foreground mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-12 text-center">Special Dishes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="w-24 h-24 bg-neutral-200 dark:bg-neutral-800 flex-shrink-0 flex items-center justify-center">
                  <span className="text-neutral-400">Dish {item}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Special Dish {item}</h3>
                  <p className="text-muted-foreground mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="font-medium" style={{ color: primaryColor }}>$19.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif mb-2" style={{ color: primaryColor }}>
              {siteName}
            </h2>
            <p className="text-neutral-400">123 Dining Street, Food City</p>
            <p className="text-neutral-400">Phone: (555) 123-4567</p>
            <p className="text-neutral-400">
              Email: <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a>
            </p>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-center">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} {siteName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

const CVTemplate = ({ data }: TemplateComponentProps) => {
  const { siteName, tagline, description, primaryColor, contactEmail } = data;
  return (
    <>
      <section className="min-h-[70vh] bg-gray-50 dark:bg-gray-900 flex items-center">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="aspect-square w-48 h-48 mx-auto md:mx-0 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-gray-400">Photo</span>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: primaryColor }}>
                {siteName}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-4 text-muted-foreground">
                {tagline}
              </p>
              <p className="mb-6">
                {description}
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button 
                  className="px-4 py-2"
                  style={{ backgroundColor: primaryColor }}
                >
                  Download CV
                </Button>
                <Button variant="outline" className="px-4 py-2">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b" style={{ color: primaryColor }}>
            Experience
          </h2>
          
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="grid md:grid-cols-4 gap-4">
                <div>
                  <p className="font-medium">2020 - Present</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-medium">Job Title {item}</h3>
                  <p className="text-muted-foreground mb-2">Company Name {item}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt
                    consectetur, nisi elit lacinia nisi, nec ultricies nisi elit ut nisi.
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold mt-16 mb-8 pb-4 border-b" style={{ color: primaryColor }}>
            Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6", "Skill 7", "Skill 8"].map((skill, idx) => (
              <div key={idx} className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-2">
            Contact me at: <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a>
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default TemplatePreview;
