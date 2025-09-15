import { useState, useEffect } from 'react';
import { Hero } from '@/components/Portfolio/Hero';
import { About } from '@/components/Portfolio/About';
import { Projects } from '@/components/Portfolio/Projects';
import { Contact } from '@/components/Portfolio/Contact';
import { CVDownloadModal } from '@/components/Portfolio/CVDownloadModal';
import { useVisitTracking } from '@/hooks/useVisitTracking';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Track page visits
  useVisitTracking();

  const handleDownloadCV = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Hero onDownloadCV={handleDownloadCV} />
      <About />
      <Projects />
      <Contact />
      
      <CVDownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
