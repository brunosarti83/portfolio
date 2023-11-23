/* eslint-disable react/prop-types */
export default function SlashingButton({ text }) {
  return (
    <div
      className={`text-gray-800 py-2 px-5 transition-colors duration-1000 relative overflow-hidden hover:text-white shadow-md before:content-[""] before:absolute before:top-0 before:left-[-50px] before:w-0 before:h-full before:bg-gray-800 before:skew-x-[35deg] before:z-[-5] before:transition-size before:duration-1000 hover:before:w-[150%] -mx-2 cursor-pointer`}
    >
      {text}
    </div>
  );
}
