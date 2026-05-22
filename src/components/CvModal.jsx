import { useLanguage } from "../context/LanguageContext";

const DATA = {
  en: {
    title: "Senior Process Engineer",
    summary: "For more than 10 years I have dedicated my career to Injection Molding technologies acquiring knowledge of different types of processes and materials. During this period of time I developed methods and trained personnel in Scientific molding to help with the standardization of processes to reduce the quality issues in plant including in Mexico, Honduras and USA facilities.",
    skills: [
      { name: "Plastics & LSR Molding", level: 5 },
      { name: "Expert Process Automations", level: 5 },
      { name: "Troubleshoot", level: 5 },
      { name: "AI Implementation", level: 5 },
      { name: "Molding Personnel Training", level: 5 },
      { name: "Content Creation", level: 5 },
      { name: "Software Development", level: 5 },
    ],
    experience: [
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
    ],
    education: [
      {
        period: "October 2013 – September 2015",
        degree: "Master's Degree in Manufacturing Businesses Management",
        institution: "Universidad Autonoma del Noreste, Saltillo",
      },
      {
        period: "September 2008 – May 2012",
        degree: "Mechatronics Engineering",
        institution: "Universidad Tecnologica de Coahuila, Ramos Arizpe",
      },
    ],
    labels: {
      summary: "Summary",
      skills: "Skills",
      experience: "Work Experience",
      education: "Education",
    },
  },
  es: {
    title: "Ingeniero de Procesos Senior",
    summary: "Durante más de 10 años he dedicado mi carrera a las tecnologías de Moldeo por Inyección, adquiriendo conocimientos en diferentes tipos de procesos y materiales. A lo largo de este periodo, desarrollé métodos y capacité al personal en Moldeo Científico (Scientific Molding) para ayudar con la estandarización de procesos con el fin de reducir los problemas de calidad en planta, incluyendo instalaciones de México, Honduras y Estados Unidos.",
    skills: [
      { name: "Moldeo de Plásticos y LSR", level: 5 },
      { name: "Automatización Experta de Procesos", level: 5 },
      { name: "Desarrollo de Programas de Capacitación", level: 5 },
      { name: "Resolución de Problemas", level: 5 },
      { name: "Implementación de sistemas con IA", level: 4 },
      { name: "Desarrollo de Software", level: 3 },
    ],
    experience: [
      {
        period: "febrero 2022 – mayo 2026",
        role: "Operaciones y Soporte",
        company: "Grupo Alma, Saltillo",
        achievements: [
          "Aplicación de metodologías LEAN e Ingeniería Industrial en operaciones de servicio; implementación de Kanban y FIFO para la gestión de materia prima, reduciendo costos de inventario y desperdicios frente a métodos empíricos tradicionales.",
          "Liderazgo en la transformación digital de la planta, migrando el control de programación y clientes de papel a una arquitectura 100% digital, incrementando la capacidad operativa y trazabilidad.",
          "Diseño y despliegue de automatizaciones cross-funcionales (Python, APIs) para integrar el inventario con flujos de Recursos Humanos, automatizando la asignación de tareas, el seguimiento del personal interno y eliminando errores de captura manual.",
          "Arquitectura técnica y lanzamiento de un LMS digital con un marco de capacitación estructurado y asistido por IA, eliminando brechas técnicas y logrando un modelo de inducción (onboarding) escalable.",
          "Formulación de SOPs y KPIs orientados a datos para basar la gestión operativa en métricas de rendimiento objetivas.",
          "Dirección técnica de pequeños equipos de ingeniería y operaciones, alineando proyectos con la estrategia de negocio para transformar procesos manuales en una operación autónoma y tecnológica.",
        ],
      },
      {
        period: "marzo 2014 – febrero 2022",
        role: "Ingeniero de Procesos de Moldeo",
        company: "Aptiv (Saltillo Technical Center), Saltillo",
        achievements: [
          "Desarrollo y estandarización de metodologías de Moldeo Científico (Decoupled Molding) y rastreadores de mejores prácticas para eliminar desviaciones de proceso, optimizar consistencia e impulsar el OEE internacional.",
          "Diseño y despliegue de la evaluación Molding Literacy Assessment junto a un marco de formación técnica para evaluar, identificar y cerrar brechas de conocimiento en operadores y técnicos.",
          "Liderazgo en proyectos de Manufactura Avanzada para moldeo Convencional, Inserto, Micro y Co-Moldeo (Plásticos, LSR y Terminales), gestionando desde el layout de línea hasta el arranque formal (startup) de celdas manuales y automatizadas.",
          "Enlace principal del NA Tooling Team con la planta de herramentales de Saltillo y proveedores globales, brindando soporte corporativo para resolver problemas críticos de moldeo y quejas de clientes en México, Honduras, EE. UU. y Europa.",
          "Optimización sistemática de parámetros y control de procesos mediante DFMEA en maquinaria de marcas líderes como Engel, Van Dorn, Sumitomo, Sodick, Milacron, Battenfeld y Newbury.",
        ],
      },
      {
        period: "abril 2011 – marzo 2014",
        role: "Técnico de Procesos de Moldeo",
        company: "Delphi (Aptiv desde 2017), Saltillo",
        achievements: [
          "Coordinación del montaje, instalación y arranque de 52 máquinas de moldeo y un Sistema Central de Secado, asegurando un comisionamiento rápido y soporte técnico en piso.",
          "Diagnóstico avanzado de fallas (troubleshooting) y resolución de quejas mediante Moldeo Científico, analizando presión en cavidad, curvas de viscosidad y parámetros clave para aislar causas raíz.",
          "Uso de DFMEA y herramientas de calidad para mitigar riesgos, optimizar ventanas de proceso e implementar acciones correctivas robustas, garantizando repetibilidad con cero defectos en piso de producción.",
          "Capacitación técnica a operadores y técnicos en metodologías de Moldeo Científico para asegurar el cumplimiento estricto de tiempos de ciclo optimizados, rigurosos estándares de calidad y procedimientos de seguridad.",
        ],
      },
    ],
    education: [
      {
        period: "octubre 2013 – septiembre 2015",
        degree: "Maestría en Administración de Negocios de Manufactura (MBA)",
        institution: "Universidad Autónoma del Noreste, Saltillo",
      },
      {
        period: "septiembre 2008 – mayo 2012",
        degree: "Ingeniería en Mecatrónica",
        institution: "Universidad Tecnológica de Coahuila, Ramos Arizpe",
      },
    ],
    labels: {
      summary: "Resumen",
      skills: "Competencias",
      experience: "Experiencia Laboral",
      education: "Formación",
    },
  },
};

function Stars({ level }) {
  return (
    <span className="text-amber-500 text-xs">
      {"★".repeat(level)}{"☆".repeat(5 - level)}
    </span>
  );
}

export default function CvModal({ isOpen, onClose }) {
  const { lang } = useLanguage();
  const d = DATA[lang] || DATA.en;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold">Marco Gallegos</h2>
            <p className="text-sm text-gray-500">{d.title}</p>
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">{d.labels.summary}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{d.summary}</p>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">{d.labels.skills}</h3>
            <div className="grid grid-cols-2 gap-2">
              {d.skills.map((s, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-gray-700">{s.name}</span>
                  <Stars level={s.level} />
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">{d.labels.experience}</h3>
            <div className="space-y-5">
              {d.experience.map((exp, i) => (
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">{d.labels.education}</h3>
            <div className="space-y-3">
              {d.education.map((edu, i) => (
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
