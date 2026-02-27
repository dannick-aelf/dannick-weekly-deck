"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PresentationChartBarIcon,
  DocumentTextIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { InboxIcon } from "@heroicons/react/24/outline";
import { presentations } from "@/lib/presentations/registry";
import { getCurrentWeek, formatWeekLabel } from "@/lib/utils/week";
import { PresentationCard } from "@/components/dashboard/PresentationCard";
import { SearchBar } from "@/components/dashboard/SearchBar";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const currentWeek = getCurrentWeek();

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return presentations;
    const q = searchQuery.toLowerCase();
    return presentations.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        String(p.weekNumber).includes(q)
    );
  }, [searchQuery]);

  const totalDecks = presentations.length;
  const completeDecks = presentations.filter((p) => p.status === "complete").length;
  const totalSlides = presentations.reduce((sum, p) => sum + p.slideCount, 0);

  return (
    <main className="min-h-screen bg-surface-deepest">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text-primary lg:hidden">
            ChronoAI Weekly
          </h1>
          <h1 className="text-2xl font-bold text-text-primary hidden lg:block">
            Dashboard
          </h1>
          <p className="text-sm text-text-muted mt-1">
            {formatWeekLabel(currentWeek.weekNumber, currentWeek.year)}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatCard
            icon={<PresentationChartBarIcon className="w-5 h-5" />}
            label="Total Decks"
            value={totalDecks}
          />
          <StatCard
            icon={<CheckCircleIcon className="w-5 h-5" />}
            label="Completed"
            value={completeDecks}
          />
          <StatCard
            icon={<DocumentTextIcon className="w-5 h-5" />}
            label="Total Slides"
            value={totalSlides}
          />
        </div>

        <div className="mb-6">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-text-muted uppercase tracking-wider">
            {searchQuery ? "Search Results" : "All Presentations"}
          </h2>
          <span className="text-2xs text-text-muted">
            {filtered.length} deck{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-2xl bg-surface-raised border border-wire-subtle flex items-center justify-center mb-6">
              <InboxIcon className="w-10 h-10 text-text-muted" />
            </div>
            <h2 className="text-xl font-semibold text-text-primary mb-2">
              {searchQuery ? "No results found" : "No presentations yet"}
            </h2>
            <p className="text-sm text-text-secondary max-w-xs">
              {searchQuery
                ? "Try a different search term"
                : "Your weekly presentation decks will appear here"}
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence>
              {filtered.map((p) => (
                <PresentationCard
                  key={p.slug}
                  presentation={p}
                  isCurrentWeek={
                    p.weekNumber === currentWeek.weekNumber &&
                    p.year === currentWeek.year
                  }
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </main>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="bg-surface-raised border border-wire-subtle rounded-2xl p-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-neon-cyan bg-neon-cyan/10">
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-text-primary leading-none">{value}</p>
          <p className="text-2xs text-text-muted mt-1">{label}</p>
        </div>
      </div>
    </div>
  );
}
