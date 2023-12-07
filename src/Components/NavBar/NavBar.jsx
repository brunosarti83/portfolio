// for name inset: https://designshack.net/articles/css/inner-shadows-in-css-images-text-and-beyond/

import { useLocation, useNavigate } from "react-router-dom";
import SlashingButton from "../SlashingButton/SlashingButton";
import { RoutesHelper } from "../../utils/routes";
import { TfiAlignRight } from "react-icons/tfi";

export default function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const neon =
    "transition-all duration-1000 tracking-wide font-medium text-[#fff] [text-shadow:0_0_3px_#fff,_0_0_7px_#0fa,_0_0_10px_#0fa,_0_0_21px_#0fa,_0_0_42px_#0fa,_0_0_52px_#0fa,_0_0_82px_#0fa,_0_0_95px_#0fa,_0_0_80px_#0f0f0f,_0_0_50px_#0f0f0f]";

  const onClick = (to) => {
    if (to !== pathname) {
      navigate(to);
    }
  };

  return (
    <div className="w-full h-[90px] bg-white flex align-center sticky top-0 left-0 md:px-10 z-20">
      <h1 className="font-work font-extrabold text-[22px] self-center ml-4 md:ml-2 bg-gray-500 text-transparent [text-shadow:_0_2px_3px_rgba(255,_255,_255,_0.7)] bg-clip-text">
        BRUNO SARTI
      </h1>
      <div className="max-md:hidden w-1/2 self-center text-sm ml-auto text-gray-800">
        <ul className="flex flex-row justify-around">
          <li
            className={`font-source font-semibold my-auto hover:cursor-pointer relative ${
              pathname === RoutesHelper.home && neon
            }`}
            onClick={() => onClick(RoutesHelper.about)}
          >
            About me
          </li>
          <li
            className={`font-source font-semibold my-auto hover:cursor-pointer relative ${
              pathname === RoutesHelper.projects && neon
            }`}
            onClick={() => onClick(RoutesHelper.projects)}
          >
            Projects
          </li>
          <li className="font-source font-semibold my-auto">
            <SlashingButton
              text="Download CV"
              primary="black"
              secondary="white"
            />
          </li>
          <li
            className={`font-source font-semibold my-auto hover:cursor-pointer relative ${
              pathname === RoutesHelper.feedback && neon
            }`}
            onClick={() => onClick(RoutesHelper.feedback)}
          >
            Feedback
          </li>
        </ul>
      </div>
      <div className="md:hidden ml-auto mr-4 grid place-content-center">
        <div className="p-5 rounded-tl-[10%] rounded-tr-[20%] rounded-br-[40%] rounded-bl-[20%] bg-white shadow-md hover:cursor-pointer">
          <TfiAlignRight className="w-7 h-auto" color="#444444" />
        </div>
      </div>
    </div>
  );
}
