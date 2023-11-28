import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailModal({ onClose }) {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });
  const onChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [field]: value });
    //missing validation
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Send email clicked");
    emailjs.sendForm("serviceId", "templateId", e.target, "publicKey");
    //careful with e.target i'm using a simple onClick
  };
  return (
    <div className="w-[90%] mx-auto py-4">
      <form className="w-full flex flex-col gap-2 font-source">
        <div className="flex gap-4">
          <label className="text-md font-semibold text-gray-800 w-1/6">
            From:
          </label>
          <input
            name="email"
            type={"email"}
            onChange={onChange}
            value={form.from}
            placeholder="person@example.com"
            className="rounded-sm w-full text-md text-gray-800"
          />
        </div>
        <div className="flex gap-4">
          <label className="text-md font-semibold text-gray-800 w-1/6">
            To:
          </label>
          <label className="text-md text-gray-800 ml-[-10px]">
            brunosarti.bs@gmail.com
          </label>
        </div>
        <br />
        <br />
        <div className="flex flex-col gap-2 h-1/3">
          <label className="text-md font-semibold text-gray-800 w-1/6">
            Message:
          </label>
          <textarea
            name="message"
            onChange={onChange}
            value={form.message}
            className="text-sm text-gray-800 h-[12rem] rounded-sm"
          />
        </div>
        <div
          className="w-1/4 py-1 bg-gray-800 text-center mx-auto rounded-sm mt-4 text-[#F0F0F0] font-source font-semibold"
          onClick={onSubmit}
        >
          Send
        </div>
      </form>
    </div>
  );
}
