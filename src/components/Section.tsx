import React from "react";

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  headerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  icon,
  children,
  headerClassName = "",
}) => (
  <section className="mb-10 md:mb-14 relative">
    <h2
      className={`flex items-center gap-3 md:gap-4 pb-3 md:pb-4 mb-6 md:mb-8 border-b border-green-500/25 shadow-[0_1px_0_0_rgba(34,197,94,0.12)] text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-[0.06em] text-white ${headerClassName}`}
    >
      <span className="text-green-400 shrink-0">
        {React.cloneElement(icon as React.ReactElement, { size: 22, strokeWidth: 2 })}
      </span>
      {title}
    </h2>
    <div className="space-y-6 relative z-10">{children}</div>
  </section>
);
