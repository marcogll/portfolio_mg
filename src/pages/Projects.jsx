import { useState, useCallback, memo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { PROJECTS } from "../data/projects";

const ProjectImage = memo(({ imageUrl, name }) => (
  <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden items-center justify-center border border-gray-100 flex shadow-sm bg-white">
    <img className="w-10 h-10 object-contain" src={imageUrl} alt={name} loading="lazy" />
  </div>
));

const ProjectContent = memo(({ name, subtitle, description }) => (
  <div className="flex flex-col justify-center py-1">
    <h1 className="font-semibold text-lg text-gray-900 leading-tight">{name}</h1>
    <p className="text-blue-600 text-sm font-medium mt-0.5">{subtitle}</p>
    <p className="text-gray-500 text-sm mt-1 font-medium">{description}</p>
  </div>
));

const ProjectArrow = memo(({ isHovered }) => (
  <div className="ml-auto hidden md:flex items-center bg-[#f3f4f6] rounded-full p-1 self-center">
    <span className={`material-symbols-rounded text-xl transition-colors duration-150 ${isHovered ? "text-gray-600" : "text-gray-400"}`}>
      arrow_forward
    </span>
  </div>
));

const ProjectCard = memo(({ project, isHovered, onMouseEnter, onMouseLeave }) => {
  const { lang } = useLanguage();
  const name = lang === "es" && project.nameEs ? project.nameEs : project.name;
  const subtitle = lang === "es" && project.subtitleEs ? project.subtitleEs : project.subtitle;
  const description = lang === "es" && project.descriptionEs ? project.descriptionEs : project.description;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="drop-shadow-sm bg-[#f3f4f6]/50 rounded-2xl px-5 py-4 gap-x-5 flex items-center hover:-translate-y-1 hover:scale-[1.01] duration-300 transition ease-in-out hover:shadow-md border border-gray-100 hover:border-gray-300 active:scale-[0.98]"
    >
      <ProjectImage imageUrl={project.imageUrl} name={name} />
      <ProjectContent name={name} subtitle={subtitle} description={description} />
      <ProjectArrow isHovered={isHovered} />
    </a>
  );
});

export default function Projects() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = useCallback((index) => setHoveredIndex(index), []);
  const handleMouseLeave = useCallback(() => setHoveredIndex(null), []);

  return (
    <div className="px-4 py-8">
      <div className="flex flex-col bg-white rounded-3xl px-6 py-8 max-w-4xl mx-auto shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <div className="font-semibold text-2xl flex items-center gap-x-3 text-gray-800">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            {t.projects}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
