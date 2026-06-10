import React, { useState, useEffect } from "react";
import {
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  Layers,
  ExternalLink,
  Zap,
  Dumbbell,
  Salad,
  Cpu,
  Globe,
  Award,
  Shield,
} from "lucide-react";
import FloatingLines from "./components/FloatingLines";
import { GlassContainer } from "./components/GlassContainer";
import { Section } from "./components/Section";
import { ExperienceItem } from "./components/ExperienceItem";
import { SocialIcon } from "./components/SocialIcon";
import { InterestItem } from "./components/InterestItem";
import { LanguageSelector } from "./components/LanguageSelector";
import { translations } from "./translations";
import type { Lang } from "./types";

export default function App() {
  const [lang, setLang] = useState<Lang | null>(() => {
    const savedLang = localStorage.getItem("preferredLanguage");
    return savedLang === "pl" || savedLang === "en" ? savedLang : null;
  });

  useEffect(() => {
    if (lang) {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const handleLanguageSelect = (selectedLang: Lang) => {
    setLang(selectedLang);
    localStorage.setItem("preferredLanguage", selectedLang);
  };

  const toggleLanguage = () => {
    if (!lang) return;
    handleLanguageSelect(lang === "pl" ? "en" : "pl");
  };

  if (!lang) {
    return <LanguageSelector onSelect={handleLanguageSelect} />;
  }

  const t = translations[lang];

  return (
    <div className="relative min-h-screen bg-[#010101] text-zinc-400 font-sans p-2 md:p-8 lg:p-12 overflow-x-hidden selection:bg-green-600/40 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60 motion-reduce:opacity-30">
        <FloatingLines
          color="rgba(34, 197, 94, 0.4)"
          count={25}
          minSpeed={1.5}
          maxSpeed={3.0}
        />
      </div>

      <div className="fixed inset-0 z-[1] pointer-events-none motion-reduce:hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-green-500/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-green-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      <main className="relative z-10 w-full max-w-[1450px] mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <GlassContainer className="border-white/5 shadow-[0_0_80px_-20px_rgba(34,197,94,0.15)]">
          <div className="relative p-8 md:p-24 border-b border-white/5 bg-white/[0.01] flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-16 overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[140%] bg-green-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse motion-reduce:animate-none" />

            <button
              type="button"
              onClick={toggleLanguage}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-green-400 hover:border-green-500/30 transition-all group"
            >
              <Globe size={12} className="group-hover:rotate-180 transition-transform duration-700" />
              {lang === "pl" ? "EN" : "PL"}
            </button>

            <div className="relative z-10 text-center lg:text-left flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 md:mb-10 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse motion-reduce:animate-none" />
                {t.status}
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-black text-white mb-6 md:mb-8 tracking-tighter uppercase leading-[0.9] break-words">
                {t.name} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 italic pr-0 md:pr-6 inline-block">
                  {t.surname}
                </span>
              </h1>
              <p className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 pb-3 md:pb-4 mb-10 md:mb-14 border-b border-green-500/25 shadow-[0_1px_0_0_rgba(34,197,94,0.12)] text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-[0.06em] text-white">
                <span className="text-green-400">{t.role}</span>
                <span>{t.roleAccent}</span>
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 text-[9px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-80">
                <div className="flex items-center gap-2 md:gap-3 text-white">
                  <MapPin size={14} className="text-green-500 md:w-4 md:h-4" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row lg:flex-col gap-4 md:gap-6 relative z-10">
              <SocialIcon
                icon={<Linkedin />}
                href="https://www.linkedin.com/in/jakub-kwiatkowski-73200b23b/"
                label="LinkedIn"
              />
              <SocialIcon
                icon={<Github />}
                href="https://github.com/Kwiot31"
                label="GitHub"
              />
            </div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 bg-black/40 overflow-hidden">
            <div className="lg:col-span-4 p-6 md:p-20 border-r border-white/5 bg-green-500/[0.02] relative z-10">
              <Section title={t.sections.about} icon={<Code2 size={24} />}>
                <div className="p-5 md:p-6 rounded-2xl md:rounded-[2rem] bg-green-500/[0.03] border border-green-500/10 shadow-[inset_0_0_20px_rgba(34,197,94,0.05)]">
                  <p className="text-xs md:text-base leading-relaxed text-green-300 font-bold italic mb-4 md:mb-6 tracking-wide uppercase">
                    &ldquo;{t.about.quote}&rdquo;
                  </p>
                  <p className="text-xs md:text-sm leading-relaxed text-zinc-200 font-medium whitespace-pre-line">
                    {t.about.text}
                  </p>
                </div>
              </Section>

              <Section title={t.sections.skills} icon={<Layers size={24} />}>
                <div className="space-y-4">
                  {Object.entries(t.skills).map(([key, value]) => (
                    <div
                      key={key}
                      className="group p-4 rounded-xl bg-green-500/[0.02] border border-green-500/10 hover:bg-green-500 hover:border-green-500 transition-all duration-500 cursor-default"
                    >
                      <p className="text-[10px] md:text-xs text-zinc-300 leading-relaxed group-hover:text-black font-medium">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title={t.sections.languages} icon={<Globe size={24} />}>
                <div className="grid grid-cols-2 gap-4">
                  {t.languages.map((language) => (
                    <div
                      key={language.name}
                      className="group p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center hover:bg-green-500 hover:border-green-500 transition-all duration-500 cursor-default"
                    >
                      <div className="text-white font-black text-xs uppercase mb-1 group-hover:text-black">
                        {language.name}
                      </div>
                      <div className="text-green-500 text-[10px] font-bold group-hover:text-black/70">
                        {language.level}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title={t.sections.interests} icon={<Zap size={24} />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
                  <InterestItem
                    icon={<Cpu />}
                    title={t.interests.tech.title}
                    description={t.interests.tech.desc}
                  />
                  <InterestItem
                    icon={<Dumbbell />}
                    title={t.interests.active.title}
                    description={t.interests.active.desc}
                  />
                  <InterestItem
                    icon={<Salad />}
                    title={t.interests.lifestyle.title}
                    description={t.interests.lifestyle.desc}
                  />
                </div>
              </Section>
            </div>

            <div className="lg:col-span-8 p-6 md:p-20 relative z-10">
              <Section title={t.sections.experience} icon={<Briefcase size={24} />}>
                {t.experience.map((exp) => (
                  <ExperienceItem
                    key={`${exp.company}-${exp.period}`}
                    {...exp}
                    readMoreLabel={t.ui.readMore}
                    readLessLabel={t.ui.readLess}
                  />
                ))}
              </Section>

              <Section title={t.sections.projects} icon={<Code2 size={24} />}>
                <div className="space-y-4">
                  {t.projects.map((project) => (
                    <a
                      key={project.url}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-5 md:p-6 rounded-xl bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 hover:border-green-500/40 transition-all duration-500 group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-green-300 transition-colors">
                          {project.name}
                        </h3>
                        <ExternalLink size={16} className="text-green-400 shrink-0 mt-1" />
                      </div>
                      <p className="text-green-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4">
                        {project.period}
                      </p>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium whitespace-pre-line group-hover:text-zinc-200 transition-colors">
                        {project.description}
                      </p>
                    </a>
                  ))}
                </div>
              </Section>

              <Section title={t.sections.certificates} icon={<Award size={24} />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.certificates.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20"
                    >
                      <div className="text-green-400">
                        <Award size={16} />
                      </div>
                      <span className="text-xs text-zinc-300 font-bold uppercase tracking-wider">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title={t.sections.education} icon={<GraduationCap size={24} />}>
                <div className="space-y-10">
                  {t.education.map((edu) => (
                    <div
                      key={`${edu.school}-${edu.period}`}
                      className="group relative pl-6 md:pl-10 border-l-2 border-white/5"
                    >
                      <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-[#050505] border-2 border-green-500 group-hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)]" />
                      <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight mb-2">
                        {edu.degree}
                      </h3>
                      <div className="text-green-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest py-1 px-0 rounded-lg w-fit mb-4 transition-all group-hover:text-green-300">
                        {edu.school}{" "}
                        <span className="text-zinc-800 mx-2">//</span> {edu.period}
                      </div>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed italic font-medium">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          </div>

          <div className="p-8 md:p-12 border-t border-white/5 bg-black text-center relative z-10 space-y-3">
            <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] md:tracking-[1.5em] text-zinc-800 hover:text-green-900 transition-colors cursor-default">
              Jakub Kwiatkowski <span className="text-green-600">//</span> 2026 · {t.footer}
            </p>
            <p className="inline-flex items-center justify-center gap-2 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              <Shield size={12} className="text-green-500/70" />
              {t.security}
            </p>
          </div>
        </GlassContainer>
      </main>
    </div>
  );
}
