import aboutImg from "../../assets/aboutImg.jpeg";

export default function About() {
  return (
    <div className="h-[520px] w-full flex flex-col gap-5 bg-gradient-to-t from-red-100 to-[#FF0000] to-15% px-20">
      <div className="h-[80%] flex pt-4 justify-center gap-4">
        <div className="min-w-[45%] h-full bg-yellow-400 flex pl-16 pr-24 ml-auto font-source text-[14px] rounded-bl-3xl">
          <div className="my-auto">
            <span className="font-source leading-5 shadowed-text">
              Hi, i’m a recently graduated
            </span>
            <br />
            <span className="font-source leading-5 shadowed-text">
              developer from Argentina,
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
        <div className="min-w-[45%] h-full mr-auto overflow-hidden m-0 rounded-r-3xl">
          <img
            src={aboutImg}
            alt="about image"
            className="rotate-90 object-cover h-full w-full object-center"
          />
        </div>
      </div>
      <div className="w-full font-source text-[16px] font-semibold text-center bg-[#0f0f0f] text-white p-4 mb-7 rounded-md shadow-md shadow-gray-800">
        Continue to Projects
      </div>
    </div>
  );
}
