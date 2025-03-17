
import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10",
        isScrolled 
          ? "py-3 backdrop-blur-md bg-white/80 dark:bg-black/80 shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight">Template Hub</span>
          <div className="hidden md:flex items-center ml-10 space-x-1">
            {/* <a href="#" className="nav-link">Browse</a> */}
            {/* <a href="#" className="nav-link">Categories</a> */}
            {/* <a href="#" className="nav-link">Pricing</a> */}
            {/* <a href="#" className="nav-link">About</a> */}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search templates..."
              className="pl-10 pr-4 py-2 rounded-full bg-secondary/80 border-none focus:outline-none focus:ring-1 focus:ring-primary/30 w-[180px] text-sm transition-all duration-300 focus:w-[240px]"
            />
          </div> */}
          
          {/* <button className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/90 button-hover-effect">
            Get Started
          </button> */}
          
          <button 
            className="md:hidden p-1" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-sm transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
      )}>
        <div className="px-6 flex flex-col gap-3">
          <div className="relative flex items-center my-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search templates..."
              className="pl-10 pr-4 py-2 rounded-full bg-secondary/80 border-none focus:outline-none focus:ring-1 focus:ring-primary/30 w-full text-sm"
            />
          </div>
          <a href="#" className="px-3 py-2 hover:bg-secondary rounded-md transition-colors">Browse</a>
          <a href="#" className="px-3 py-2 hover:bg-secondary rounded-md transition-colors">Categories</a>
          <a href="#" className="px-3 py-2 hover:bg-secondary rounded-md transition-colors">Pricing</a>
          <a href="#" className="px-3 py-2 hover:bg-secondary rounded-md transition-colors">About</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
