"use client";

import React from "react";

interface AsciiDividerProps {
  label?: string;
  className?: string;
}

export const AsciiDivider: React.FC<AsciiDividerProps> = ({
  label = "SYSTEM_SECTION",
  className = "",
}) => {
  return (
    <div className={`w-full max-w-full overflow-hidden py-6 select-none text-text-dim/40 dev-tag text-xs tracking-widest ${className}`}>
      <div className="flex items-center gap-2 sm:gap-4 w-full min-w-0 overflow-hidden">
        <span className="text-accent/60 font-semibold text-[11px] sm:text-xs shrink-0 whitespace-nowrap">
          [+ {label} +]
        </span>
        <div className="flex-1 min-w-0 h-[1px] bg-gradient-to-r from-accent/30 via-border-color to-transparent opacity-60" />
        <span className="text-[10px] text-text-dim/30 hidden sm:inline shrink-0 font-mono">
          0x00_VANILLA_CORE
        </span>
      </div>
    </div>
  );
};
