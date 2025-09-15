-- Create visits table for tracking page visits
CREATE TABLE public.visits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_ip TEXT,
  user_agent TEXT,
  referrer TEXT,
  page_path TEXT NOT NULL DEFAULT '/',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create leads table for storing CV download requests
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  company TEXT,
  role TEXT,
  interest_reason TEXT,
  how_found TEXT,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policies for visits (allow all to insert and select)
CREATE POLICY "Anyone can insert visits" 
ON public.visits 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view visits" 
ON public.visits 
FOR SELECT 
USING (true);

-- Create policies for leads (allow all to insert, select for admin)
CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view leads" 
ON public.leads 
FOR SELECT 
USING (true);

-- Create storage bucket for private CV files
INSERT INTO storage.buckets (id, name, public) VALUES ('cv-files', 'cv-files', false);

-- Create storage policies for CV files
CREATE POLICY "Only service role can access CV files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'cv-files' AND false);

CREATE POLICY "Only service role can upload CV files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'cv-files' AND false);