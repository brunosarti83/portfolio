import { useNavigate } from "react-router";
import aboutImg from "../../assets/aboutImg.jpeg";
import { RoutesHelper } from "../../utils/routes";
import { aboutText } from '../../db';

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100%_-_90px)] w-full flex flex-col gap-5 bg-gradient-to-t from-red-100 to-[#FF0000] to-15% md:px-20 snap-normal snap-start">
      <div className="md:h-[80%] md:max-w-[95%] flex max-md:flex-col pt-4 md:justify-center gap-4 md:m-auto">
        <div className="w-[85%] md:w-[50%] h-[360px] md:h-full bg-yellow-400 flex md:pl-16 md:pr-10 ml-auto font-source text-[2vh] md:text-[1.8vh] rounded-bl-3xl overflow-y-scroll scrollbar-none max-md:py-8">
          <div className="m-auto py-6 md:py-8">
            { aboutText.map((line) => {
              if (line === '/') {
                return <br/>
              } else return (
              <span className="font-source leading-5 shadowed-text block">
                {line}
              </span>
            )})}
          </div>
        </div>
        <div className="w-[90%] md:w-[50%] h-full mr-auto overflow-hidden p-0 rounded-r-3xl">
          <img
            src={aboutImg}
            alt="about image"
            className="object-cover object-center p-0 m-0"
          />
        </div>
      </div>
      <div
        className={`w-[90%] max-md:top-2 relative md:w-full font-source text-[16px] mx-auto font-semibold text-center bg-gray-800 not-bg-[#0f0f0f] text-white p-4 mb-4 rounded-md shadow-md shadow-gray-800 hover:cursor-pointer transition-all duration-1000 hover:translate-y-[-5px]`}
        onClick={() => navigate(RoutesHelper.projects)}
      >
        Continue to Projects
      </div>
    </div>
  );
}
