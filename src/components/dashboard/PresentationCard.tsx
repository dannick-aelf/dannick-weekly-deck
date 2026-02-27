"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { PlayIcon } from "@heroicons/react/24/solid";
import {
  RectangleStackIcon,
  ChevronRightIcon,
  CheckCircleIcon as CheckOutline,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon as CheckSolid } from "@heroicons/react/24/solid";
import { formatDateRange } from "@/lib/utils/week";
import type { PresentationEntry } from "@/lib/presentations/registry";
import { useDeckStore } from "@/lib/store/deck-store";

interface PresentationCardProps {
  presentation: PresentationEntry;
  isCurrentWeek?: boolean;
}

export function PresentationCard({
  presentation,
  isCurrentWeek = false,
}: PresentationCardProps) {
  const router = useRouter();
  const [isPressed, setIsPressed] = useState(false);
  const { isComplete, toggleComplete } = useDeckStore();
  const complete = isComplete(presentation.slug);

  const handleClick = () => {
    router.push(`/present/${presentation.slug}`);
  };

  const handleToggleStatus = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleComplete(presentation.slug);
  };

  const statusLabel = complete ? "Complete" : "Draft";

  return (
    <motion.div
      layoutId={presentation.slug}
      onClick={handleClick}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => setIsPressed(false)}
      className={`
        relative group cursor-pointer rounded-2xl overflow-hidden
        bg-surface-raised border transition-all duration-200
        ${isCurrentWeek ? "border-neon-cyan/40" : "border-wire-subtle"}
        ${isPressed ? "scale-[0.97] opacity-80" : "hover:border-wire-emphasis hover:-translate-y-0.5"}
      `}
    >
      {/* Thumbnail preview area */}
      <div className="relative h-28 bg-surface-base overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="absolute bottom-2 right-4 text-5xl font-black text-white/[0.04] leading-none select-none">
          W{presentation.weekNumber}
        </div>

        {isCurrentWeek && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
            <span className="text-2xs font-medium text-neon-cyan">
              This Week
            </span>
          </div>
        )}

        <div className="absolute top-3 right-3">
          <button
            onClick={handleToggleStatus}
            className={`flex items-center gap-1 text-2xs px-2 py-0.5 rounded-md font-medium transition-colors duration-150 hover:scale-105 active:scale-95 ${
              complete
                ? "bg-neon-cyan/15 text-neon-cyan"
                : "bg-white/5 text-text-muted hover:bg-white/10"
            }`}
          >
            {complete ? (
              <CheckSolid className="w-3 h-3" />
            ) : (
              <CheckOutline className="w-3 h-3" />
            )}
            {statusLabel}
          </button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40">
          <div
            className="w-11 h-11 rounded-full bg-neon-cyan flex items-center justify-center
              text-surface-deepest transition-transform duration-150
              hover:scale-110 active:scale-95"
          >
            <PlayIcon className="w-5 h-5 ml-0.5" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-text-primary truncate mb-1">
          {presentation.title}
        </h3>

        <p className="text-2xs text-text-muted mb-3">
          {formatDateRange(presentation.dateRangeStart, presentation.dateRangeEnd)}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-2xs text-text-muted">
              <RectangleStackIcon className="w-3.5 h-3.5" />
              {presentation.slideCount} slides
            </span>
          </div>

          <ChevronRightIcon className="w-3.5 h-3.5 text-text-muted opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
        </div>
      </div>
    </motion.div>
  );
}
