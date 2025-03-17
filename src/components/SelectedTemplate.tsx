
import { useState } from "react";
import { X, ExternalLink, Check } from "lucide-react";
import { Template } from "@/data/templates";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import TemplateForm from "./TemplateForm";

interface SelectedTemplateProps {
  template: Template;
  onClose: () => void;
}

const SelectedTemplate = ({ template, onClose }: SelectedTemplateProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  const handleUseTemplate = () => {
    setShowForm(true);
  };

  if (showForm) {
    return <TemplateForm template={template} onClose={onClose} />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden relative max-h-[90vh] animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-10  p-1.5 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="grid md:grid-cols-2 h-full">
          <div className="relative aspect-video md:aspect-auto w-full h-full overflow-hidden bg-black">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse-subtle" />
            )}
            <img 
              src={template.image} 
              alt={template.name}
              className={cn(
                "w-full h-full object-cover",
                !imageLoaded && "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:hidden">
              <h2 className="text-white text-xl font-medium">{template.name}</h2>
              <p className="text-white/80 text-sm mt-1">{template.category}</p>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto">
            <div className="hidden md:block">
              <h2 className="text-2xl font-medium">{template.name}</h2>
              <p className="text-muted-foreground">{template.category}</p>
            </div>
            
            <div className="mt-6 space-y-4">
              <p>{template.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {template.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-secondary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="space-y-2 mt-6">
                <h3 className="font-medium">Features</h3>
                <ul className="space-y-1">
                  {[
                    "Responsive design for all devices",
                    "Fast loading and optimized images",
                    "Customizable color schemes",
                    "SEO-friendly structure",
                    "Modern, clean code"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={handleUseTemplate}
                  className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition-colors flex-1"
                >
                  Use this template
                </button>
                
                <a 
                  href={template.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-secondary/70 px-5 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Preview</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedTemplate;
