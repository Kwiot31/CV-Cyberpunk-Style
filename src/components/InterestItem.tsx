import React from "react";

interface InterestItemProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export const InterestItem: React.FC<InterestItemProps> = ({ icon, title, description }) => (
  <div className="flex items-center gap-4 md:gap-5 group">
    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
      {React.cloneElement(icon, { size: 20, className: "md:w-6 md:h-6" })}
    </div>
    <div>
      <h4 className="text-white font-black text-xs md:text-sm tracking-[0.15em] uppercase mb-1">
        {title}
      </h4>
      <p className="text-[10px] text-green-500/70 font-bold tracking-tight uppercase">
        {description}
      </p>
    </div>
  </div>
);
