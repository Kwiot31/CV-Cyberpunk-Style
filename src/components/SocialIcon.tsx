import React from "react";

interface SocialIconProps {
  icon: React.ReactElement;
  href: string;
  label: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-green-600 hover:border-green-600 hover:scale-110 hover:-rotate-6 transition-all duration-500 shadow-2xl"
  >
    {React.cloneElement(icon, { size: 24 })}
  </a>
);
