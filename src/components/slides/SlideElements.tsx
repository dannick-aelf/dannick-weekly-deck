"use client";

import { type ReactNode } from "react";
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
}: {
  icon: ReactNode;
  title?: string;
  description: ReactNode;
  span?: 1 | 2;
  accent?: boolean;
  image?: string;
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
      {image && (
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
