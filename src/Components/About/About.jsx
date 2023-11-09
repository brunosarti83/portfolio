import aboutImg from "../../assets/aboutImg.jpeg";

export default function About() {
  return (
    <div className="h-[520px] w-full flex flex-col gap-10 bg-gradient-to-t from-red-100 to-[#FF0000] to-15% px-20">
      <div className="h-[80%] flex pt-4">
        <div className="w-50% h-full">
          <span></span>
        </div>
        <div className="w-1/2 h-full overflow-hidden">
          <img
            src={aboutImg}
            alt="about image"
            className="rotate-90 object-contain h-full w-full"
          />
        </div>
      </div>
      <div className="w-full font-source text-[16px] font-semibold text-center bg-[#0f0f0f] text-white p-4 mb-7 rounded-md shadow-md shadow-gray-800">
        Continue to Projects
      </div>
    </div>
  );
}
