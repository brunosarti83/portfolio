import { useNavigate } from "react-router";
import aboutImg from "../../assets/aboutImg.jpeg";
import { RoutesHelper } from "../../utils/routes";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100%_-_90px)] w-full flex flex-col gap-5 bg-gradient-to-t from-red-100 to-[#FF0000] to-15% md:px-20">
      <div className="md:h-[80%] md:max-w-[95%] flex max-md:flex-col pt-4 md:justify-center gap-4 md:m-auto">
        <div className="w-[85%] md:w-[50%] h-full bg-yellow-400 flex md:pl-16 md:pr-20 ml-auto font-source text-[2vh] md:text-[1.8vh] rounded-bl-3xl overflow-y-scroll scrollbar-none max-md:py-8">
          <div className="m-auto pt-2">
            <span className="font-source leading-5 shadowed-text">
              Hi, i’m a recently graduated
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              fullstack developer from Argentina,
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              welcome to my portfolio, it is an
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              ever evolving work in progress{" "}
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              wich i keep updating as i find new
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              projects and new technologies
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              that interest me, hope you find it{" "}
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              appealing, you will find each{" "}
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              project has links to it’s deployed{" "}
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              site as well as to it’s Github
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              repository, please look around{" "}
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              and know that any feedback is
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              very much appreciated.
            </span>
            <br />
            <br />
            <span className="font-source leading-5 shadowed-text">--</span>
            <br />
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
        className={`w-[90%] max-md:top-2 relative md:w-full font-source text-[16px] mx-auto font-semibold text-center bg-[#0f0f0f] text-white p-4 mb-4 rounded-md shadow-md shadow-gray-800 hover:cursor-pointer transition-all duration-1000 hover:translate-y-[-5px]`}
        onClick={() => navigate(RoutesHelper.projects)}
      >
        Continue to Projects
      </div>
    </div>
  );
}
