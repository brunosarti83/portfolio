import { projects } from "../../db";
import Project from "../../Components/Project/Project";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-[calc(100%_-_90px)]">
      {projects.map((project, index) => (
        <Project
          key={project.name}
          id={projects.length - index}
          project={project}
        />
      ))}
    </div>
  );
}
