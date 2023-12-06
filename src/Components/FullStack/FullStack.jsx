import SvgText from "../SvgText/SvgText";
import keyboard from "../../assets/keyboar_1.png";

export default function FullStack() {
  return (
    <div className="w-full h-[90vh] md:h-[calc(100%_-_90px)] bg-[#0F0F0F] relative">
      <SvgText />
      <img
        src={keyboard}
        alt="keyboard"
        className="absolute invisible md:visible md:top-10 md:right-20 h-[25%] md:h-[40%] w-auto drop-shadow-lg"
      />
    </div>
  );
}
