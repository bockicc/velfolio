import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Dodajemo proveru: ako URL ili ključ nedostaju, izbacićemo jasnu grešku
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables! Check your Vercel settings.");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);