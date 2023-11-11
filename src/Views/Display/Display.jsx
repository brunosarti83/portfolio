import { Routes, Route } from "react-router-dom";
import { RoutesHelper } from "../../utils/routes";
import Home from "../Home/Home";
import NavBar from "../../Components/NavBar/NavBar";
import Projects from "../Projects/Projects";

function Display() {
  return (
    <div className="w-full h-full bg-white relative overflow-y-scroll scrollbar-none shadow-md z-10">
      <NavBar />
      <Routes>
        <Route path={RoutesHelper.home} element={<Home />} />
        <Route path={RoutesHelper.projects} element={<Projects />} />
      </Routes>
    </div>
  );
}

export default Display;
