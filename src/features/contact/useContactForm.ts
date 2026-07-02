import { useState, useCallback } from 'react';
import { submitContactForm } from './contact.service';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface UseContactFormReturn {
  values: FormState;
  honeypot: string;
  submitting: boolean;
  success: boolean;
  error: string | null;
  setField: (field: keyof FormState, value: string) => void;
  setHoneypot: (value: string) => void;
  handleSubmit: () => Promise<void>;
  reset: () => void;
}

const initial: FormState = { name: '', email: '', message: '' };

export function useContactForm(): UseContactFormReturn {
  const [values, setValues] = useState<FormState>(initial);
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setField = useCallback((field: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(async () => {
    setError(null);
    setSuccess(false);

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError('Sva polja su obavezna.');
      return;
    }

    setSubmitting(true);
    const result = await submitContactForm(values, honeypot);
    setSubmitting(false);

    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(true);
      setValues(initial);
    }
  }, [values, honeypot]);

  const reset = useCallback(() => {
    setValues(initial);
    setHoneypot('');
    setError(null);
    setSuccess(false);
  }, []);

  return {
    values,
    honeypot,
    submitting,
    success,
    error,
    setField,
    setHoneypot,
    handleSubmit,
    reset,
  };
}
