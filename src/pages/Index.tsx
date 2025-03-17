
import { useState } from "react";
import Navbar from "@/components/Navbar";
import TemplateSearch from "@/components/TemplateSearch";
import TemplateGrid from "@/components/TemplateGrid";
import SelectedTemplate from "@/components/SelectedTemplate";
import { templates as allTemplates, Template } from "@/data/templates";
import { toast } from "sonner";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  
  const handleSearch = (query: string) => {
    setSearchKeyword(query);
    
    // Show toast based on search results
    const matchingTemplates = allTemplates.filter(template => 
      template.name.toLowerCase().includes(query.toLowerCase())
    );
    
    if (matchingTemplates.length > 0) {
      toast.success(`Found ${matchingTemplates.length} matching templates!`);
    } else if (query.trim() !== "") {
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
              {searchKeyword ? 'Search Results' : 'All Templates'}
            </h2>
          </div>
          
          <TemplateGrid 
            templates={allTemplates} 
            selectedTemplate={selectedTemplate}
            onSelectTemplate={handleSelectTemplate}
            searchKeyword={searchKeyword}
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
