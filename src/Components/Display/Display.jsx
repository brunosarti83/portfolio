/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";

function Display({ title, content, link }) {
  const [open, setOpen] = useState(false);

  const variants = {
    closed: {
      height: 0,
      paddingBottom: 0,
    },
    open: {},
  };

  return (
    <div className="w-full flex flex-col gap-0 font-source">
      <div className="flex h-[70px] w-full mx-auto px-6 border-[1px] border-black bg-gray-100 shadow-[0px_3px_4px_rgba(50,_50,_50,_0.4)]">
        <h4 className="my-auto">{title}</h4>
        <button className="my-auto ml-auto" onClick={() => setOpen(!open)}>
          <MdOutlineKeyboardArrowDown className="text-[26px] text-gray-600" />
        </button>
      </div>
      <motion.div
        className="px-10 pb-[20px] text-sm bg-gray-150 border-[1px] border-gray-500 overflow-hidden"
        variants={variants}
        animate={open ? "open" : "closed"}
      >
        <ul className="list-disc">
          {content.map((bullet, index) => (
            <li key={index} className="my-4">
              <p>{bullet}</p>
            </li>
          ))}
        </ul>
        <br />
        {link ? (
          <div className="flex gap-2">
            <FaArrowUpRightFromSquare className="" />
            <a href={link} className="underline">
              visit repository
            </a>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}

export default Display;
