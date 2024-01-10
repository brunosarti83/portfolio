// for name inset: https://designshack.net/articles/css/inner-shadows-in-css-images-text-and-beyond/

import { useLocation, useNavigate } from "react-router-dom";
import SlashingButton from "../SlashingButton/SlashingButton";
import { RoutesHelper } from "../../utils/routes";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);

  //neon is oldStyle, no longer in use for selected
  //let neon = "transition-all duration-1000 tracking-wide font-medium text-[#fff] [text-shadow:0_0_3px_#fff,_0_0_7px_#0fa,_0_0_10px_#0fa,_0_0_21px_#0fa,_0_0_42px_#0fa,_0_0_52px_#0fa,_0_0_82px_#0fa,_0_0_95px_#0fa,_0_0_80px_#0f0f0f,_0_0_50px_#0f0f0f]";

  const selected = "text-red-500 font-bold drop-shadow-md";

  const onToggle = () => setToggle(!toggle);

  const onClick = (to) => {
    navigate(to);
    onToggle();
  };

  return (
    <div
      className={`w-full ${
        toggle ? "h-[100dvh]" : "h-[90px] overflow-hidden"
      } md:h-[90px] bg-white flex max-md:flex-col align-center max-md:fixed md:sticky top-0 left-0 md:px-10 z-20 transition-all duration-300`}
    >
      <h1
        className="font-work font-extrabold text-[22px] md:self-center ml-4 md:ml-2 bg-gray-500 text-transparent [text-shadow:_0_2px_3px_rgba(255,_255,_255,_0.7)] bg-clip-text max-md:my-8 hover:cursor-pointer"
        onClick={() => navigate(RoutesHelper.home)}
      >
        BRUNO SARTI
      </h1>
      <div
        className={`${
          toggle || "max-md:hidden"
        } md:w-1/2 self-center text-md md:text-sm md:ml-auto text-gray-800 max-md:h-full max-md:flex`}
      >
        <ul className="flex max-md:flex-col justify-around md:justify-between max-md:items-center max-md:h-5/6 max-md:my-auto">
          <li
            className={`w-full max-md:h-1/6 md:w-[80px] flex font-source font-semibold my-auto hover:cursor-pointer relative ${
              pathname === RoutesHelper.home && selected
            }`}
            onClick={() => onClick(RoutesHelper.about)}
          >
            <span className="mx-auto my-auto">About me</span>
            {(pathname === RoutesHelper.home ||
              pathname === RoutesHelper.about) && (
              <motion.div
                className="h-full md:h-[20px] w-full md:w-full absolute max-md:top-0 md:top-[20px] border-red-500 max-md:border-l-[2px] md:border-b-[2px]"
                layoutId="underline"
              ></motion.div>
            )}
          </li>
          <li
            className={`w-full max-md:h-1/6 md:w-[80px] flex font-source font-semibold my-auto hover:cursor-pointer relative ${
              pathname === RoutesHelper.projects && selected
            }`}
            onClick={() => onClick(RoutesHelper.projects)}
          >
            <span className="mx-auto my-auto">Projects</span>
            {pathname === RoutesHelper.projects && (
              <motion.div
                className="h-full md:h-[20px] w-full md:w-full absolute max-md:top-0 md:top-[20px] border-red-500 max-md:border-l-[2px] md:border-b-[2px]"
                layoutId="underline"
              ></motion.div>
            )}
          </li>
          <li
            className={`w-full max-md:h-1/6 md:w-[80px] flex font-source font-semibold my-auto hover:cursor-pointer relative ${
              pathname === RoutesHelper.feedback && selected
            }`}
            onClick={() => onClick(RoutesHelper.feedback)}
          >
            <span className="mx-auto my-auto">Feedback</span>
            {pathname === RoutesHelper.feedback && (
              <motion.div
                className="h-full md:h-[20px] w-full md:w-full absolute max-md:top-0 md:top-[20px] border-red-500 max-md:border-l-[2px] md:border-b-[2px]"
                layoutId="underline"
              ></motion.div>
            )}
          </li>
          <li className="font-source font-semibold my-auto">
            <SlashingButton
              text="Download CV"
              primary="black"
              secondary="white"
            />
          </li>
        </ul>
      </div>
      <div className="md:hidden bg-white ml-auto mr-4 grid place-content-center">
        <div className="p-5 rounded-tl-[10%] rounded-tr-[20%] rounded-br-[40%] rounded-bl-[20%] bg-white shadow-md hover:cursor-pointer absolute top-2 right-4">
          <FiMenu className="w-7 h-auto" color="#444444" onClick={onToggle} />
        </div>
      </div>
    </div>
  );
}
