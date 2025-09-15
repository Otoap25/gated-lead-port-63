import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useVisitTracking = () => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const { error } = await supabase
          .from('visits')
          .insert({
            visitor_ip: '', // Will be handled server-side in production
            user_agent: navigator.userAgent,
            referrer: document.referrer,
            page_path: window.location.pathname,
          });

        if (error) {
          console.error('Error tracking visit:', error);
        }
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    trackVisit();
  }, []);
};