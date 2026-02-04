"use client";

import { useState, useEffect } from "react";

/* ============================================
   COUNTDOWN TIMER COMPONENT
   ============================================
   Customize the launch date below to set
   your countdown target date and time.
   ============================================ */

// CUSTOMIZATION: Change this date to your launch date
// Format: Year, Month (0-11), Day, Hour, Minute, Second
const LAUNCH_DATE = new Date("2026-06-01T00:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const difference = +LAUNCH_DATE - +new Date();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card/60 backdrop-blur-md border border-border/50 rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                <span className="text-3xl md:text-5xl font-bold text-foreground tabular-nums">
                  00
                </span>
              </div>
            </div>
            <span className="mt-2 text-sm md:text-base text-muted-foreground uppercase tracking-widest">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative group">
            {/* Hover glow effect */}
            <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-card/60 backdrop-blur-md border border-border/50 rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] transition-transform duration-300 group-hover:scale-105">
              <span className="text-3xl md:text-5xl font-bold text-foreground tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
          </div>
          <span className="mt-2 text-sm md:text-base text-muted-foreground uppercase tracking-widest">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
