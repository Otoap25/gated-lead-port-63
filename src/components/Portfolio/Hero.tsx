import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  onDownloadCV: () => void;
}

export const Hero = ({ onDownloadCV }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
      
      {/* Floating elements */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-2 sm:w-3 h-2 sm:h-3 bg-primary/30 rounded-full animate-float" />
      <div className="absolute bottom-20 sm:bottom-32 right-8 sm:right-20 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary/20 rounded-full animate-float" style={{animationDelay: '3s'}} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-primary text-glow animate-slide-up">
            Russel Gumembi
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 sm:mb-8 text-white font-semibold animate-slide-up px-4" style={{animationDelay: '0.2s'}}>
            Full Stack Developer & UI/UX Designer
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto leading-relaxed font-medium animate-slide-up px-4" style={{animationDelay: '0.4s'}}>
            Creating beautiful, functional digital experiences with modern technologies and thoughtful design.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 animate-slide-up px-4" style={{animationDelay: '0.6s'}}>
          <Button
            size="lg"
            onClick={onDownloadCV}
            className="bg-primary hover:bg-primary/90 text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-bold w-full max-w-xs sm:w-auto text-sm sm:text-base py-3 sm:py-4"
          >
            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Download CV
          </Button>
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 transition-all duration-300 font-bold transform hover:scale-105 shadow-lg hover:shadow-xl p-2.5 sm:p-3"
              asChild
            >
              <a href="mailto:gumembirussel@gmail.com">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-bold p-2.5 sm:p-3"
              asChild
            >
              <a href="https://github.com/russelgumembi" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-bold p-2.5 sm:p-3"
              asChild
            >
              <a href="https://www.linkedin.com/in/russel-gumembi-664b2953" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="text-white/70 animate-slide-up px-4" style={{animationDelay: '0.8s'}}>
          <p className="text-xs sm:text-sm animate-pulse">Scroll down to explore my work</p>
          <div className="mt-3 sm:mt-4 animate-bounce">
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/30 rounded-full mx-auto">
              <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white/50 rounded-full mx-auto mt-1.5 sm:mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};