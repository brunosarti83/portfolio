/* eslint-disable react/prop-types */
import CV from "../../assets/CV.pdf";
import { useDownload } from "../../utils/useDownload";

export default function SlashingButton({ text }) {
  const downloadUrl = useDownload(CV);
  return (
    <a href={downloadUrl} download={"BrunoSarti_FullStackCV_EngSpa.pdf"}>
      <div
        className={`text-gray-800 py-2 px-5 transition-colors duration-1000 relative overflow-hidden hover:text-white shadow-md before:content-[""] before:absolute before:top-0 before:left-[-50px] before:w-0 before:h-full before:bg-gray-800 before:skew-x-[35deg] before:z-[-5] before:transition-size before:duration-1000 hover:before:w-[150%] -mx-2 cursor-pointer`}
      >
        {text}
      </div>
    </a>
  );
}
