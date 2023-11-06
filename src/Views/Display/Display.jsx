import { Routes, Route } from "react-router-dom";
import { RoutesHelper } from '../../utils/routes';
import Home from "../Home/Home";



function Display() {
  return (
    <div className="w-[1298px] h-[815px] bg-white m-auto">
      <Routes>
        <Route path={RoutesHelper.home} element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Display