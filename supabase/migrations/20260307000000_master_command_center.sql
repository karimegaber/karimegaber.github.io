-- 1. Modify `posts` table
ALTER TABLE public.posts
ADD COLUMN IF NOT EXISTS cover_image TEXT,
ADD COLUMN IF NOT EXISTS is_published BOOLEAN DEFAULT false;

-- Create index on slug for fast lookup
CREATE INDEX IF NOT EXISTS idx_posts_slug ON public.posts(slug);

-- Enable RLS on posts
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Posts policies
DROP POLICY IF EXISTS "Public can Read" ON public.posts;
CREATE POLICY "Public can Read"
ON public.posts FOR SELECT
TO public
USING (is_published = true);

DROP POLICY IF EXISTS "Service Role/Authenticated can CRUD" ON public.posts;
CREATE POLICY "Service Role/Authenticated can CRUD"
ON public.posts FOR ALL
TO authenticated, service_role
USING (true)
WITH CHECK (true);

-- 2. Create `projects` table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    project_url TEXT,
    github_url TEXT,
    tech_stack TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Projects policies
DROP POLICY IF EXISTS "Public can Read" ON public.projects;
CREATE POLICY "Public can Read"
ON public.projects FOR SELECT
TO public
USING (true);

DROP POLICY IF EXISTS "Service Role/Authenticated can CRUD" ON public.projects;
CREATE POLICY "Service Role/Authenticated can CRUD"
ON public.projects FOR ALL
TO authenticated, service_role
USING (true)
WITH CHECK (true);

-- 3. Create `experience` table
CREATE TABLE IF NOT EXISTS public.experience (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company TEXT NOT NULL,
    role TEXT NOT NULL,
    description TEXT,
    start_date DATE NOT NULL,
    end_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on experience
ALTER TABLE public.experience ENABLE ROW LEVEL SECURITY;

-- Experience policies
DROP POLICY IF EXISTS "Public can Read" ON public.experience;
CREATE POLICY "Public can Read"
ON public.experience FOR SELECT
TO public
USING (true);

-- 4. Create `contacts` table
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'unread',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on contacts
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Contacts policies
DROP POLICY IF EXISTS "Public can Insert" ON public.contacts;
CREATE POLICY "Public can Insert"
ON public.contacts FOR INSERT
TO public
WITH CHECK (true);

DROP POLICY IF EXISTS "Service Role/Authenticated can Select" ON public.contacts;
CREATE POLICY "Service Role/Authenticated can Select"
ON public.contacts FOR SELECT
TO authenticated, service_role
USING (true);

DROP POLICY IF EXISTS "Service Role/Authenticated can Update" ON public.contacts;
CREATE POLICY "Service Role/Authenticated can Update"
ON public.contacts FOR UPDATE
TO authenticated, service_role
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "Service Role/Authenticated can Delete" ON public.contacts;
CREATE POLICY "Service Role/Authenticated can Delete"
ON public.contacts FOR DELETE
TO authenticated, service_role
USING (true);

-- 5. Create `site_config` table
CREATE TABLE IF NOT EXISTS public.site_config (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL,
    description TEXT
);

-- Enable RLS on site_config
ALTER TABLE public.site_config ENABLE ROW LEVEL SECURITY;

-- site_config policies
DROP POLICY IF EXISTS "Public can Read" ON public.site_config;
CREATE POLICY "Public can Read"
ON public.site_config FOR SELECT
TO public
USING (true);

DROP POLICY IF EXISTS "Service Role/Authenticated can Update" ON public.site_config;
CREATE POLICY "Service Role/Authenticated can Update"
ON public.site_config FOR UPDATE
TO authenticated, service_role
USING (true)
WITH CHECK (true);

-- INITIAL DATA SEED
INSERT INTO public.site_config (key, value, description)
VALUES
    ('ai_system_prompt', 'You are Karim''s AI Twin. You are a Senior Flutter Developer...', 'AI System Prompt for Chat'),
    ('hero_title', 'Software Architect & Flutter Expert', 'Hero section title'),
    ('hero_subtext', 'Building high-performance mobile and web solutions.', 'Hero section subtext'),
    ('stats_json', '{"years": "5+", "apps": "20+", "clients": "15+"}', 'Hero section stats')
ON CONFLICT (key) DO UPDATE
SET value = EXCLUDED.value, description = EXCLUDED.description;
