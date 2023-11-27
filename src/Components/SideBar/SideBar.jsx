import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import gmailIcon from "../../assets/gmail.svg";
import { socialMedia } from "../../db";
import Modal from "react-modal";
import { useState } from "react";
import EmailModal from "../EmailModal/EmailModal";

export default function SideBar() {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  return (
    <div className="h-full max-w-26px flex m-auto">
      <div className="flex flex-col gap-4 justify-center my-auto">
        <a href={socialMedia.linkedin}>
          <img
            src={linkedinIcon}
            alt={"linkedin"}
            className="transition-size duration-700 hover:transform-gpu hover:scale-150"
          />
        </a>
        <a href={socialMedia.github}>
          <img
            src={githubIcon}
            alt={"github"}
            className="transition-size duration-700 hover:transform-gpu hover:scale-150"
          />
        </a>
        <div onClick={() => setEmailModalOpen(true)}>
          <img
            src={gmailIcon}
            alt={"gmail"}
            className="transition-size duration-700 hover:transform-gpu hover:scale-150 hover:cursor-pointer"
          />
        </div>
      </div>
      <Modal
        className="w-1/3 min-h-[70dvh] p-4 bg-zinc-300 rounded-md flex flex-col"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-opacity-40 bg-black z-50"
        isOpen={emailModalOpen}
        onRequestClose={() => setEmailModalOpen(false)}
      >
        <EmailModal onClose={() => setEmailModalOpen(false)} />
      </Modal>
    </div>
  );
}
