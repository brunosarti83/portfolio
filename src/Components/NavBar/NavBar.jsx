export default function NavBar() {
  return (
    <div className="w-full h-[105px] bg-white flex align-center sticky top-0 left-0">
        <h1 className="font-work font-extrabold text-[22px] self-center ml-5">
            BRUNO SARTI
        </h1>
        <div className="w-3/5 self-center text-m ml-auto mr-10">
            <ul className="flex flex-row justify-around">
                <li className="font-source font-semibold">
                    About me
                </li>
                <li className="font-source font-semibold">
                    Projects
                </li>
                <li className="font-source font-semibold">
                    Download CV
                </li>
                <li className="font-source font-semibold">
                    Feedback
                </li>
            </ul>
        </div>
    </div>
  )
}
