import React from "react";
import {
  Mail,
  Phone,
  Github,
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
} from "lucide-react";
import Lightning from "./components/Lightning";
import GridScan from "./components/GridScan";
import FloatingLines from "./components/FloatingLines";

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
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section className="mb-10 md:mb-14">
    <div className="flex items-center gap-3 md:gap-5 mb-6 md:mb-8">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/40 shadow-[0_0_25px_rgba(34,197,94,0.2)]">
        {React.cloneElement(icon as React.ReactElement, { size: 20 })}
      </div>
      <h2 className="text-lg md:text-2xl font-black tracking-[0.15em] md:tracking-[0.25em] text-white uppercase border-b-2 border-green-500/30 pb-2 flex-1 shadow-[0_4px_10px_-5px_rgba(34,197,94,0.3)]">
        {title}
      </h2>
    </div>
    <div className="space-y-6">{children}</div>
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
    <div className="flex items-center gap-3 text-green-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4 md:mb-5 bg-green-500/10 py-1 px-3 rounded-lg w-fit border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
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

// === GŁÓWNA STRONA ===

export default function App() {
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

            <div className="relative z-10 text-center lg:text-left flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 md:mb-10 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Gotowy do pracy
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-black text-white mb-6 md:mb-8 tracking-tighter uppercase leading-[0.9] break-words">
                JAKUB <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 italic pr-0 md:pr-6 inline-block">
                  KWIATKOWSKI
                </span>
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl text-zinc-400 font-extralight tracking-[0.2em] sm:tracking-[0.5em] uppercase mb-10 md:mb-14">
                IT Support{" "}
                <span className="text-green-400 font-black underline decoration-green-500 decoration-4 sm:decoration-8 underline-offset-[8px] sm:underline-offset-[12px] shadow-green-500/20 shadow-sm">
                  & Admin IT
                </span>
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 text-[9px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-80">
                <a
                  href="mailto:kontakt@kwiatu-dev.pl"
                  className="flex items-center gap-2 md:gap-3 hover:text-green-400 transition-all text-white"
                >
                  <Mail size={14} className="text-green-500 md:w-4 md:h-4" />{" "}
                  kubakwiat31@gmail.com
                </a>
                <a
                  href="tel:+48123456789"
                  className="flex items-center gap-2 md:gap-3 hover:text-green-400 transition-all text-white"
                >
                  <Phone size={14} className="text-green-500 md:w-4 md:h-4" /> +48 575 418 810
                </a>
                <div className="flex items-center gap-2 md:gap-3 text-zinc-400">
                  <MapPin size={14} className="text-green-500 md:w-4 md:h-4" /> Polska -
                  Poznań
                </div>
              </div>
            </div>

            <div className="flex flex-row lg:flex-col gap-4 md:gap-6 relative z-10">
              <SocialIcon
                icon={<Github />}
                href="https://github.com/Kwiot31/CV-Cyberpunk-Style"
              />
              <SocialIcon
                icon={<Linkedin />}
                href="https://github.com/Kwiot31/CV-Cyberpunk-Style"
              />
            </div>
          </div>

          {/* TREŚĆ Z POŚWIATĄ */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 bg-black/40 overflow-hidden">
            {/* Blask w tle sekcji głównej */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-green-600/5 blur-[130px] rounded-full pointer-events-none" />

            {/* LEWA KOLUMNA */}
            <div className="lg:col-span-4 p-6 md:p-20 border-r border-white/5 bg-green-500/[0.02] relative z-10">
              <Section title="O Mnie" icon={<Code2 size={24} />}>
                <div className="p-5 md:p-6 rounded-2xl md:rounded-[2rem] bg-green-500/[0.03] border border-green-500/10 shadow-[inset_0_0_20px_rgba(34,197,94,0.05)]">
                  <p className="text-[10px] md:text-base leading-relaxed text-green-300 font-bold italic mb-4 md:mb-6 tracking-wide uppercase">
                    "Wierzę, że balans między pracą a aktywnością fizyczną jest
                    kluczowy dla osiągania najlepszych rezultatów."
                  </p>
                  <p className="text-xs md:text-sm leading-relaxed text-zinc-200 font-medium">
                    Posiadam solidne podstawy z informatyki oraz ukończyłem
                    studia na kierunkach{" "}
                    <span className="text-green-400 font-bold uppercase text-[10px] md:text-[11px]">
                      Zarządzanie i Inżynieria Produkcji
                    </span>{" "}
                    oraz{" "}
                    <span className="text-green-400 font-bold uppercase text-[10px] md:text-[11px]">
                      Towaroznawstwo
                    </span>
                    .
                    <br />
                    <br />
                    Nauczyło mnie to systemowego podejścia do jakości i
                    efektywności. Łączę wiedzę techniczną z praktycznym
                    podejściem, skutecznie wspierając rozwój projektów IT.
                  </p>
                </div>
              </Section>

              <Section title="Zainteresowania" icon={<Zap size={24} />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
                  <div className="flex items-center gap-4 md:gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                      <Dumbbell size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs md:text-sm tracking-[0.15em] uppercase mb-1">
                        Siłownia
                      </h4>
                      <p className="text-[10px] text-green-500/70 font-bold tracking-tight uppercase">
                        Regularne treningi siłowe
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                      <Bike size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs md:text-sm tracking-[0.15em] uppercase mb-1">
                        Rower
                      </h4>
                      <p className="text-[10px] text-green-500/70 font-bold tracking-tight uppercase">
                        Aktywny relaks w trasie
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                      <Navigation size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs md:text-sm tracking-[0.15em] uppercase mb-1">
                        Spacery
                      </h4>
                      <p className="text-[10px] text-green-500/70 font-bold tracking-tight uppercase">
                        Źródło pozytywnej energii
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                      <Cpu size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs md:text-sm tracking-[0.15em] uppercase mb-1">
                        Nowe technologie
                      </h4>
                      <p className="text-[10px] text-green-500/70 font-bold tracking-tight uppercase">
                        Śledzenie trendów IT i AI
                      </p>
                    </div>
                  </div>
                </div>
              </Section>
            </div>

            {/* PRAWA KOLUMNA */}
            <div className="lg:col-span-8 p-6 md:p-20 relative z-10">
              <Section title="Doświadczenie" icon={<Briefcase size={24} />}>
                <ExperienceItem
                  role="Service-Desk"
                  company="Aplikacje Krytyczne Sp. z o.o."
                  period="2023 - Obecnie"
                  description="Diagnozowanie i rozwiązywanie problemów technicznych w środowiskach kontenerowych, analiza logów systemowych oraz identyfikacja błędów aplikacyjnych. Wsparcie procesów CI/CD i GitOps w klastrach Kubernetes. Zarządzanie konfiguracją za pomocą Ansible oraz monitorowanie zdrowia klastrów i aplikacji. Współpraca z zespołami developerskimi i administracyjnymi w zakresie eskalacji zgłoszeń i wdrażania zmian."
                  skills={[
                    "Kubernetes",
                    "ArgoCD",
                    "Ansible",
                    "Helm",
                    "Docker",
                    "Linux",
                    "Windows",
                    "Azure",
                    "MySQL",
                    "Nagios",
                    "Zabbix",
                    "Active Directory",
                  ]}
                />
                <ExperienceItem
                  role="IT Support"
                  company="Souvre"
                  period="2022 - 2023"
                  description="Specjalista ds. wsparcia IT. Diagnozowanie problemów z oprogramowaniem, sprzętem i sieciami. Praca z bazami danych SQL, wspieranie analizy i raportowania danych."
                  skills={[
                    "Active Directory",
                    "Office 365",
                    "WAN/LAN",
                    "MySQL",
                  ]}
                />
                <ExperienceItem
                  role="Informatyk"
                  company="Urząd gminy w Dąbrowie"
                  period="2015 - 2017"
                  description="Pomoc techniczna w zakresie problemów z komputerami, połączeniem sieciowym, oprogramowaniem i urządzeniami biurowymi. Rozwiązywanie zgłoszeń serwisowych."
                  skills={["MS Windows", "LAN", "Hardware"]}
                />
              </Section>

              <Section title="Edukacja" icon={<GraduationCap size={24} />}>
                <div className="space-y-10">
                  <div className="group relative pl-6 md:pl-10 border-l-2 border-white/5">
                    <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-[#050505] border-2 border-green-500 group-hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)]" />
                    <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight mb-2">
                      Towaroznawstwo (Magister)
                    </h3>
                    <div className="text-green-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-green-500/10 py-1 px-3 rounded-lg w-fit border border-green-500/20 mb-4 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                      Uniwersystet Ekonomiczny w Poznaniu{" "}
                      <span className="text-zinc-800 mx-2">//</span> 2020 - 2022
                    </div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed italic font-medium">
                      Skuteczne działanie w obszarze kontroli jakości i
                      zarządzania produktami, analiza ryzyka i zgodność z
                      normami.
                    </p>
                  </div>
                  <div className="group relative pl-6 md:pl-10 border-l-2 border-white/5">
                    <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-[#050505] border-2 border-green-500 group-hover:bg-green-500 transition-all" />
                    <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight mb-2">
                      Zarządzanie i inżynieria produkcji (Inżynier)
                    </h3>
                    <div className="text-green-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-green-500/10 py-1 px-3 rounded-lg w-fit border border-green-500/20 mb-4 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                      Uniwersystet Ekonomiczny w Poznaniu{" "}
                      <span className="text-zinc-800 mx-2">//</span> 2017 - 2020
                    </div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed italic font-medium">
                      Podejście procesowe, analityczne myślenie oraz
                      wykorzystywanie metod usprawniania i optymalizacji.
                    </p>
                  </div>
                  <div className="group relative pl-6 md:pl-10 border-l-2 border-white/5">
                    <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-[#050505] border-2 border-green-500 group-hover:bg-green-500 transition-all" />
                    <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight mb-2">
                      Technikum Informatyczne
                    </h3>
                    <div className="text-green-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-green-500/10 py-1 px-3 rounded-lg w-fit border border-green-500/20 mb-4 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                      Zespół Szkół w Mogilnie{" "}
                      <span className="text-zinc-800 mx-2">//</span> 2013 - 2017
                    </div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed italic font-medium">
                      Solidne podstawy techniczne umożliwiające pracę na
                      stanowiskach technicznych i dalszą edukację w IT.
                    </p>
                  </div>
                </div>
              </Section>
            </div>
          </div>

          {/* STOPKA */}
          <div className="p-8 md:p-12 border-t border-white/5 bg-black text-center relative z-10">
            <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] md:tracking-[1.5em] text-zinc-800 hover:text-green-900 transition-colors cursor-default">
              Jakub Kwiatkowski <span className="text-green-600">//</span> 2026
              Portfolio
            </p>
          </div>
        </GlassContainer>
      </main>
    </div>
  );
}
