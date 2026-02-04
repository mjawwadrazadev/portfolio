/* ============================================
   COMING SOON / MAINTENANCE PAGE
   ============================================
   A modern, responsive landing page with:
   - Animated gradient background
   - Floating shapes/particles
   - Countdown timer
   - Email subscription form
   
   CUSTOMIZATION GUIDE:
   - Change colors: Edit globals.css CSS variables
   - Change launch date: Edit LAUNCH_DATE in countdown-timer.tsx
   - Change copy: Edit headings and descriptions below
   - Add form logic: Edit handleSubmit in email-subscription-form.tsx
   ============================================ */

import { CountdownTimer } from "@/components/countdown-timer";
import { EmailSubscriptionForm } from "@/components/email-subscription-form";
import { FloatingShapes } from "@/components/floating-shapes";

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-background via-card to-background animate-gradient"
        aria-hidden="true"
      />

      {/* Floating shapes/particles layer */}
      <FloatingShapes />

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Logo/Brand area - CUSTOMIZATION: Add your logo here */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                />
              </svg>
            </div>
          </div>

          {/* Main heading - CUSTOMIZATION: Change text as needed */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance">
              Coming Soon
            </h1>
            {/* Subheading - CUSTOMIZATION: Update description */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Our website is under construction. Stay tuned for something amazing!
            </p>
          </div>

          {/* Countdown timer section */}
          <div className="py-4 md:py-8">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Launching In
            </p>
            <CountdownTimer />
          </div>

          {/* Email subscription section */}
          <div className="py-4 md:py-6 space-y-4">
            <p className="text-muted-foreground">
              Be the first to know when we launch
            </p>
            <EmailSubscriptionForm />
          </div>

          {/* Social links - CUSTOMIZATION: Add your social media links */}
          <div className="flex justify-center gap-6 pt-4">
            {/* Twitter/X */}
            <a
              href="#"
              className="p-3 rounded-full bg-card/40 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="Follow us on X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="p-3 rounded-full bg-card/40 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="p-3 rounded-full bg-card/40 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Footer text - CUSTOMIZATION: Update copyright */}
          <footer className="pt-8 text-sm text-muted-foreground/70">
            <p>&copy; 2026 M Jawwad Raza. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
