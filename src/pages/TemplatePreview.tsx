
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

  const { siteName, tagline, description, primaryColor, contactEmail } = templateData;

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
        {/* This is a simplified version inspired by the freyrs.wizcommerce.com design */}
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <div 
                    className="w-12 h-12 mb-4 rounded-full flex items-center justify-center" 
                    style={{ backgroundColor: primaryColor }}
                  >
                    <span className="text-white font-bold">{item}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Service {item}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tempor
                  </p>
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
      </div>
    </div>
  );
};

export default TemplatePreview;
