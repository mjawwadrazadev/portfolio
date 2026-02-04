"use client";

/* ============================================
   FLOATING SHAPES / PARTICLES COMPONENT
   ============================================
   Creates animated floating shapes in the background
   for a modern, dynamic aesthetic.
   
   Customize:
   - Number of shapes (adjust array length)
   - Colors (change bg-primary/xx values)
   - Animation speeds (adjust animation duration)
   - Shape sizes (adjust w-xx and h-xx values)
   ============================================ */

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large floating circle - top left */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "0s" }}
      />

      {/* Medium floating circle - top right */}
      <div
        className="absolute top-1/4 -right-16 w-48 h-48 md:w-64 md:h-64 bg-primary/15 rounded-full blur-2xl animate-float-medium"
        style={{ animationDelay: "2s" }}
      />

      {/* Small floating circle - bottom left */}
      <div
        className="absolute bottom-1/4 -left-8 w-32 h-32 md:w-48 md:h-48 bg-accent/10 rounded-full blur-2xl animate-float-fast"
        style={{ animationDelay: "1s" }}
      />

      {/* Medium floating circle - bottom right */}
      <div
        className="absolute -bottom-16 right-1/4 w-56 h-56 md:w-72 md:h-72 bg-primary/8 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "3s" }}
      />

      {/* Small accent circle - center top */}
      <div
        className="absolute top-1/3 left-1/4 w-24 h-24 md:w-32 md:h-32 bg-accent/12 rounded-full blur-xl animate-float-medium"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Tiny particle dots */}
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-pulse-slow" />
      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-accent/30 rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Gradient mesh overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
    </div>
  );
}
