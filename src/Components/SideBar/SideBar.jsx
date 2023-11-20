import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import gmailIcon from "../../assets/gmail.svg";

export default function SideBar() {
  return (
    <div className="h-full max-w-26px flex flex-col gap-4 mr-auto justify-center">
      <img src={linkedinIcon} alt={"linkedin"} />
      <img src={githubIcon} alt={"github"} />
      <img src={gmailIcon} alt={"gmail"} />
    </div>
  );
}
