import { Routes, Route } from "react-router-dom";
import { RoutesHelper } from "../../utils/routes";
import Home from "../Home/Home";
import NavBar from "../../Components/NavBar/NavBar";
import Projects from "../Projects/Projects";
import Feedback from "../Feedback/Feedback";

function Display() {
  return (
    <div
      className={
        "w-full md:h-0 md:pb-[56%] relative z-10 m-auto shadow-md shadow-gray-400 max-md:mt-[90px]"
      }
    >
      <div className="w-full h-full md:absolute md:top-0 md:left-0 md:bottom-0 md:right-0 overflow-x-hidden overflow-y-scroll scrollbar-none snap-y snap-proximity scroll-pt-[90px] scroll-smooth">
        <NavBar />
        <Routes>
          <Route path={RoutesHelper.home} element={<Home />} />
          <Route path={RoutesHelper.about} element={<Home />} />
          <Route path={RoutesHelper.projects} element={<Projects />} />
          <Route path={RoutesHelper.feedback} element={<Feedback />} />
        </Routes>
      </div>
    </div>
  );
}

export default Display;
