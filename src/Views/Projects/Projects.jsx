import { projects } from "../../db";
import Project from "../../Components/Project/Project";
import { useEffect, useRef, useState } from "react";
//import { FaArrowDown } from "react-icons/fa";

export default function Projects() {
  const firstObjectBottom = useRef(null);
  const [dynamicTailwind] = useState({
    containerHeight: `h-[calc(calc(100%_-_90px)_*_${projects.length})]`,
    proportionalHeight: `h-[${Math.floor(100 / projects.length)}%]`,
  });

  useEffect(() => {
    firstObjectBottom.current.scrollIntoView(false);
  }, []);

  return (
    <div
      className={`flex flex-col ${dynamicTailwind.containerHeight} bg-[#F0F0F0] relative before:content-[""] before:w-[30%] before:h-[30%] before:rounded-[100%] before:absolute before:left-[72%] before:top-[25%] before:bg-[#F0F0F3] before:z-1 before:shadow-inner after:content-[""] after:w-[30%] after:h-[30%] after:rounded-[100%] after:absolute after:top-[25%] after:left-[72%] after:bg-[#F0F0F0] after:z-2 after:scale-75 after:shadow-md`}
    >
      {projects.map((project, index) => (
        <div
          key={project.name}
          className={`flex flex-col bg-[#F0F0F0] ${dynamicTailwind.proportionalHeight}`}
        >
          <Project key={project.name} project={project} />
          {index === 0 && (
            <div
              ref={firstObjectBottom}
              className="before:w-[80%] before:h-1 before:border-b-2 before:border-dotted before:border-b-gray-300 before:absolute before:top-[45%] before:right-[0%] before:z-10 after:w-[50%] after:h-1 after:border-b-[1px] after:border-solid after:border-gray-300 after:absolute after:top-[44%] after:right-[10%] after:z-10"
            ></div>
          )}
          {index === projects.length - 1 && (
            <div
              className={`before:content-[""] before:w-[15%] before:h-[15%] before:rounded-[100%] before:absolute before:left-[60%] before:top-[80%] before:bg-[#F0F0F3] before:z-1 before:shadow-inner after:content-[""] after:w-[15%] after:h-[15%] after:rounded-[100%] after:absolute after:top-[80%] after:left-[60%] after:bg-[#F0F0F0] after:z-2 after:scale-[65%] after:shadow-md`}
            >
              <div
                className={`before:content-[""] before:w-[10%] before:h-[10%] before:rounded-[100%] before:absolute before:left-[73%] before:top-[87%] before:bg-[#F0F0F3] before:z-3 after:content-[""] after:w-[10%] after:h-[10%] after:rounded-[100%] after:absolute after:top-[87%] after:left-[73%] after:bg-[#F0F0F0] after:z-5 after:scale-[65%] after:shadow-lg`}
              ></div>
              <div className="before:w-[80%] before:h-1 before:border-b-2 before:border-dotted before:border-b-gray-300 before:absolute before:bottom-[5%] before:left-[0%] before:z-2 after:w-[50%] after:h-1 after:border-b-[1px] after:border-solid after:border-gray-300 after:absolute after:bottom-[4%] after:right-[0%] after:z-2"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
