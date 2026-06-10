import React from "react";

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassContainer: React.FC<GlassContainerProps> = ({ children, className = "" }) => (
  <div
    className={`relative bg-black/60 backdrop-blur-3xl border border-white/10 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(34,197,94,0.3)] ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </div>
);
