
import { useState } from "react";
import { Template } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface TemplateFormProps {
  template: Template;
  onClose: () => void;
}

interface TemplateFormValues {
  siteName: string;
  tagline: string;
  description: string;
  primaryColor: string;
  contactEmail: string;
}

const TemplateForm = ({ template, onClose }: TemplateFormProps) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<TemplateFormValues>({
    defaultValues: {
      siteName: "",
      tagline: "",
      description: "",
      primaryColor: "#3b82f6",
      contactEmail: "",
    },
  });

  const onSubmit = (data: TemplateFormValues) => {
    setIsSubmitting(true);
    
    // Store form data in localStorage to use in the preview
    localStorage.setItem('templateData', JSON.stringify({
      ...data,
      templateId: template.id,
      templateName: template.name,
      templateImage: template.image
    }));
    
    toast.success("Your template is being generated!");
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to the preview page
      navigate('/preview');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden relative max-h-[90vh] animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-1.5 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-6 overflow-y-auto max-h-[90vh]">
          <h2 className="text-2xl font-medium mb-1">{template.name}</h2>
          <p className="text-muted-foreground mb-6">Customize your template</p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormItem>
                <FormLabel>Site Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="My Awesome Website" 
                    {...form.register('siteName', { required: true })}
                  />
                </FormControl>
              </FormItem>
              
              <FormItem>
                <FormLabel>Tagline</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="A short catchy phrase" 
                    {...form.register('tagline', { required: true })}
                  />
                </FormControl>
              </FormItem>
              
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Write a brief description of your website" 
                    {...form.register('description', { required: true })}
                    className="min-h-[100px]"
                  />
                </FormControl>
              </FormItem>
              
              <FormItem>
                <FormLabel>Primary Color</FormLabel>
                <div className="flex gap-3">
                  <Input 
                    type="color" 
                    className="w-12 h-10 p-1 cursor-pointer"
                    {...form.register('primaryColor')}
                  />
                  <Input 
                    type="text" 
                    placeholder="#3b82f6" 
                    {...form.register('primaryColor')}
                  />
                </div>
              </FormItem>
              
              <FormItem>
                <FormLabel>Contact Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="email@example.com" 
                    {...form.register('contactEmail', { 
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                </FormControl>
              </FormItem>
              
              <div className="flex justify-end pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onClose}
                  className="mr-2"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Generating...
                    </>
                  ) : (
                    'Generate Template'
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default TemplateForm;
