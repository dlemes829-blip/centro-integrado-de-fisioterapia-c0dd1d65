-- Supabase schema for Centro Integrado de Fisioterapia
create extension if not exists pgcrypto;

create table if not exists public.centro_integrado_de_fisioterapia_workspaces (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  name text not null,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists public.centro_integrado_de_fisioterapia_items (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.centro_integrado_de_fisioterapia_workspaces(id) on delete cascade,
  title text not null,
  description text,
  status text not null default 'todo',
  amount numeric,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.centro_integrado_de_fisioterapia_activity (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.centro_integrado_de_fisioterapia_workspaces(id) on delete cascade,
  actor text not null default 'Agent Nexus',
  event text not null,
  created_at timestamptz not null default now()
);

alter table public.centro_integrado_de_fisioterapia_workspaces enable row level security;
alter table public.centro_integrado_de_fisioterapia_items enable row level security;
alter table public.centro_integrado_de_fisioterapia_activity enable row level security;

create policy "centro_integrado_de_fisioterapia_workspaces_read" on public.centro_integrado_de_fisioterapia_workspaces for select using (true);
create policy "centro_integrado_de_fisioterapia_items_read" on public.centro_integrado_de_fisioterapia_items for select using (true);
create policy "centro_integrado_de_fisioterapia_activity_read" on public.centro_integrado_de_fisioterapia_activity for select using (true);
