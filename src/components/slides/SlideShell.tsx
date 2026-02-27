"use client";

import { useState, useEffect, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

interface SlideShellProps {
  slides: ReactNode[];
  title?: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 40 : -40,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -40 : 40,
    scale: 0.98,
  }),
};

export function SlideShell({ slides, title }: SlideShellProps) {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const total = slides.length;

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= total) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current, total]
  );

  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "Escape") {
        router.push("/");
      }
      if (e.key === "f") {
        document.documentElement.requestFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, router]);

  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const onStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 60) {
        dx < 0 ? next() : prev();
      }
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [next, prev]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const resetTimer = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowControls(false), 3000);
    };
    window.addEventListener("mousemove", resetTimer);
    resetTimer();
    return () => {
      window.removeEventListener("mousemove", resetTimer);
      clearTimeout(timeout);
    };
  }, []);

  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed inset-0 bg-surface-deepest overflow-hidden select-none">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-30 h-[2px] bg-wire-subtle/30">
        <motion.div
          className="h-full bg-neon-cyan"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Back + slide counter (auto-hide) */}
      <motion.div
        className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none"
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => router.push("/")}
          className="pointer-events-auto flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span className="hidden sm:inline">{title || "Back"}</span>
        </button>
        <span className="pointer-events-auto text-text-muted text-sm font-mono">
          {current + 1} / {total}
        </span>
      </motion.div>

      {/* Slide content */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 overflow-y-auto flex items-start justify-center pt-14 pb-16"
        >
          {slides[current]}
        </motion.div>
      </AnimatePresence>

      {/* Nav arrows (auto-hide) */}
      <motion.div
        className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-4 pointer-events-none"
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={prev}
          disabled={current === 0}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center
            text-text-muted hover:text-text-primary hover:bg-white/10 disabled:opacity-0
            transition-all duration-200"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          disabled={current === total - 1}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center
            text-text-muted hover:text-text-primary hover:bg-white/10 disabled:opacity-0
            transition-all duration-200"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Dot indicators */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5"
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-1.5 bg-neon-cyan"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
}
