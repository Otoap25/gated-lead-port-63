import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Download } from 'lucide-react';

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVDownloadModal = ({ isOpen, onClose }: CVDownloadModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    company: '',
    role: '',
    interestReason: '',
    howFound: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert({
          email: formData.email,
          full_name: formData.fullName,
          company: formData.company,
          role: formData.role,
          interest_reason: formData.interestReason,
          how_found: formData.howFound,
        });

      if (error) throw error;

      toast({
        title: "Thank you!",
        description: "Your information has been recorded. Your CV download will begin shortly.",
      });

      // Simulate CV download (replace with actual file URL)
      const link = document.createElement('a');
      link.href = '/path-to-cv.pdf'; // Replace with actual CV file path
      link.download = 'John_Doe_CV.pdf';
      link.click();

      setFormData({
        email: '',
        fullName: '',
        company: '',
        role: '',
        interestReason: '',
        howFound: ''
      });
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Download CV
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Please fill out this quick form to download my CV. Your information helps me understand my audience better.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName" className="text-black">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-black">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company" className="text-black">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="role" className="text-black">Your Role</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => handleChange('role', e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="howFound" className="text-black">How did you find me?</Label>
            <Select onValueChange={(value) => handleChange('howFound', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google">Google Search</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="github">GitHub</SelectItem>
                <SelectItem value="referral">Referral</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="interestReason" className="text-black">What interests you about my profile?</Label>
            <Textarea
              id="interestReason"
              rows={3}
              value={formData.interestReason}
              onChange={(e) => handleChange('interestReason', e.target.value)}
              placeholder="Optional: Let me know what caught your attention..."
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? 'Processing...' : 'Download CV'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};