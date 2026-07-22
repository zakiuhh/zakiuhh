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
    <div className={`w-full overflow-hidden py-8 select-none text-text-dim/40 dev-tag text-xs tracking-widest ${className}`}>
      <div className="flex items-center gap-4 whitespace-nowrap">
        <span className="text-accent/60 font-semibold">[+ {label} +]</span>
        <div className="flex-1 overflow-hidden opacity-30 text-[10px] tracking-tighter">
          +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
        </div>
        <span className="text-[10px] text-text-dim/30">0x00_VANILLA_CORE</span>
      </div>
    </div>
  );
};
