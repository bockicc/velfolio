import { supabase } from '../../lib/supabaseClient';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(
  payload: ContactPayload,
  honeypotValue: string,
): Promise<{ error?: string }> {
  if (honeypotValue) return {};

  // 1. Upis u bazu
  const { error } = await (supabase as any).rpc('submit_contact_message', {
    p_name: payload.name,
    p_email: payload.email,
    p_message: payload.message,
  });

  if (error) return { error: error.message };

  // 2. Poziv Edge funkcije
  try {
    const { error: funcError } = await supabase.functions.invoke('posalji-mejl', {
      body: { 
        name: payload.name, 
        email: payload.email, 
        message: payload.message 
      }
    });

    if (funcError) throw funcError;
  } catch (err) {
    console.error("Greška pri slanju mejla:", err);
  }

  return {};
}