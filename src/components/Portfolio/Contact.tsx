import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white animate-slide-up text-glow">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Let's Work Together
            </h3>
            <p className="text-white text-lg leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you're looking for a developer, have a question, or just want to say hello, 
              I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 group cursor-pointer hover:text-primary transition-colors">
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-white group-hover:text-primary">gumembirussel@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer hover:text-primary transition-colors">
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-white group-hover:text-primary">+675 81416222</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer hover:text-primary transition-colors">
                <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-white group-hover:text-primary">Port Moresby, Papua New Guinea</span>
              </div>
            </div>
          </div>
          
          <Card className="bg-portfolio-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-glow animate-slide-up" style={{animationDelay: '0.4s'}}>
            <CardHeader>
              <CardTitle className="text-white text-center">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-primary/50 text-black hover:bg-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-bold"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/russel-gumembi-664b2953" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Linkedin className="h-5 w-5" />
                  Message on LinkedIn
                </a>
              </Button>
              
              <Button 
                size="lg" 
                className="w-full bg-[#25D366] hover:bg-[#22C55E] text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"             
                asChild
              >
                <a 
                  href="https://wa.me/67581416222?text=Hi%20Russel%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Message
                </a>
              </Button>

              <div className="pt-4 border-t border-border">
                <Button 
                  size="lg" 
                  className="w-full bg-primary/50 text-black hover:bg-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-bold"
                  asChild
                >
                  <a href="mailto:gumembirussel@gmail.com" className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </div>

              <p className="text-center text-sm text-white pt-2 animate-pulse">
                Choose your preferred way to reach out
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};