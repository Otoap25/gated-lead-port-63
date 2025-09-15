import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import hiltonImage from '@/assets/hilton-port-moresby.jpg';
import okyAppImage from '@/assets/oky-app-real.jpg';
import upngCCTVImage from '@/assets/upng-campus-real.jpg';

export const Projects = () => {
  const projects = [
    {
      title: "Oky Period Tracker App",
      description: "The world's first period tracker app for girls, created with girls. Provides menstrual health information in fun, creative ways to empower young women in Papua New Guinea.",
      technologies: ["Mobile App Development", "Health Tech", "UNICEF Partnership", "Women's Empowerment"],
      github: "https://github.com",
      live: "https://www.okyapp.info/",
      image: okyAppImage
    },
    {
      title: "UPNG Campus Security System",
      description: "Comprehensive CCTV installation at University of Papua New Guinea campus using Hikvision cameras on Cambium wireless network with integrated audio/video recording and PA system connectivity.",
      technologies: ["Hikvision CCTV", "Cambium Wireless", "Network Security", "Audio/Video Recording", "PA System Integration"],
      github: "https://github.com",
      live: "https://www.upng.ac.pg/",
      image: upngCCTVImage
    },
    {
      title: "Hilton Port Moresby Hotel IT Systems",
      description: "Complete IT infrastructure design and implementation for Hilton Port Moresby Hotel & Residences, including network security, cloud integration, and system administration.",
      technologies: ["Network Security", "Cloud Computing", "System Administration", "Infrastructure Design"],
      github: "https://github.com",
      live: "https://www.hilton.com/en/hotels/pomsmhi-hilton-port-moresby-hotel-and-residences/",
      image: hiltonImage
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-slide-up text-glow">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-portfolio-card border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:rotate-1 card-glow animate-slide-up group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default transform hover:scale-105"
                      style={{animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s`}}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 hover:bg-muted transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};