
import { useState } from "react";
import { ExternalLink, Plus } from "lucide-react";
import { Template } from "@/data/templates";
import { cn } from "@/lib/utils";

interface TemplateCardProps {
  template: Template;
  index: number;
  isSelected?: boolean;
  onSelect?: (template: Template) => void;
}

const TemplateCard = ({ 
  template, 
  index, 
  isSelected = false,
  onSelect
}: TemplateCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "template-card group animate-scale-in",
        isSelected && "ring-2 ring-primary"
      )}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animationFillMode: "both" 
      }}
      onClick={() => onSelect && onSelect(template)}
    >
      <div className="relative aspect-video overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse-subtle" />
        )}
        <img 
          src={template.image} 
          alt={template.name}
          className={cn(
            "template-image",
            !imageLoaded && "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="template-overlay">
          <div className="space-y-2 animate-slide-up" style={{ animationFillMode: "both", animationDelay: "0.1s" }}>
            <h3 className="text-white font-medium text-lg">{template.name}</h3>
            <p className="text-white/80 text-sm line-clamp-2">{template.description}</p>
            
            <div className="flex items-center gap-2 mt-3">
              <a 
                href={template.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Preview</span>
              </a>
              
              <button 
                className="text-xs bg-primary hover:bg-primary/90 text-white px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Select</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-950">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">{template.name}</h3>
            <p className="text-muted-foreground text-sm line-clamp-1 mt-1">{template.description}</p>
          </div>
          {isSelected && (
            <div className="h-4 w-4 bg-primary rounded-full flex items-center justify-center">
              <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
            </div>
          )}
        </div>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {template.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 bg-secondary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
