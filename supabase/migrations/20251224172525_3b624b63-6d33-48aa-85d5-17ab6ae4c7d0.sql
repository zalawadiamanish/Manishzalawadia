-- Create table to track page visitors
CREATE TABLE public.page_visitors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL DEFAULT '/',
  visit_count BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(page_path)
);

-- Enable Row Level Security
ALTER TABLE public.page_visitors ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Anyone can view visitor counts" 
ON public.page_visitors 
FOR SELECT 
USING (true);

-- Create policy for public insert (for first visit)
CREATE POLICY "Anyone can insert visitor count" 
ON public.page_visitors 
FOR INSERT 
WITH CHECK (true);

-- Create policy for public update (to increment count)
CREATE POLICY "Anyone can update visitor count" 
ON public.page_visitors 
FOR UPDATE 
USING (true);

-- Insert initial row for homepage
INSERT INTO public.page_visitors (page_path, visit_count) 
VALUES ('/', 0);

-- Create function to increment visitor count
CREATE OR REPLACE FUNCTION public.increment_visitor_count(path TEXT DEFAULT '/')
RETURNS BIGINT AS $$
DECLARE
  new_count BIGINT;
BEGIN
  UPDATE public.page_visitors 
  SET visit_count = visit_count + 1, updated_at = now()
  WHERE page_path = path
  RETURNING visit_count INTO new_count;
  
  IF new_count IS NULL THEN
    INSERT INTO public.page_visitors (page_path, visit_count)
    VALUES (path, 1)
    RETURNING visit_count INTO new_count;
  END IF;
  
  RETURN new_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;