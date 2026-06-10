import React, { useState } from "react";
import type { ExperienceEntry } from "../types";

const CLAMP_LENGTH = 280;

interface ExperienceItemProps extends ExperienceEntry {
  readMoreLabel: string;
  readLessLabel: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  period,
  description,
  skills,
  readMoreLabel,
  readLessLabel,
}) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = description.length > CLAMP_LENGTH;
  const visibleText =
    !isLong || expanded ? description : `${description.slice(0, CLAMP_LENGTH).trim()}…`;

  return (
    <div className="relative pl-6 md:pl-10 pb-10 md:pb-12 border-l-2 border-white/5 last:pb-0 group">
      <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-[#050505] border-2 border-green-500 group-hover:bg-green-500 transition-all duration-500 shadow-[0_0_20px_rgba(34,197,94,0.4)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.8)]" />
      <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-green-300 transition-colors">
        {role}
      </h3>
      <div className="flex items-center gap-3 text-green-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4 md:mb-5 py-1 px-0 rounded-lg w-fit transition-all group-hover:text-green-300">
        {company} <span className="text-zinc-700 font-normal">|</span> {period}
      </div>
      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium max-w-2xl mb-3 group-hover:text-zinc-200 transition-colors">
        {visibleText}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-green-500 hover:text-green-400 mb-4 transition-colors"
        >
          {expanded ? readLessLabel : readMoreLabel}
        </button>
      )}
      {skills && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-[8px] md:text-[9px] font-black uppercase tracking-tighter bg-green-500/5 border border-green-500/20 rounded text-green-500/60 hover:text-green-400 hover:border-green-500/40 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
