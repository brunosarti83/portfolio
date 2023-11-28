import { Routes, Route } from "react-router-dom";
import { RoutesHelper } from "../../utils/routes";
import Home from "../Home/Home";
import NavBar from "../../Components/NavBar/NavBar";
import Projects from "../Projects/Projects";
import Feedback from "../Feedback/Feedback";

function Display() {
  return (
    <div className="w-full h-0 pb-[56%] bg-white relative z-10 m-auto shadow-md shadow-gray-400">
      <div className="w-full h-full absolute top-0 left-0 bottom-0 right-0  overflow-y-scroll scrollbar-none">
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
