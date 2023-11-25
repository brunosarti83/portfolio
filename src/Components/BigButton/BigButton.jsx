/* eslint-disable react/prop-types */
export default function BigButton({ overText, centralText, fill, icon, href }) {
  return (
    <a href={href}>
      <div
        className={`flex font-source w-[150px] h-[55px] rounded-xl ${
          fill ? "bg-[#08ECA8]" : "bg-transparent border-2 border-[#08ECA8]"
        } drop-shadow-md hover:cursor-pointer hover:scale-110 transition-all duration-500 hover:shadow-md hover:shadow-green-200`}
      >
        <div
          className={`flex m-auto gap-2 ${
            fill ? "text-[#F0F0F0]" : "text-[#08ECA8]"
          }`}
        >
          <div className="flex m-auto">
            {icon && <img src={icon} className="m-auto" />}
          </div>
          <div className="flex flex-col">
            <div className="text-xs">{overText}</div>
            <div className="text-sm font-semibold">{centralText}</div>
          </div>
        </div>
      </div>
    </a>
  );
}
