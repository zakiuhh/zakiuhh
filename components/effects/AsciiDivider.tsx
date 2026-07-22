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
    <div className={`w-full overflow-hidden py-6 select-none text-text-dim/40 dev-tag text-xs tracking-widest ${className}`}>
      <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap overflow-hidden">
        <span className="text-accent/60 font-semibold text-[11px] sm:text-xs shrink-0">[+ {label} +]</span>
        <div className="flex-1 overflow-hidden opacity-30 text-[10px] tracking-tighter truncate">
          +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
        </div>
        <span className="text-[10px] text-text-dim/30 hidden sm:inline shrink-0">0x00_VANILLA_CORE</span>
      </div>
    </div>
  );
};
