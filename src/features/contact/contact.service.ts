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
  if (honeypotValue) {
    return {};
  }

  const { error } = await (supabase as any).rpc('submit_contact_message', {
    p_name: payload.name,
    p_email: payload.email,
    p_message: payload.message,
  });

  if (error) {
    return { error: (error as Error).message };
  }

  return {};
}
