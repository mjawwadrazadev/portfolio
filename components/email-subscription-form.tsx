"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* ============================================
   EMAIL SUBSCRIPTION FORM COMPONENT
   ============================================
   Handles email collection for launch notifications.
   Add your form submission logic in the handleSubmit function.
   ============================================ */

export function EmailSubscriptionForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    // ------------------------------------------------------------------
    // STEP 1: Go to https://formspree.io/ to create a free form
    // STEP 2: Replace "YOUR_FORMSPREE_ID_HERE" below with your actual Form ID
    // ------------------------------------------------------------------
    const FORMSPREE_ID = "xrelnvny";

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        // Reset status after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        console.error("Form submission failed");
      }
    } catch (error) {
      setStatus("error");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 group">
          {/* Input glow effect on focus */}
          <div className="absolute -inset-0.5 bg-primary/30 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            required
            className="relative w-full h-12 bg-card/60 backdrop-blur-md border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/30 transition-all duration-300"
          />
        </div>
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-12 px-8 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/25"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : status === "success" ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Subscribed!
            </span>
          ) : (
            "Notify Me"
          )}
        </Button>
      </div>
      {status === "success" && (
        <p className="mt-3 text-sm text-primary animate-in fade-in slide-in-from-bottom-2 duration-300">
          Thanks! We&apos;ll notify you when we launch.
        </p>
      )}
    </form>
  );
}
