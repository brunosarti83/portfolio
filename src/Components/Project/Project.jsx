/* eslint-disable react/prop-types */
import githubIcon from "../../assets/githubB.svg";
import Carousel from "../../Components/Carousel/Carousel";
import BigButton from "../BigButton/BigButton";

export default function Project({ project }) {
  return (
    <div className="flex max-md:flex-col-reverse max-md:gap-6 w-full h-[calc(100%_-_90px)] md:pl-6 pt-6 z-[5] bg-[#F0F0F0]">
      <div className="flex flex-col md:w-1/2 p-2 mx-auto gap-10 md:pl-4">
        <Carousel images={project.images} />
        <div className="flex mx-auto justify-between gap-10 -pl-2">
          <BigButton
            centralText="Visit Site"
            fill={true}
            href={project.deploy}
          />
          <BigButton
            overText="Visit"
            centralText="Repository"
            fill={false}
            icon={githubIcon}
            href={project.repository}
          />
        </div>
      </div>
      <div className="flex md:w-1/2">
        <div className="flex flex-col mx-auto md:w-3/4 w-4/5 font-source text-xs">
          <h1 className="font-bold text-lg">{project.name}</h1>
          <br />
          <p className="font-semibold">{project.description}</p>
          <br />
          <div className="max-md:flex flex-col gap-4">
            <span className="text-xs italic bg-[#FFD759] pr-3 py-2 pl-2">
              Backend: {project.techs.Backend}
            </span>
          </div>
          <div>
            <span className="text-xs italic bg-[#FFD759] pr-3 pb-2 pl-2">
              Frontend: {project.techs.Frontend}
            </span>
          </div>
          <br />
          <span className="font-semibold">Features:</span>
          <ul className="list-disc">
            {project.features.map((feat) => (
              <li key={Math.random()}>{feat}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
