"use client";

import { type ReactNode, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

/* ─── Title Slide ─── */

export function TitleSlide({
  title,
  subtitle,
  accent,
}: {
  title: string;
  subtitle?: string;
  accent?: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center w-full h-full px-8"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      {accent && (
        <motion.span
          variants={fadeUp}
          className="text-neon-cyan text-sm font-medium tracking-[0.2em] uppercase mb-6"
        >
          {accent}
        </motion.span>
      )}
      <motion.h1
        variants={fadeUp}
        className="text-5xl sm:text-6xl md:text-8xl font-bold text-text-primary leading-[0.95] tracking-tight"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-text-secondary mt-6 max-w-md"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

/* ─── Section Slide ─── */

export function SectionSlide({
  label,
  title,
  number,
}: {
  label?: string;
  title: string;
  number?: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-start justify-center w-full h-full px-8 sm:px-16 md:px-24 max-w-5xl mx-auto"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      {number && (
        <motion.span
          variants={fadeUp}
          className="text-[120px] sm:text-[160px] font-black text-white/[0.04] leading-none absolute right-8 sm:right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        >
          {number}
        </motion.span>
      )}
      {label && (
        <motion.span
          variants={fadeUp}
          className="text-neon-cyan text-xs font-medium tracking-[0.2em] uppercase mb-4"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-4xl sm:text-5xl md:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

/* ─── Bento Slide ─── */

export function BentoSlide({
  title,
  label,
  children,
}: {
  title: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className="flex flex-col justify-center w-full min-h-full px-6 sm:px-12 md:px-20 py-12 max-w-6xl mx-auto"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <div className="mb-8">
        {label && (
          <motion.span
            variants={fadeUp}
            className="text-neon-cyan text-xs font-medium tracking-[0.2em] uppercase block mb-2"
          >
            {label}
          </motion.span>
        )}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        variants={stagger}
        className="grid grid-cols-2 gap-3 sm:gap-4"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ─── Bento Card ─── */

export function BentoCard({
  icon,
  title,
  description,
  span = 1,
  accent = false,
  image,
  video,
}: {
  icon: ReactNode;
  title?: string;
  description: ReactNode;
  span?: 1 | 2;
  accent?: boolean;
  image?: string;
  video?: string;
}) {
  return (
    <motion.div
      variants={scaleIn}
      className={`
        rounded-2xl border overflow-hidden flex flex-col
        ${span === 2 ? "col-span-2" : "col-span-2 sm:col-span-1"}
        ${
          accent
            ? "bg-neon-cyan/[0.06] border-neon-cyan/20"
            : "bg-surface-raised border-wire-subtle"
        }
      `}
    >
      {video && (
        <div className="w-full">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>
      )}
      {image && !video && (
        <div className="w-full">
          <img
            src={image}
            alt={title || ""}
            className="w-full h-auto"
          />
        </div>
      )}
      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
            accent
              ? "bg-neon-cyan/15 text-neon-cyan"
              : "bg-white/[0.04] text-text-muted"
          }`}
        >
          {icon}
        </div>
        {title && (
          <p
            className={`text-sm font-semibold ${
              accent ? "text-neon-cyan" : "text-text-primary"
            }`}
          >
            {title}
          </p>
        )}
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Video Slide (large video center, talking points bottom) ─── */

export function VideoSlide({
  title,
  label,
  video,
  children,
}: {
  title: string;
  label?: string;
  video: string;
  children: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  return (
    <motion.div
      className="flex flex-col justify-center w-full min-h-full px-6 sm:px-12 md:px-20 py-12 max-w-6xl mx-auto"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <div className="mb-6">
        {label && (
          <motion.span
            variants={fadeUp}
            className="text-neon-cyan text-xs font-medium tracking-[0.2em] uppercase block mb-2"
          >
            {label}
          </motion.span>
        )}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight"
        >
          {title}
        </motion.h2>
      </div>

      <motion.div variants={scaleIn} className="relative rounded-2xl border border-wire-subtle overflow-hidden bg-black mb-6">
        <video
          ref={videoRef}
          src={video}
          muted={muted}
          playsInline
          className="w-full h-auto max-h-[55vh] object-contain mx-auto"
          onClick={togglePlay}
        />
        <div className="absolute bottom-0 inset-x-0 flex items-center gap-3 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            {playing ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm10.5 0a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            {muted ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
              </svg>
            )}
          </button>
        </div>
      </motion.div>

      <motion.div variants={stagger} className="grid grid-cols-2 gap-3 sm:gap-4">
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ─── Split Slide (two-column: content left, image right) ─── */

export function SplitSlide({
  title,
  label,
  image,
  children,
}: {
  title: string;
  label?: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className="flex flex-col justify-center w-full min-h-full px-6 sm:px-12 md:px-20 py-12 max-w-6xl mx-auto"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <div className="mb-8">
        {label && (
          <motion.span
            variants={fadeUp}
            className="text-neon-cyan text-xs font-medium tracking-[0.2em] uppercase block mb-2"
          >
            {label}
          </motion.span>
        )}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight"
        >
          {title}
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <motion.div variants={stagger} className="flex flex-col gap-3 sm:gap-4">
          {children}
        </motion.div>
        <motion.div
          variants={scaleIn}
          className="rounded-2xl border border-wire-subtle overflow-hidden"
        >
          <img src={image} alt={title} className="w-full h-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Inline helpers ─── */

export function Bold({ children }: { children: ReactNode }) {
  return <span className="text-text-primary font-semibold">{children}</span>;
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-neon-cyan font-semibold">{children}</span>;
}

/* ─── Quote Slide ─── */

export function QuoteSlide({
  quote,
  attribution,
}: {
  quote: string;
  attribution?: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center w-full h-full px-8 sm:px-16 max-w-3xl mx-auto"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <motion.span
        variants={scaleIn}
        className="text-neon-cyan text-6xl mb-6 leading-none"
      >
        &ldquo;
      </motion.span>
      <motion.blockquote
        variants={fadeUp}
        className="text-2xl sm:text-3xl md:text-4xl text-text-primary leading-relaxed font-light italic"
      >
        {quote}
      </motion.blockquote>
      {attribution && (
        <motion.p variants={fadeUp} className="text-text-muted text-base mt-8">
          — {attribution}
        </motion.p>
      )}
    </motion.div>
  );
}
