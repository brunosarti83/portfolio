import { projects } from "../../db";
import Project from "../../Components/Project/Project";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-[65%]">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}
