import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const About = () => {
  const skills = [
    'Full Stack Development', 'Cyber Security', 'Networking', 'Cloud Computing',
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS',
    'Azure', 'Docker', 'Kubernetes', 'Network Security', 'System Administration', 'DevOps'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-slide-up text-glow">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-3xl font-bold mb-2 text-foreground">
                IT Professional
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a passionate fullstack developer and IT Professional from Papua New Guinea, based in Port Moresby, with 
                extensive experience in multiple technology domains. I specialize in creating 
                comprehensive digital solutions that drive business growth and operational efficiency.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                My expertise spans full stack development, cyber security, networking, and 
                cloud computing. I'm passionate about leveraging technology to solve complex 
                challenges and deliver innovative solutions for businesses.
              </p>
              
              {/* Add some stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <Card className="bg-portfolio-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-glow animate-slide-up" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6 text-foreground text-center">
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer transform hover:scale-105"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};