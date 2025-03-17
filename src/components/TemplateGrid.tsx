
import { Template } from "@/data/templates";
import TemplateCard from "./TemplateCard";

interface TemplateGridProps {
  templates: Template[];
  selectedTemplate?: Template | null;
  onSelectTemplate: (template: Template) => void;
}

const TemplateGrid = ({ 
  templates, 
  selectedTemplate,
  onSelectTemplate
}: TemplateGridProps) => {
  if (templates.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No templates found. Try a different search.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template, index) => (
        <TemplateCard 
          key={template.id} 
          template={template} 
          index={index}
          isSelected={selectedTemplate?.id === template.id}
          onSelect={onSelectTemplate}
        />
      ))}
    </div>
  );
};

export default TemplateGrid;
