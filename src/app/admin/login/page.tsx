"use client";

import { useActionState, useState, useRef } from "react";
import { login } from "@/actions/auth";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    login,
    undefined,
  );
  const [showPassword, setShowPassword] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = (formData: FormData) => {
    // Manually add the recaptcha token to the form data
    const token = recaptchaRef.current?.getValue();
    if (token) {
      formData.set("g-recaptcha-response", token);
    }
    formAction(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Portal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to manage your portfolio and reviews
          </p>
        </div>
        <form className="mt-8 space-y-6" action={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1a1f36] focus:border-[#1a1f36] focus:z-10 sm:text-sm transition-colors"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="appearance-none rounded-lg relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1a1f36] focus:border-[#1a1f36] focus:z-10 sm:text-sm transition-colors"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* Google reCAPTCHA */}
            <div className="flex justify-center mt-6">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              />
            </div>
          </div>

          {errorMessage?.error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
              {errorMessage.error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isPending}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1a1f36] hover:bg-[#161c2d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a1f36] disabled:opacity-50 transition-colors shadow-sm"
            >
              {isPending ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
