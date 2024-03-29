import ProjectCard from "./ProjectCard";
import { projects } from "./data/projects";

export default function ProjectSection() {
  return (
    <div id="projects" className="mt-36 flex justify-center w-full">
      <section className="flex flex-col items-center projects text-center max-w-3xl">
        <span className="hero-title text-3xl font-semibold text-slate-800 hover:underline hover:underline-offset-4 cursor-pointer mb-10">
          Cada Projeto um Aprendizado Diferente
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
          {projects.map(
            ({ title, ghLink, isDemoClickable, demoLink, text, thumbnail }) => (
              <ProjectCard
                title={title}
                ghLink={ghLink}
                isDemoClickable={isDemoClickable}
                demoLink={demoLink}
                text={text}
                thumbnail={thumbnail}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}
