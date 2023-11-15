/* eslint-disable react/prop-types */
import githubIcon from "../../assets/githubB.svg"
import Carousel from "../../Components/Carousel/Carousel";
import BigButton from "../BigButton/BigButton";

export default function Project({ project }) {
  return (
    <div className="flex w-full h-full min-h-[65vh] bg-[#F0F0F0] py-4">
      <div className="flex flex-col w-1/2 p-2 mx-auto gap-10 pl-4">
        <Carousel images={project.images} />
        <div className="flex mx-auto justify-between gap-8 -pl-2">
          <BigButton centralText="Visit Site" fill={true}/>
          <BigButton overText="Visit" centralText="Repository" fill={false} icon={githubIcon} />
        </div>
      </div>
      <div className="flex w-1/2">
        <div className="flex flex-col mx-auto w-3/4 font-source text-xs">
          <h1 className="font-bold text-lg">{project.name}</h1>
          <br />
          <p className="font-semibold">{project.description}</p>
          <br />
          <div>
            <span className="text-xs italic bg-[#FFD759] pr-3 py-2">Backend: {project.techs.Backend}</span>
          </div>
          <div>
            <span className="text-xs italic bg-[#FFD759] pr-3 pb-2">Frontend: {project.techs.Frontend}</span>
          </div>
          <br />
          <span className="font-semibold">Features:</span>
          <ul className="list-disc">
            { project.features.map((feat) => 
            <li key={Math.random()}>{feat}</li>) }
          </ul>
        </div>
      </div>
    </div>
  );
}
