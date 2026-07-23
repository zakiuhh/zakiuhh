"use client";

import React, { useState } from "react";
import { Share2, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ShareProjectButtonProps {
  slug: string;
  title: string;
}

export const ShareProjectButton: React.FC<ShareProjectButtonProps> = ({ slug, title }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : `https://zakiuhh.vercel.app/projects/${slug}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <>
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-bright text-xs dev-tag text-text-main hover:text-accent hover:border-accent/50 transition-all shadow-md active:scale-95"
        title="Share Project Link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-accent shrink-0" />
        ) : (
          <Share2 className="w-4 h-4 text-text-dim shrink-0" />
        )}
        <span>{copied ? "LINK_COPIED" : "SHARE_PROJECT"}</span>
      </button>

      {/* Dev Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 px-4 sm:px-5 py-3 rounded-2xl bg-bg-surface/95 border border-accent/40 backdrop-blur-xl text-xs dev-tag text-text-main shadow-[0_0_30px_rgba(0,255,136,0.2)] flex items-center gap-3 max-w-[90vw] sm:max-w-md"
          >
            <div className="p-1.5 rounded-lg bg-accent/10 border border-accent/30 text-accent shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-accent font-bold text-[11px]">[0x_SHARE_SUCCESS]</span>
              <span className="text-text-sub font-mono text-[11px] truncate">
                {title} link copied to clipboard!
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
