import { Routes, Route } from "react-router-dom";
import { RoutesHelper } from '../../utils/routes';
import Home from "../Home/Home";
import NavBar from "../../Components/NavBar/NavBar";



function Display() {
  return (
    <div className="w-full h-full bg-white relative overflow-y-scroll scrollbar-none">
      <NavBar/>
      <Routes>
        <Route path={RoutesHelper.home} element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Display