
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { toast } from 'sonner';
import { templates } from "@/data/templates";

interface TemplateSearchProps {
  onSearch: (query: string) => void;
}

const TemplateSearch = ({ onSearch }: TemplateSearchProps) => {
  const [prompt, setPrompt] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast.error("Please enter a description of what you're looking for");
      return;
    }
    
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      onSearch(prompt);
      setIsSearching(false);
    }, 1500);
  };

  // Get unique categories from templates
  const categories = Array.from(new Set(templates.map(template => template.category)));

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-medium text-center mb-3">
        Find the perfect template for your project
      </h2>
      <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
        Describe what you're building, and we'll find the best templates for you
      </p>
      
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g., 'A portfolio site for a photographer with a minimal design'"
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-white/50 dark:bg-black/10 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary/30"
          />
          <button 
            type="submit"
            disabled={isSearching}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-lg p-2 transition-all hover:bg-primary/90 disabled:opacity-70"
          >
            {isSearching ? (
              <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <ArrowRight className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>
      
      <div className="mt-4 flex justify-center gap-2 flex-wrap">
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => {
              setPrompt(category);
              onSearch(category);
            }}
            className="text-xs bg-secondary hover:bg-secondary/70 px-3 py-1.5 rounded-full transition-colors"
          >
            {category}
          </button>
        ))}
        <button 
          onClick={() => {
            setPrompt("minimalist creative professional");
            onSearch("minimalist creative professional");
          }}
          className="text-xs bg-secondary hover:bg-secondary/70 px-3 py-1.5 rounded-full transition-colors"
        >
          Creative
        </button>
        <button 
          onClick={() => {
            setPrompt("content articles");
            onSearch("content articles");
          }}
          className="text-xs bg-secondary hover:bg-secondary/70 px-3 py-1.5 rounded-full transition-colors"
        >
          Content
        </button>
      </div>
    </div>
  );
};

export default TemplateSearch;
