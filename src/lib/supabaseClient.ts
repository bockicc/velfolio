import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const rawUrl = import.meta.env.VITE_SUPABASE_URL;
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const allKeys = Object.keys(import.meta.env);
const viteKeys = allKeys.filter(k => k.startsWith('VITE_'));

console.log(
  '%c[Supabase] Runtime env vars:',
  'color: #d4a83c; font-weight: bold;',
  '\n  VITE_SUPABASE_URL:', rawUrl ? `${String(rawUrl).substring(0, 25)}...` : JSON.stringify(rawUrl),
  '\n  VITE_SUPABASE_ANON_KEY:', rawKey ? `${String(rawKey).substring(0, 10)}...` : JSON.stringify(rawKey),
  '\n  All import.meta.env keys:', allKeys.length,
  '\n  VITE_* keys:', viteKeys,
);

function isValidUrl(value: unknown): value is string {
  return typeof value === 'string' && /^https?:\/\/.+/.test(value);
}

function isValidKey(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}

let _supabase: SupabaseClient<Database> | null = null;

if (isValidUrl(rawUrl) && isValidKey(rawKey)) {
  _supabase = createClient<Database>(rawUrl, rawKey);
  console.log('%c[Supabase] Client initialized successfully.', 'color: #22c55e');
} else {
  const reasons: string[] = [];
  if (!rawUrl) reasons.push('VITE_SUPABASE_URL is undefined/empty');
  else if (!isValidUrl(rawUrl)) reasons.push(`VITE_SUPABASE_URL (${JSON.stringify(rawUrl)}) is not a valid HTTP(S) URL`);
  if (!rawKey) reasons.push('VITE_SUPABASE_ANON_KEY is undefined/empty');
  else if (!isValidKey(rawKey)) reasons.push('VITE_SUPABASE_ANON_KEY is invalid');

  console.error(
    '%c[Supabase] Client NOT initialized:',
    'color: #ef4444; font-size: 13px; font-weight: bold;',
    '\n  Reasons:', reasons.join('; '),
    '\n  To fix: Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set',
    '\n  in Vercel → Project Settings → Environment Variables, then redeploy.',
  );
}

export const supabase = _supabase;