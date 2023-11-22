import { projects } from "../../db";
import Project from "../../Components/Project/Project";
import { useEffect, useRef } from "react";

export default function Projects() {
  const firstObjectBottom = useRef(null);
  useEffect(() => {
    firstObjectBottom.current.scrollIntoView(false);
  }, []);
  return (
    <div className="flex flex-col min-h-[calc(100%_-_90px)]">
      {projects.map((project, index) => (
        <div key={project.name}>
          <Project
            key={project.name}
            id={projects.length - index}
            project={project}
          />
          {index === 0 && <div ref={firstObjectBottom} className="-mt-2"></div>}
        </div>
      ))}
    </div>
  );
}
