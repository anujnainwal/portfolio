"use client";

import React, { FormEvent, useState } from "react";
import { useContact } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess, onCancel }) => {
  const { sendContactForm, loading, error, success } = useContact();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [messageChars, setMessageChars] = useState(0);
  const MAX_CHARS = 500;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    if (id === "message") {
      if (value.length <= MAX_CHARS) {
        setFormData((prev) => ({ ...prev, [id]: value }));
        setMessageChars(value.length);
      }
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await sendContactForm(formData);
    if (result) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
      setMessageChars(0);
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}
      {success && (
        <div className="p-3 bg-green-50 text-green-600 rounded-lg flex items-center justify-between text-sm">
          <span>{success}</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-medium text-gray-900">
            Name
          </Label>
          <Input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={2}
            placeholder="John Doe"
            className="text-gray-900"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="font-medium text-gray-900">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="john@example.com"
            className="text-gray-900"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="font-medium text-gray-900">
          Subject
        </Label>
        <Input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          minLength={3}
          placeholder="Project Discussion"
          className="text-gray-900"
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="font-medium text-gray-900">Project Type</Label>
          <Select
            onValueChange={(value) => handleSelectChange("projectType", value)}
            required
          >
            <SelectTrigger className="text-gray-900">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Web Development">Web Development</SelectItem>
              <SelectItem value="Mobile App">Mobile App</SelectItem>
              <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="font-medium text-gray-900">Budget</Label>
            <Select
              onValueChange={(value) => handleSelectChange("budget", value)}
              required
            >
              <SelectTrigger className="text-gray-900 w-full overflow-hidden">
                <SelectValue placeholder="Select Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="< $1k">&lt; $1k</SelectItem>
                <SelectItem value="$1k - $5k">$1k - $5k</SelectItem>
                <SelectItem value="$5k - $10k">$5k - $10k</SelectItem>
                <SelectItem value="> $10k">&gt; $10k</SelectItem>
                <SelectItem value="Custom">Flexible / Let's Talk</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="font-medium text-gray-900">Timeline</Label>
            <Select
              onValueChange={(value) => handleSelectChange("timeline", value)}
              required
            >
              <SelectTrigger className="text-gray-900 w-full">
                <SelectValue placeholder="Select Timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Urgent">Urgent</SelectItem>
                <SelectItem value="1-2 Weeks">1-2 Weeks</SelectItem>
                <SelectItem value="1 Month">1 Month</SelectItem>
                <SelectItem value="Flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="message" className="font-medium text-gray-900">
            Message
          </Label>
          <span
            className={`text-xs ${messageChars >= MAX_CHARS ? "text-red-500" : "text-gray-400"}`}
          >
            {messageChars}/{MAX_CHARS}
          </span>
        </div>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={MAX_CHARS}
          rows={4}
          placeholder="Tell me about your project needs..."
          className="resize-none text-gray-900"
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={loading}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700"
          disabled={loading || (success !== null && success !== "")}
        >
          {loading ? "Sending..." : success ? "Sent!" : "Send Message"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
