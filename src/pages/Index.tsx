
import { useState } from "react";
import Navbar from "@/components/Navbar";
import TemplateSearch from "@/components/TemplateSearch";
import TemplateGrid from "@/components/TemplateGrid";
import SelectedTemplate from "@/components/SelectedTemplate";
import { templates as allTemplates, Template } from "@/data/templates";
import { toast } from "sonner";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>(allTemplates);
  const [searchPerformed, setSearchPerformed] = useState(false);
  
  const handleSearch = (query: string) => {
    setSearchPerformed(true);
    
    if (!query.trim()) {
      setFilteredTemplates(allTemplates);
      return;
    }
    
    // Convert query to lowercase for case-insensitive matching
    const lowerQuery = query.toLowerCase();
    
    // Create an array of search terms by splitting the query by spaces
    const searchTerms = lowerQuery.split(/\s+/).filter(term => term.length > 2);
    
    // Find templates that match any of the search terms in any field
    const matches = allTemplates.filter(template => {
      // Check in name, description, category
      const nameMatch = template.name.toLowerCase().includes(lowerQuery);
      const descriptionMatch = template.description.toLowerCase().includes(lowerQuery);
      const categoryMatch = template.category.toLowerCase().includes(lowerQuery);
      
      // Check in tags
      const tagMatch = template.tags.some(tag => 
        lowerQuery.includes(tag.toLowerCase())
      );
      
      // Check individual terms across fields
      const termMatch = searchTerms.some(term => 
        template.name.toLowerCase().includes(term) ||
        template.description.toLowerCase().includes(term) ||
        template.category.toLowerCase().includes(term) ||
        template.tags.some(tag => tag.toLowerCase().includes(term) || term.includes(tag.toLowerCase()))
      );
      
      return nameMatch || descriptionMatch || categoryMatch || tagMatch || termMatch;
    });
    
    setFilteredTemplates(matches);
    
    // Show toast based on search results
    if (matches.length > 0) {
      toast.success(`Found ${matches.length} matching templates!`);
    } else {
      toast.info("No matching templates found");
    }
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
              {searchPerformed ? 'Search Results' : 'All Templates'}
            </h2>
          </div>
          
          <TemplateGrid 
            templates={filteredTemplates} 
            selectedTemplate={selectedTemplate}
            onSelectTemplate={handleSelectTemplate}
          />
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
