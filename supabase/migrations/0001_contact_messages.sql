create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  message text not null check (char_length(message) between 1 and 2000),
  created_at timestamptz not null default now(),
  status text not null default 'new' check (status in ('new', 'read', 'archived'))
);

alter table contact_messages enable row level security;

create policy "public can submit contact form"
  on contact_messages for insert
  to anon
  with check (true);

create or replace function submit_contact_message(p_name text, p_email text, p_message text)
returns void
language plpgsql
security definer
as $$
begin
  if exists (
    select 1 from contact_messages
    where email = p_email and created_at > now() - interval '2 minutes'
  ) then
    raise exception 'Please wait before submitting again.';
  end if;

  insert into contact_messages (name, email, message)
  values (p_name, p_email, p_message);
end;
$$;
