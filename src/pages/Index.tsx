import { useState, useEffect } from 'react';
import { Hero } from '@/components/Portfolio/Hero';
import { About } from '@/components/Portfolio/About';
import { Projects } from '@/components/Portfolio/Projects';
import { Contact } from '@/components/Portfolio/Contact';
import { useVisitTracking } from '@/hooks/useVisitTracking';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  
  // Track page visits
  useVisitTracking();

  const handleDownloadCV = () => {
    toast({
      title: "CV Request",
      description: "Please email me directly at gumembirussel@gmail.com and I'll send my CV to your email address.",
      duration: 8000,
    });
  };

  return (
    <div className="min-h-screen">
      <Hero onDownloadCV={handleDownloadCV} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
