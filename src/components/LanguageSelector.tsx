import React from "react";
import { Globe } from "lucide-react";
import FloatingLines from "./FloatingLines";
import { GlassContainer } from "./GlassContainer";
import type { Lang } from "../types";

interface LanguageSelectorProps {
  onSelect: (lang: Lang) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#010101] overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <FloatingLines color="rgba(34, 197, 94, 0.4)" count={15} />
    </div>
    <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(34,197,94,0.1)_0%,_transparent_70%)] opacity-50" />

    <main className="relative z-10 w-full max-w-md mx-auto p-6 animate-in fade-in zoom-in duration-700">
      <GlassContainer className="p-12 text-center border-green-500/20">
        <div className="mb-10">
          <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/40 shadow-[0_0_25px_rgba(34,197,94,0.2)] mx-auto mb-6">
            <Globe size={32} />
          </div>
          <h2 className="text-green-500 font-black tracking-[0.4em] uppercase text-[10px] mb-2 animate-pulse">
            System Initialization
          </h2>
          <h1 className="text-white text-3xl font-black tracking-tighter uppercase leading-none">
            CHOOSE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 italic">
              LANGUAGE
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button
            type="button"
            onClick={() => onSelect("pl")}
            className="group relative py-4 bg-green-500/5 border border-green-500/10 rounded-xl hover:bg-green-500 hover:text-black transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 font-black tracking-[0.3em] uppercase transition-colors">
              Polski
            </span>
            <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          <button
            type="button"
            onClick={() => onSelect("en")}
            className="group relative py-4 bg-green-500/5 border border-green-500/10 rounded-xl hover:bg-green-500 hover:text-black transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 font-black tracking-[0.3em] uppercase transition-colors">
              English
            </span>
            <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </GlassContainer>
    </main>
  </div>
);
