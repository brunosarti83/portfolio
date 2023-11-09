import SvgText from "../SvgText/SvgText";
import keyboard from "../../assets/keyboar_1.png";

export default function FullStack() {
  return (
    <div className="w-full h-[510px] bg-[#0F0F0F] relative">
      <SvgText />
      <img
        src={keyboard}
        alt="keyboard"
        className="absolute top-10 right-20 h-[40%] w-auto drop-shadow-lg"
      />
    </div>
  );
}
