// for name inset: https://designshack.net/articles/css/inner-shadows-in-css-images-text-and-beyond/

import { useNavigate } from "react-router-dom";
import SlashingButton from "../SlashingButton/SlashingButton";
import { RoutesHelper } from "../../utils/routes";
import { useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const [section, setSection] = useState(RoutesHelper.home); // could this be Ref ? Would it render ?
  const onClick = (to) => {
    if (to !== section) {
      setSection(to);
      navigate(to, { state: { navBarSays: to } });
    }
  };

  return (
    <div className="w-full h-[90px] bg-white flex align-center sticky top-0 left-0 px-10 z-20">
      <h1 className="font-work font-extrabold text-[22px] self-center ml-2 bg-gray-500 text-transparent [text-shadow:_0_2px_3px_rgba(255,_255,_255,_0.7)] bg-clip-text">
        BRUNO SARTI
      </h1>
      <div className="w-1/2 self-center text-sm ml-auto">
        <ul className="flex flex-row justify-around">
          <li
            className={
              "font-source font-semibold my-auto hover:cursor-pointer" + `${""}`
            }
            onClick={() => onClick(RoutesHelper.home)}
          >
            About me
          </li>
          <li
            className="font-source font-semibold my-auto hover:cursor-pointer"
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
            className="font-source font-semibold my-auto hover:cursor-pointer"
            onClick={() => onClick(RoutesHelper.feedback)}
          >
            Feedback
          </li>
        </ul>
      </div>
    </div>
  );
}
