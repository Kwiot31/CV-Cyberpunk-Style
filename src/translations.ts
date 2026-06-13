import type { Translations } from "./types";

export const translations: Translations = {
  pl: {
    status: "Gotowy do pracy",
    name: "JAKUB",
    surname: "KWIATKOWSKI",
    role: "Admin IT",
    roleAccent: "& IT Support",
    location: "Polska - Poznań",
    sections: {
      about: "Profil",
      interests: "Poza Pracą",
      experience: "Kariera",
      education: "Edukacja",
      skills: "Tech Stack",
      certificates: "Certyfikaty",
      languages: "Języki",
      projects: "Własne Projekty"
    },
    about: {
      quote: "Specjalista IT z ponad 3-letnim doświadczeniem w wsparciu aplikacji krytycznych i administracji systemami.",
      text: "Specjalista IT z ponad 3-letnim doświadczeniem we wsparciuaplikacji krytycznych i administracji systemami. Łączę wiedzę zzakresu systemów Linux/Windows, baz danych oraz monitoringu zpraktyczną znajomością technologii kontenerowych i podejścia GitOps. Dążę do dalszego rozwoju w obszarze automatyzacjiprocesów IT oraz zaawansowanej administracji."
    },
    interests: {
      tech: { title: "AI i Technologie", desc: "Pasja do AI, nowych technologii i newsów tech" },
      active: { title: "Aktywność", desc: "Siłownia, jazda na rowerze i długie spacery" },
      lifestyle: { title: "Zdrowy Styl Życia", desc: "Zdrowe jedzenie i dbanie o dobre nawyki" }
    },
    experience: [
      {
        role: "Service-Desk",
        company: "Aplikacje Krytyczne Sp. z o.o.",
        period: "2023 - Obecnie",
        description: "Administrowanie i rozwiązywanie problemów w środowiskach Linux oraz Windows. Monitorowanie infrastruktury przy użyciu narzędzi Zabbix, Grafana i Nagios oraz analiza logów systemowych. Monitorowanie dostępności mikrousług na klastrach Kubernetes, zarządzanie wdrożeniami GitOps w ArgoCD oraz kompleksowa diagnostyka i troubleshooting błędów w środowiskach kontenerowych. Weryfikacja spójności danych oraz wykonywanie zapytań SQL w bazach Oracle, MS SQL i PostgreSQL na potrzeby rozwiązywania zgłoszeń. Zarządzanie pełnym cyklem życia zgłoszeń oraz przygotowywanie raportów technicznych i wniosków dotyczących optymalizacji infrastruktury IT.",
        skills: ["Linux", "Windows Server", "Kubernetes", "ArgoCD", "GitOps", "Ansible", "Helm", "Docker", "SQL", "Oracle", "PostgreSQL", "Zabbix", "Grafana", "Nagios"]
      },
      {
        role: "Specjalista ds. wsparcia IT",
        company: "Souvre",
        period: "2022 - 2023",
        description: "Diagnozowanie i rozwiązywanie złożonych problemów technicznych. Zarządzanie i aktualizowanie bazy danych SQL - procesy analizy i raportowania danych w firmie. Tworzenie dokumentacji technicznej oraz instrukcje użytkownika jak i raportów dla współpracowników biznesowych.",
        skills: ["SQL", "Active Directory", "Office 365", "Hardware", "Networking", "Documentation"]
      },
      {
        role: "Praktyki na stanowisku Informatyka",
        company: "Urząd gminy w Dąbrowie",
        period: "2015 - 2017",
        description: "Konfiguracja i migracja stanowisk pracy (sprzęt, systemy operacyjne, oprogramowanie). Tworzenie dokumentacji technicznej oraz bazy wiedzy dla użytkowników i zespołu IT.",
        skills: ["Windows", "Hardware", "Troubleshooting", "User Support"]
      }
    ],
    education: [
      {
        degree: "Towaroznawstwo (Magister)",
        school: "Uniwersystet Ekonomiczny w Poznaniu",
        period: "2020 - 2022",
        description: "Studia magisterskie w Instytucie nauk o jakości. Skuteczne działanie w obszarze kontroli jakości i zarządzania produktami."
      },
      {
        degree: "Zarządzanie i inżynieria produkcji (Inżynier)",
        school: "Uniwersystet Ekonomiczny w Poznaniu",
        period: "2017 - 2020",
        description: "Studia inżynierskie. Podejście procesowe, analityczne myślenie oraz wykorzystywanie metod usprawniania i optymalizacji."
      },
      {
        degree: "Technikum Informatyczne",
        school: "Zespół Szkół w Mogilnie",
        period: "2013 - 2017",
        description: "Klasyfikacje E.12, E.13, E.14. Solidne podstawy techniczne umożliwiające pracę na stanowiskach technicznych."
      }
    ],
    skills: {
      infra: "Systemy i Infrastruktura: Linux, Windows Server, serwery WWW (Nginx, Apache), Bash, PowerShell, znajomość sieci LAN/WAN.",
      devops: "Konteneryzacja i DevOps: Kubernetes (K8s), ArgoCD (GitOps), Helm, Ansible, Docker, CI/CD, Azure DevOps, GIT.",
      db: "Bazy danych: SQL (podstawowe zapytania), praca w środowiskach Oracle, MS SQL oraz PostgreSQL.",
      monitoring: "Monitoring i Logi: Grafana, Zabbix, Splunk, Nagios, analiza logów.",
      coding: "Programowanie i API: JavaScript (React, Vue), HTML5, CSS3, REST API.",
      methods: "Metodyki i Normy: Agile, Scrum, ISO 27001, ISO 9001, Lean (Kaizen, 5S)."
    },
    certificates: [
      "Zabbix - monitoring serwerów i aplikacji",
      "ISTQB Certified Tester - poziom podstawowy",
      "Kurs audytora wewnętrznego ISO 9001",
      "ISO 27001 Cybersecurity manage"
    ],
    projects: [
      {
        name: "EdgePremium.pro",
        url: "https://edgepremium.pro",
        period: "Projekt hobbystyczny",
        description: "Projekt hobbystyczny. Nowoczesne strony i aplikacje webowe. AI wspiera pracę nad frontendem.\nOdpowiadam za logikę, architekturę, deployment, infrastrukturę, bezpieczeństwo i testy. Stack dobierany do potrzeb klienta."
      }
    ],
    languages: [
      { name: "Angielski", level: "B2" },
      { name: "Rosyjski", level: "A2" }
    ],
    footer: "Portfolio",
    security: "Strona zabezpieczona przez Cloudflare",
    ui: {
      readMore: "Czytaj więcej",
      readLess: "Zwiń"
    }
  },
  en: {
    status: "Ready for work",
    name: "JAKUB",
    surname: "KWIATKOWSKI",
    role: "IT Admin",
    roleAccent: "& IT Support",
    location: "Poland - Poznan",
    sections: {
      about: "Profile",
      interests: "Off the Clock",
      experience: "Career",
      education: "Education",
      skills: "Tech Stack",
      certificates: "Credentials",
      languages: "Languages",
      projects: "Side Projects"
    },
    about: {
      quote: "IT Specialist with over 3 years of experience in critical application support and system administration.",
      text: "IT Specialist with 3+ years of experience in critical applicationsupport and systems administration. Combining expertise inLinux/Windows environments, databases, and monitoring withhands-on experience in containerization and GitOps practices.Focused on further growth in IT process automation and advancedsystems administration"
    },
    interests: {
      tech: { title: "AI & Tech", desc: "Passion for AI, new technology, and tech news" },
      active: { title: "Stay Active", desc: "Gym, cycling, and long walks" },
      lifestyle: { title: "Healthy Lifestyle", desc: "Healthy food and good daily habits" }
    },
    experience: [
      {
        role: "Service-Desk",
        company: "Aplikacje Krytyczne Sp. z o.o.",
        period: "2023 - Present",
        description: "Administrating and solving problems in Linux and Windows environments. Monitoring infrastructure using Zabbix, Grafana, and Nagios tools, and system log analysis. Monitoring microservices availability on Kubernetes clusters, managing GitOps deployments in ArgoCD, and complex diagnostics and troubleshooting in containerized environments. Verifying data consistency and performing SQL queries in Oracle, MS SQL, and PostgreSQL databases for ticket resolution. Managing the full ticket lifecycle and preparing technical reports and infrastructure optimization requests.",
        skills: ["Linux", "Windows Server", "Kubernetes", "ArgoCD", "GitOps", "Ansible", "Helm", "Docker", "SQL", "Oracle", "PostgreSQL", "Zabbix", "Grafana", "Nagios"]
      },
      {
        role: "IT Support Specialist",
        company: "Souvre",
        period: "2022 - 2023",
        description: "Diagnosing and solving complex technical problems. Managing and updating SQL databases - data analysis and reporting processes. Creating technical documentation, user manuals, and reports for business associates.",
        skills: ["SQL", "Active Directory", "Office 365", "Hardware", "Networking", "Documentation"]
      },
      {
        role: "IT Internship",
        company: "Dąbrowa Municipality Office",
        period: "2015 - 2017",
        description: "Configuration and migration of workstations (hardware, operating systems, software). Creating technical documentation and knowledge base for users and IT team.",
        skills: ["Windows", "Hardware", "Troubleshooting", "User Support"]
      }
    ],
    education: [
      {
        degree: "Commodity Science (Master's Degree)",
        school: "Poznan University of Economics and Business",
        period: "2020 - 2022",
        description: "Master's studies at the Institute of Quality Sciences. Effective action in quality control and product management."
      },
      {
        degree: "Management and Production Engineering (Engineer's Degree)",
        school: "Poznan University of Economics and Business",
        period: "2017 - 2020",
        description: "Engineering studies. Process-oriented approach, analytical thinking, and using improvement and optimization methods."
      },
      {
        degree: "IT Technical School",
        school: "Mogilno School Complex",
        period: "2013 - 2017",
        description: "Classifications E.12, E.13, E.14. Solid technical foundations enabling work in technical positions."
      }
    ],
    skills: {
      infra: "Systems & Infrastructure: Linux, Windows Server, web servers (Nginx, Apache), Bash, PowerShell, LAN/WAN knowledge.",
      devops: "Containerization & DevOps: Kubernetes (K8s), ArgoCD (GitOps), Helm, Ansible, Docker, CI/CD, Azure DevOps, GIT.",
      db: "Databases: SQL (basic queries), working in Oracle, MS SQL, and PostgreSQL environments.",
      monitoring: "Monitoring & Logs: Grafana, Zabbix, Splunk, Nagios, log analysis.",
      coding: "Coding & API: JavaScript (React, Vue), HTML5, CSS3, REST API.",
      methods: "Methodologies & Standards: Agile, Scrum, ISO 27001, ISO 9001, Lean (Kaizen, 5S)."
    },
    certificates: [
      "Zabbix - Server and Application Monitoring",
      "ISTQB Certified Tester - Foundation Level",
      "ISO 9001 Internal Auditor Course",
      "ISO 27001 Cybersecurity manage"
    ],
    projects: [
      {
        name: "EdgePremium.pro",
        url: "https://edgepremium.pro",
        period: "Side project",
        description: "Personal project building modern websites and web apps. AI supports frontend work.\nI handle logic, architecture, deployment, infrastructure, security, and testing. Stack tailored to each client."
      }
    ],
    languages: [
      { name: "English", level: "B2" },
      { name: "Russian", level: "A2" }
    ],
    footer: "Portfolio",
    security: "Website secured by Cloudflare",
    ui: {
      readMore: "Read more",
      readLess: "Show less"
    }
  }
};
