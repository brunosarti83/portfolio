/* eslint-disable react/prop-types */
import Carousel from "../../Components/Carousel/Carousel";

export default function Project({ project }) {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <Carousel images={project.images} />
      </div>
      <div className="flex flex-col">
        <h1>right side</h1>
      </div>
    </div>
  );
}
