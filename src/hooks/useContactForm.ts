import { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  statusCode: number;
  message: string;
  data: null;
}

export const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const sendContactForm = async (formData: ContactForm) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ContactResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess(data.message);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetStates = () => {
    setError(null);
    setSuccess(null);
    setLoading(false);
  };

  return {
    sendContactForm,
    loading,
    error,
    success,
    resetStates,
  };
};
