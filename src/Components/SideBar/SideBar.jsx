import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import gmailIcon from "../../assets/gmail.svg";
import { socialMedia } from "../../db";

export default function SideBar() {
  return (
    <div className="h-full max-w-26px flex flex-col gap-4 mr-auto justify-center">
      <a href={socialMedia.linkedin}>
        <img
          src={linkedinIcon}
          alt={"linkedin"}
          className="transition-size duration-1000 hover:transform-gpu hover:scale-150"
        />
      </a>
      <a href={socialMedia.github}>
        <img
          src={githubIcon}
          alt={"github"}
          className="transition-size duration-1000 hover:transform-gpu hover:scale-150"
        />
      </a>
      <div>
        <img
          src={gmailIcon}
          alt={"gmail"}
          className="transition-size duration-1000 hover:transform-gpu hover:scale-150 hover:cursor-pointer"
        />
      </div>
    </div>
  );
}
