import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassContainer: React.FC<GlassContainerProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "glass rounded-3xl overflow-hidden transition-all duration-300 hover:border-primary/30 shadow-2xl",
      className
    )}>
      {children}
    </div>
  );
};

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children, className }) => {
  return (
    <section className={cn("mb-8", className)}>
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className="text-primary">{icon}</span>}
        <h2 className="text-xl font-bold tracking-wider text-white uppercase border-b-2 border-primary/20 pb-1 pr-8">
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};
