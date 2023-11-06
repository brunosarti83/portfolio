import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutesHelper } from './utils/routes';
import Home from "./Views/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesHelper.home} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
