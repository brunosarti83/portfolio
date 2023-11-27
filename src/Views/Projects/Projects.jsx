import { projects } from "../../db";
import Project from "../../Components/Project/Project";
import { useEffect, useRef } from "react";
//import { FaArrowDown } from "react-icons/fa";

export default function Projects() {
  const firstObjectBottom = useRef(null);

  useEffect(() => {
    firstObjectBottom.current.scrollIntoView(false);
  }, []);

  return (
    <div className={`w-full h-full bg-[#F0F0F0] relative`}>
      <Project project={projects[0]} />
      <div ref={firstObjectBottom}></div>
      <Project project={projects[1]} />
    </div>
  );
}
