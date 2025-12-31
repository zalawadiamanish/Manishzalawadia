CREATE EXTENSION IF NOT EXISTS "pg_graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "supabase_vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";
BEGIN;

--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



--
-- Name: increment_visitor_count(text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.increment_visitor_count(path text DEFAULT '/'::text) RETURNS bigint
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
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
$$;


SET default_table_access_method = heap;

--
-- Name: page_visitors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.page_visitors (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    page_path text DEFAULT '/'::text NOT NULL,
    visit_count bigint DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: page_visitors page_visitors_page_path_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.page_visitors
    ADD CONSTRAINT page_visitors_page_path_key UNIQUE (page_path);


--
-- Name: page_visitors page_visitors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.page_visitors
    ADD CONSTRAINT page_visitors_pkey PRIMARY KEY (id);


--
-- Name: page_visitors Anyone can insert visitor count; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can insert visitor count" ON public.page_visitors FOR INSERT WITH CHECK (true);


--
-- Name: page_visitors Anyone can update visitor count; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can update visitor count" ON public.page_visitors FOR UPDATE USING (true);


--
-- Name: page_visitors Anyone can view visitor counts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can view visitor counts" ON public.page_visitors FOR SELECT USING (true);


--
-- Name: page_visitors; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.page_visitors ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--




COMMIT;