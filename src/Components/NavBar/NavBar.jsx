// https://designshack.net/articles/css/inner-shadows-in-css-images-text-and-beyond/

export default function NavBar() {
  return (
    <div className="w-full h-[90px] bg-white flex align-center sticky top-0 left-0 px-10 z-20">
      <h1 className="font-work font-extrabold text-[22px] self-center ml-2 bg-gray-500 text-transparent [text-shadow:_0_2px_3px_rgba(255,_255,_255,_0.7)] bg-clip-text">
        BRUNO SARTI
      </h1>
      <div className="w-1/2 self-center text-sm ml-auto">
        <ul className="flex flex-row justify-around">
          <li className="font-source font-semibold my-auto">About me</li>
          <li className="font-source font-semibold my-auto">Projects</li>
          <li className="font-source font-semibold my-auto">
            <div className="bg-white px-5 py-3 drop-shadow-md rounded-lg my-auto">
              Download CV
            </div>
          </li>
          <li className="font-source font-semibold my-auto">Feedback</li>
        </ul>
      </div>
    </div>
  );
}
