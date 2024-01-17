// https://www.youtube.com/watch?v=5Fxjt5ZNC00
import video from "../../assets/pexels_videos_1.mp4";
import { motion } from "framer-motion";

export default function SvgText() {
  return (
    <div className="h-full w-full bg-blue-200 relative">
      <video
        src={video}
        loop
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover relative max-md:bottom-20 -scale-x-100"
      ></video>
      <div className="w-full font-work font-extrabold text-[7rem] leading-[6rem] md:text-[160px] md:leading-[130px] tracking-tighter text-white absolute top-0 left-0 h-full bg-black mix-blend-multiply px-10">
        <motion.h1
          initial={{
            x: "-500px",
          }}
          animate={{
            x: "0px",
          }}
          transition={{
            duration: "1",
          }}
          className="mt-[100px] md:mt-5"
        >
          Full
        </motion.h1>
        <motion.h1
          initial={{
            x: "1000px",
          }}
          animate={{
            x: "0px",
          }}
          transition={{
            duration: "1",
          }}
        >
          Stack
        </motion.h1>
        <motion.h1
          initial={{
            x: "-500px",
          }}
          animate={{
            x: "0px",
          }}
          transition={{
            duration: "1",
          }}
          className="break-all"
        >
          Developer
        </motion.h1>
      </div>
    </div>
  );
}
