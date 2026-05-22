import { useLanguage } from "../context/LanguageContext";

const LANGUAGES = [
  { name: "English", level: "★★★★☆" },
  { name: "Español", level: "★★★★★" },
];

const SKILLS_DATA = [
  { name: "Plastics & LSR Molding & Troubleshoot", level: "★★★★★" },
  { name: "Molding Personnel Training", level: "★★★★☆" },
  { name: "Software Development", level: "★★★☆☆" },
  { name: "Process Automations", level: "★★★★☆" },
  { name: "AI Implementation", level: "★★★★☆" },
  { name: "Content Creation", level: "★★★★☆" },
];

const WORK_EXPERIENCE = [
  {
    period: "February 2022 – May 2026",
    role: "Operations and Support",
    company: "Grupo Alma, Saltillo",
    achievements: [
      "Applied Industrial & LEAN Engineering methodologies to service operations, implementing Kanban systems and FIFO principles for raw material bulk breaking, successfully reducing inventory costs and material waste compared to legacy gut-feeling methods.",
      "Led the digital transformation of facility workflows, migrating scheduling and client management from a paper-based system to a fully digital architecture, increasing operational capacity, traceability, and process control.",
      "Designed and deployed cross-functional workflow automations (utilizing Python, APIs, and modern tech stacks) to seamlessly connect raw material inventory control with HR workflows, automating task assignment, tracking in-house personnel performance, and eliminating manual data-entry errors.",
      "Spearheaded the technical architecture and launch of a digital Learning Management System (LMS), creating an AI-assisted structured training framework that closed technical literacy gaps and achieved a scalable onboarding model for staff.",
      "Formulated comprehensive Standard Operating Procedures (SOPs) and KPIs to institutionalize data-driven decision-making, shifting operational management toward objective performance metrics.",
      "Exercised technical leadership over small engineering and operational teams, aligning project execution with business strategy to transform a manual business into an autonomous, tech-driven operation.",
    ],
  },
  {
    period: "March 2014 – February 2022",
    role: "Injection Molding Process Engineer",
    company: "Aptiv (Saltillo Technical Center), Saltillo",
    achievements: [
      "Developed and standardized Scientific Molding methodologies (Decoupled Molding) and best-practices trackers to eliminate process drift, optimize consistency, and drive OEE across multiple international facilities.",
      "Designed and deployed a Molding Literacy Assessment paired with an engineering training framework to evaluate personnel skills, effectively identifying and bridging technical knowledge gaps for operators and technicians.",
      "Led Advanced Manufacturing initiatives for Conventional, Insert, Micro, and Co-Molding (Plastics, LSR, and Terminal Insertion), managing projects from line layout development to the formal startup of manual, semi-automated, and fully automated cells.",
      "Served as the primary NA Tooling Team Liaison for the Saltillo tooling plant and global external vendors, delivering high-level divisional engineering support to resolve high-visibility molding issues and customer complaints across Mexico, Honduras, the USA, and Europe.",
      "Leveraged DFMEA and systematic troubleshooting to master parameter optimization and process controls across major machinery brands, including Engel, Van Dorn, Sumitomo, Sodick, Milacron, Battenfeld, and Newbury.",
    ],
  },
  {
    period: "April 2011 – March 2014",
    role: "Injection Molding Process Technician",
    company: "Delphi (Aptiv since 2017), Saltillo",
    achievements: [
      "Coordinated the installation and startup of 52 IMMs and a Central Drying System for the new Saltillo facility, providing hands-on manufacturing engineering support and rapid machine commissioning.",
      "Specialized in advanced process troubleshooting and customer complaint resolution utilizing Scientific Molding (Decoupled Molding) principles, systematically analyzing cavity pressure, viscosity curves, and process parameters to isolate root causes.",
      "Leveraged DFMEA and core quality tools to mitigate risks, optimize process windows, and implement robust corrective actions, ensuring zero-defect repeatability on the production floor.",
      "Conducted technical training for process technicians and operators, instilling Scientific Molding methodologies to strictly maintain optimized cycle times, strict quality standards, and safety procedures.",
    ],
  },
];

const EDUCATION = [
  {
    period: "October 2013 – September 2015",
    degree: "Master's Degree in Manufacturing Businesses Management",
    institution: "Universidad Autonoma del Noreste, Saltillo, Coahuila",
  },
  {
    period: "September 2008 – May 2012",
    degree: "Mechatronics Engineering",
    institution: "Universidad Tecnologica de Coahuila, Ramos Arizpe, Coahuila",
  },
];

const INTERESTS = [
  "Computer science, home lab & VPS self-hosting",
  "DIY electronics & microcontroller programming",
  "Videogames & 3D printing",
  "Audio production, video editing & photography",
  "Graphic design",
];

export default function CvModal({ isOpen, onClose }) {
  const { lang } = useLanguage();

  if (!isOpen) return null;

  const label = (en, es) => (lang === "es" ? es : en);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold">Marco Gallegos</h2>
            <p className="text-sm text-gray-500">{label("Senior Process Engineer", "Ingeniero Senior de Procesos")}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-1"
          >
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>

        <div className="px-6 py-5 space-y-7">
          {/* Summary */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
              {label("Summary", "Resumen")}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {label(
                "For more than 10 years I have dedicated my career to Injection Molding technologies acquiring knowledge of different types of processes and materials. During this period of time I developed methods and trained personnel in Scientific molding to help with the standardization of processes to reduce quality issues in plants including Mexico, Honduras and USA facilities.",
                "Por más de 10 años he dedicado mi carrera a las tecnologías de Moldeo por Inyección adquiriendo conocimiento de diferentes tipos de procesos y materiales. Durante este período desarrollé métodos y capacité personal en moldeo científico para ayudar a la estandarización de procesos y reducir problemas de calidad en plantas incluyendo México, Honduras y Estados Unidos."
              )}
            </p>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
              {label("Skills", "Habilidades")}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {SKILLS_DATA.map((s, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-gray-700">{s.name}</span>
                  <span className="text-amber-500 text-xs">{s.level}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
              {label("Languages", "Idiomas")}
            </h3>
            <div className="flex gap-6 text-sm">
              {LANGUAGES.map((l, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-gray-700">{l.name}</span>
                  <span className="text-amber-500 text-xs">{l.level}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Hobbies / Interests */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
              {label("Interests", "Intereses")}
            </h3>
            <p className="text-sm text-gray-700">
              {INTERESTS.join(" — ")}
            </p>
          </section>

          {/* Work Experience */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
              {label("Work Experience", "Experiencia Laboral")}
            </h3>
            <div className="space-y-5">
              {WORK_EXPERIENCE.map((exp, i) => (
                <div key={i}>
                  <p className="text-xs text-gray-400 mb-0.5">{exp.period}</p>
                  <p className="text-sm font-semibold text-gray-800">{exp.role}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.company}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="text-sm text-gray-700 leading-relaxed">{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
              {label("Education", "Educación")}
            </h3>
            <div className="space-y-3">
              {EDUCATION.map((edu, i) => (
                <div key={i}>
                  <p className="text-xs text-gray-400">{edu.period}</p>
                  <p className="text-sm font-semibold text-gray-800">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
