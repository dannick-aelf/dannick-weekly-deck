"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  HomeIcon as HomeOutline,
  Cog6ToothIcon as CogOutline,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeSolid,
  Cog6ToothIcon as CogSolid,
} from "@heroicons/react/24/solid";
import { getCurrentWeek, formatDateRange } from "@/lib/utils/week";

const NAV_ITEMS = [
  { id: "dashboard", path: "/", label: "Dashboard", outline: HomeOutline, solid: HomeSolid },
  { id: "settings", path: "/settings", label: "Settings", outline: CogOutline, solid: CogSolid },
] as const;

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const isPresenting = pathname.startsWith("/present/");
  const isEditing = pathname.startsWith("/editor/");
  if (isPresenting || isEditing) return null;

  const activeId = pathname === "/" ? "dashboard" : pathname === "/settings" ? "settings" : "";
  const week = getCurrentWeek();

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-64 bg-surface-base border-r border-wire-subtle z-20">
      {/* Brand */}
      <div className="px-6 pt-8 pb-8">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center">
            <span className="text-neon-cyan font-bold text-sm">C</span>
          </div>
          <div>
            <h1 className="text-base font-bold text-text-primary leading-tight">ChronoAI</h1>
            <p className="text-2xs text-text-muted">Weekly Presentations</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <p className="px-3 mb-2 text-2xs font-medium text-text-muted uppercase tracking-wider">
          Menu
        </p>
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = item.id === activeId;
            const Icon = isActive ? item.solid : item.outline;
            return (
              <li key={item.id}>
                <button
                  onClick={() => router.push(item.path)}
                  className={`
                    w-full flex items-center gap-3 px-3 h-11 rounded-xl text-sm font-medium
                    transition-all duration-150
                    ${
                      isActive
                        ? "bg-neon-cyan/10 text-neon-cyan"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-raised"
                    }
                  `}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {item.label}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Current week indicator */}
      <div className="px-4 pb-6">
        <div className="p-4 rounded-xl bg-surface-raised border border-wire-subtle">
          <div className="flex items-center gap-2 mb-2">
            <CalendarDaysIcon className="w-4 h-4 text-neon-cyan" />
            <span className="text-2xs font-medium text-text-muted uppercase tracking-wider">
              Current Week
            </span>
          </div>
          <p className="text-sm font-semibold text-text-primary">
            Week {week.weekNumber}, {week.year}
          </p>
          <p className="text-2xs text-text-muted mt-0.5">
            {formatDateRange(week.dateRangeStart, week.dateRangeEnd)}
          </p>
        </div>
      </div>
    </aside>
  );
}
