import Display from "./Views/Display/Display";
import SideBar from "./Components/SideBar/SideBar";
import BottomBar from "./Components/BottomBar/BottomBar";

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-tl from-slate-200 to-[#00FFB2] via-sky-200 flex">
      <div className="w-5/6 max-w-[1000px] m-auto flex flex-col gap-4">
        <div className="w-full h-full flex md:flex-row gap-2 m-auto flex-col">
          <Display />
          <SideBar />
        </div>
        <BottomBar />
      </div>
    </div>
  );
}

export default App;
