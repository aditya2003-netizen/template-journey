
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import TemplateSearch from "@/components/TemplateSearch";
import TemplateGrid from "@/components/TemplateGrid";
import SelectedTemplate from "@/components/SelectedTemplate";
import { templates as allTemplates, Template } from "@/data/templates";
import { toast } from "sonner";

const Index = () => {
  const [templates, setTemplates] = useState<Template[]>(allTemplates);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsLoading(true);
    
    // Simulate API call to backend which would use GPT to find relevant templates
    setTimeout(() => {
      // For the demo, we'll just filter templates that contain any of the keywords
      // In a real implementation, this would be handled by the GPT API on the backend
      const keywords = query.toLowerCase().split(" ");
      
      // Get up to 3 templates - this simulates what the backend would return
      const filtered = allTemplates
        .filter(template => {
          return keywords.some(keyword => 
            template.name.toLowerCase().includes(keyword) ||
            template.description.toLowerCase().includes(keyword) ||
            template.category.toLowerCase().includes(keyword) ||
            template.tags.some(tag => tag.toLowerCase().includes(keyword))
          );
        })
        .slice(0, 3);
      
      setTemplates(filtered.length > 0 ? filtered : allTemplates.slice(0, 3));
      setIsLoading(false);
      
      if (filtered.length > 0) {
        toast.success(`Found ${filtered.length} matching templates!`);
      } else {
        toast.info("Showing recommended templates instead");
      }
    }, 1500);
  };
  
  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
  };
  
  const handleCloseSelected = () => {
    setSelectedTemplate(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/50 to-white dark:from-background dark:to-background">
      <Navbar />
      
      <main className="pt-28 md:pt-32 pb-20 px-6 md:px-10">
        <section className="mb-20">
          <TemplateSearch onSearch={handleSearch} />
        </section>
        
        <section className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-medium">
              {searchQuery ? 'Search Results' : 'Featured Templates'}
            </h2>
            
            {isLoading && (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                <span className="text-sm text-muted-foreground">Finding the best matches...</span>
              </div>
            )}
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-muted rounded-xl animate-pulse-subtle" />
              ))}
            </div>
          ) : (
            <TemplateGrid 
              templates={templates} 
              selectedTemplate={selectedTemplate}
              onSelectTemplate={handleSelectTemplate}
            />
          )}
        </section>
      </main>
      
      {selectedTemplate && (
        <SelectedTemplate
          template={selectedTemplate}
          onClose={handleCloseSelected}
        />
      )}
    </div>
  );
};

export default Index;
