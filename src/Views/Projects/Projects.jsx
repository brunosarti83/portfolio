import { projects } from "../../db";
import Project from "../../Components/Project/Project";
import { useEffect, useRef } from "react";
import ProjectBots from "../../Components/ProjectBots/ProjectBots";

export default function Projects() {
  const firstObjectTop = useRef(null);

  useEffect(() => {
    firstObjectTop.current.scrollIntoView(false);
  }, []);

  return (
    <div
      className={`max-md:flex flex-col gap-8 max-md:pb-20 w-full h-full bg-[#F0F0F0] relative`}
    >
      <div ref={firstObjectTop}></div>
      <Project project={projects[0]} />
      <Project project={projects[1]} />
      <ProjectBots />
    </div>
  );
}
