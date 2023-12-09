import About from "../../Components/About/About";
import FullStack from "../../Components/FullStack/FullStack";
import { useEffect, useRef } from "react";
import { RoutesHelper } from "../../utils/routes";
import { useLocation, useNavigate } from "react-router";
import { useInView } from "react-intersection-observer";
import BottomBar from "../../Components/BottomBar/BottomBar";
import axios from "axios";

export default function Home() {
  const lastObject = useRef(null);
  const { pathname } = useLocation();
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://rodarrent-main-server.onrender.com/hc");
    axios.get("https://pokemon-app-server-up23.onrender.com/hc");
  }, []);

  useEffect(() => {
    if (pathname === RoutesHelper.about) {
      lastObject.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [pathname]);

  useEffect(() => {
    if (inView) {
      navigate(RoutesHelper.home);
    }
  }, [inView, navigate]);

  return (
    <div className="w-full h-full">
      <div ref={ref}></div>
      <FullStack />
      <div className="w-full h-full md:hidden my-10 flex">
        <BottomBar />
      </div>
      <About />
      <div ref={lastObject}></div>
    </div>
  );
}
