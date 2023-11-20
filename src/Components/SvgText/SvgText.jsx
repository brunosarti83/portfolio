// https://www.youtube.com/watch?v=5Fxjt5ZNC00
import video from "../../assets/pexels_videos_1.mp4";

export default function SvgText() {
  return (
    <div className="h-full w-full bg-blue-200 relative">
      <video
        src={video}
        loop
        autoPlay
        muted
        className="w-full h-full object-cover -scale-x-100"
      ></video>
      <div className="w-full font-work font-extrabold text-[160px] leading-[130px] tracking-tighter text-white absolute top-0 left-0 h-full bg-[#0f0f0f] mix-blend-multiply px-10">
        <h1 className="mt-5">Full</h1>
        <h1>Stack</h1>
        <h1>Developer</h1>
      </div>
    </div>
  );
}
