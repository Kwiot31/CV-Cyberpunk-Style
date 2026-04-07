import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  Layers,
  ExternalLink,
  Zap,
  Dumbbell,
  Bike,
  Navigation,
  Cpu,
  Globe,
} from "lucide-react";
import FloatingLines from "./components/FloatingLines";
import { translations } from "./translations";

// === KOMPONENTY WIZUALNE ===

const GlassContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative bg-black/60 backdrop-blur-3xl border border-white/10 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(34,197,94,0.3)] ${className}`}
  >
    {/* Wewnętrzna poświata kontenera */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </div>
);

const Section = ({
  title,
  icon,
  children,
  headerClassName = "",
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  headerClassName?: string;
}) => (
  <section className="mb-10 md:mb-14 relative">
    <div className={`relative z-10 flex items-center gap-3 md:gap-5 mb-6 md:mb-8 ${headerClassName}`}>
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/40 shadow-[0_0_25px_rgba(34,197,94,0.2)]">
        {React.cloneElement(icon as React.ReactElement, { size: 20 })}
      </div>
      <h2 className="text-lg md:text-2xl font-black tracking-[0.15em] md:tracking-[0.25em] text-white uppercase border-b-2 border-green-500/30 pb-2 flex-1 shadow-[0_4px_10px_-5px_rgba(34,197,94,0.3)]">
        {title}
      </h2>
    </div>
    <div className="space-y-6 relative z-10">{children}</div>
  </section>
);

const ExperienceItem = ({
  role,
  company,
  period,
  description,
  skills,
}: any) => (
  <div className="relative pl-6 md:pl-10 pb-10 md:pb-12 border-l-2 border-white/5 last:pb-0 group">
    <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-[#050505] border-2 border-green-500 group-hover:bg-green-500 transition-all duration-500 shadow-[0_0_20px_rgba(34,197,94,0.4)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.8)]" />
    <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-green-300 transition-colors">
      {role}
    </h3>
    <div className="flex items-center gap-3 text-green-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4 md:mb-5 py-1 px-0 rounded-lg w-fit transition-all group-hover:text-green-300">
      {company} <span className="text-zinc-700 font-normal">|</span> {period}
    </div>
    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium max-w-2xl mb-6 group-hover:text-zinc-200 transition-colors">
      {description}
    </p>
    {skills && (
      <div className="flex flex-wrap gap-2">
        {skills.map((s: string) => (
          <span
            key={s}
            className="px-2 py-1 text-[8px] md:text-[9px] font-black uppercase tracking-tighter bg-green-500/5 border border-green-500/20 rounded text-green-500/60 hover:text-green-400 hover:border-green-500/40 transition-all cursor-default"
          >
            {s}
          </span>
        ))}
      </div>
    )}
  </div>
);

const SocialIcon = ({ icon, href = "#" }: any) => (
  <a
    href={href}
    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-green-600 hover:border-green-600 hover:scale-110 hover:-rotate-6 transition-all duration-500 shadow-2xl"
  >
    {React.cloneElement(icon, { size: 24 })}
  </a>
);

const RevealableContact = ({ icon, value, href, revealed, onReveal }: any) => {
  const mask = (val: string) => val.replace(/[^\s]/g, "•");

  const handleReveal = () => {
    if (onReveal) onReveal();
  };

  const content = (
    <div className="flex items-center gap-2 md:gap-3">
      {React.cloneElement(icon, { size: 14, className: "text-green-500 md:w-4 md:h-4" })}
      <span className={`transition-all duration-500 ${revealed ? "text-white" : "text-zinc-600 font-mono tracking-widest"}`}>
        {revealed ? value : mask(value)}
      </span>
    </div>
  );

  if (!revealed) {
    return (
      <button 
        onClick={handleReveal}
        className="group flex items-center gap-2 hover:opacity-100 transition-opacity"
      >
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} className="hover:text-green-400 transition-all text-white animate-in fade-in duration-500">
        {content}
      </a>
    );
  }

  return <div className="text-zinc-400 animate-in fade-in duration-500">{content}</div>;
};

const LanguageSelector = ({ onSelect }: { onSelect: (lang: "pl" | "en") => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#010101] overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <FloatingLines color="rgba(34, 197, 94, 0.4)" count={15} />
    </div>
    <div className="absolute inset-0 z-[1] pointer-events-none bg-radial-gradient from-green-500/10 via-transparent to-transparent opacity-50" />
    
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
            CHOOSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 italic">LANGUAGE</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={() => onSelect("pl")}
            className="group relative py-4 bg-green-500/5 border border-green-500/10 rounded-xl hover:bg-green-500 hover:text-black transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 font-black tracking-[0.3em] uppercase transition-colors">Polski</span>
            <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          <button
            onClick={() => onSelect("en")}
            className="group relative py-4 bg-green-500/5 border border-green-500/10 rounded-xl hover:bg-green-500 hover:text-black transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 font-black tracking-[0.3em] uppercase transition-colors">English</span>
            <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </GlassContainer>
    </main>
  </div>
);

// === GŁÓWNA STRONA ===

export default function App() {
  const [lang, setLang] = useState<"pl" | "en" | null>(null);
  const [anyRevealed, setAnyRevealed] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage") as "pl" | "en";
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const handleLanguageSelect = (selectedLang: "pl" | "en") => {
    setLang(selectedLang);
    localStorage.setItem("preferredLanguage", selectedLang);
  };

  const toggleLanguage = () => {
    const newLang = lang === "pl" ? "en" : "pl";
    handleLanguageSelect(newLang);
  };

  const handleRevealContacts = () => {
    if (!anyRevealed) {
      setAnyRevealed(true);
      // Wyślij zdarzenie do Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'reveal_contacts', {
          event_category: 'engagement',
          event_label: 'Contact Details Revealed'
        });
      }
    }
  };

  if (!lang) {
    return <LanguageSelector onSelect={handleLanguageSelect} />;
  }

  const t = translations[lang];

  return (
    <div className="relative min-h-screen bg-[#010101] text-zinc-400 font-sans p-2 md:p-8 lg:p-12 overflow-x-hidden selection:bg-green-600/40 selection:text-white">
      {/* TŁO - EFEKT FLOATING LINES */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <FloatingLines
          color="rgba(34, 197, 94, 0.4)"
          count={25}
          minSpeed={1.5}
          maxSpeed={3.0}
        />
      </div>

      {/* DODATKOWA POŚWIATA TŁA DLA GŁĘBI */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-green-500/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-green-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      <main className="relative z-10 w-full max-w-[1450px] mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <GlassContainer className="border-white/5 shadow-[0_0_80px_-20px_rgba(34,197,94,0.15)]">
          {/* NAGŁÓWEK Z POŚWIATĄ */}
          <div className="relative p-8 md:p-24 border-b border-white/5 bg-white/[0.01] flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-16 overflow-hidden">
            {/* Wewnętrzny blask nagłówka */}
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[140%] bg-green-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />

            {/* Language Toggle Button */}
            <button 
              onClick={toggleLanguage}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-green-400 hover:border-green-500/30 transition-all group"
            >
              <Globe size={12} className="group-hover:rotate-180 transition-transform duration-700" />
              {lang === "pl" ? "EN" : "PL"}
            </button>

            <div className="relative z-10 text-center lg:text-left flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 md:mb-10 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {t.status}
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-black text-white mb-6 md:mb-8 tracking-tighter uppercase leading-[0.9] break-words">
                {t.name} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 italic pr-0 md:pr-6 inline-block">
                  {t.surname}
                </span>
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl text-zinc-400 font-extralight tracking-[0.2em] sm:tracking-[0.5em] uppercase mb-10 md:mb-14">
                {t.role}{" "}
                <span className="text-green-400 font-black underline decoration-green-500 decoration-4 sm:decoration-8 underline-offset-[8px] sm:underline-offset-[12px] shadow-green-500/20 shadow-sm">
                  {t.roleAccent}
                </span>
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 text-[9px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-80">
                <RevealableContact 
                  icon={<Mail />} 
                  value="kubakwiat31@gmail.com" 
                  href="mailto:kubakwiat31@gmail.com" 
                  revealed={anyRevealed}
                  onReveal={() => setAnyRevealed(true)}
                />
                <RevealableContact 
                  icon={<Phone />} 
                  value="+48 575 418 810" 
                  href="tel:+48575418810" 
                  revealed={anyRevealed}
                  onReveal={() => setAnyRevealed(true)}
                />
                <RevealableContact 
                  icon={<MapPin />} 
                  value={t.location} 
                  revealed={anyRevealed}
                  onReveal={() => setAnyRevealed(true)}
                />
                {!anyRevealed && (
                  <button 
                    onClick={() => setAnyRevealed(true)}
                    className="text-[7px] md:text-[8px] text-green-500 animate-pulse tracking-[0.3em] font-black px-2 py-1 border border-green-500/50 rounded-md hover:bg-green-500 hover:text-black hover:border-green-500 transition-all duration-300"
                  >
                    [ CLICK TO DECRYPT ]
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-row lg:flex-col gap-4 md:gap-6 relative z-10">
              <SocialIcon
                icon={<Linkedin />}
                href="https://www.linkedin.com/in/jakub-kwiatkowski-73200b23b/"
              />
            </div>
          </div>

          {/* TREŚĆ BEZ POŚWIATY */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 bg-black/40 overflow-hidden">
            {/* LEWA KOLUMNA */}
            <div className="lg:col-span-4 p-6 md:p-20 border-r border-white/5 bg-green-500/[0.02] relative z-10">
              <Section title={t.sections.about} icon={<Code2 size={24} />}>
                <div className="p-5 md:p-6 rounded-2xl md:rounded-[2rem] bg-green-500/[0.03] border border-green-500/10 shadow-[inset_0_0_20px_rgba(34,197,94,0.05)]">
                  <p className="text-[10px] md:text-base leading-relaxed text-green-300 font-bold italic mb-4 md:mb-6 tracking-wide uppercase">
                    "{t.about.quote}"
                  </p>
                  <p className="text-xs md:text-sm leading-relaxed text-zinc-200 font-medium whitespace-pre-line">
                    {t.about.text}
                  </p>
                </div>
              </Section>

              <Section title={t.sections.skills} icon={<Layers size={24} />}>
                <div className="space-y-4">
                  {Object.entries(t.skills).map(([key, value]: [string, any]) => (
                    <div key={key} className="group p-4 rounded-xl bg-green-500/[0.02] border border-green-500/10 hover:bg-green-500 hover:border-green-500 transition-all duration-500 cursor-default">
                      <p className="text-[10px] md:text-xs text-zinc-300 leading-relaxed group-hover:text-black font-medium">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title={t.sections.languages} icon={<Globe size={24} />}>
                <div className="grid grid-cols-2 gap-4">
                  {t.languages.map((lang: any, idx: number) => (
                    <div key={idx} className="group p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center hover:bg-green-500 hover:border-green-500 transition-all duration-500 cursor-default">
                      <div className="text-white font-black text-xs uppercase mb-1 group-hover:text-black">{lang.name}</div>
                      <div className="text-green-500 text-[10px] font-bold group-hover:text-black/70">{lang.level}</div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title={t.sections.interests} icon={<Zap size={24} />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
                  <div className="flex items-center gap-4 md:gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                      <Dumbbell size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs md:text-sm tracking-[0.15em] uppercase mb-1">
                        {t.interests.gym.title}
                      </h4>
                      <p className="text-[10px] text-green-500/70 font-bold tracking-tight uppercase">
                        {t.interests.gym.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                      <Bike size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs md:text-sm tracking-[0.15em] uppercase mb-1">
                        {t.interests.bike.title}
                      </h4>
                      <p className="text-[10px] text-green-500/70 font-bold tracking-tight uppercase">
                        {t.interests.bike.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                      <Navigation size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs md:text-sm tracking-[0.15em] uppercase mb-1">
                        {t.interests.walking.title}
                      </h4>
                      <p className="text-[10px] text-green-500/70 font-bold tracking-tight uppercase">
                        {t.interests.walking.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                      <Cpu size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs md:text-sm tracking-[0.15em] uppercase mb-1">
                        {t.interests.tech.title}
                      </h4>
                      <p className="text-[10px] text-green-500/70 font-bold tracking-tight uppercase">
                        {t.interests.tech.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Section>
            </div>

            {/* PRAWA KOLUMNA */}
            <div className="lg:col-span-8 p-6 md:p-20 relative z-10">
              <Section 
                title={t.sections.experience} 
                icon={<Briefcase size={24} />}
              >
                {t.experience.map((exp: any, idx: number) => (
                  <ExperienceItem
                    key={idx}
                    role={exp.role}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    skills={exp.skills}
                  />
                ))}
              </Section>

              <Section title={t.sections.certificates} icon={<Layers size={24} />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.certificates.map((cert: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                      <div className="text-green-400"><ExternalLink size={16} /></div>
                      <span className="text-xs text-zinc-300 font-bold uppercase tracking-wider">{cert}</span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title={t.sections.education} icon={<GraduationCap size={24} />}>
                <div className="space-y-10">
                  {t.education.map((edu: any, idx: number) => (
                    <div key={idx} className="group relative pl-6 md:pl-10 border-l-2 border-white/5">
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

          {/* STOPKA */}
          <div className="p-8 md:p-12 border-t border-white/5 bg-black text-center relative z-10">
            <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] md:tracking-[1.5em] text-zinc-800 hover:text-green-900 transition-colors cursor-default">
              Jakub Kwiatkowski <span className="text-green-600">//</span> 2026
              {t.footer}
            </p>
          </div>
        </GlassContainer>
      </main>
    </div>
  );
}
