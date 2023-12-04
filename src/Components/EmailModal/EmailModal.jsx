import { useReset } from "../../utils/useReset";
import emailjs from "@emailjs/browser";
import image from "../../assets/beard.jpg";
import { BiErrorCircle } from "react-icons/bi";
import { validateMessage } from "../../utils/validateMessage";

export default function EmailModal({ onClose }) {
  const [form, setForm, resetForm] = useReset({
    email: "",
    message: "",
  });
  const [errors, setErrors, resetErrors] = useReset({
    email: "",
    message: "",
  });
  const [showErrors, setShowErrors, resetShowErrors] = useReset({
    email: false,
    message: false,
  });
  // todo esto puede ser un solo hook

  const onChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [field]: value });
    //missing validation
  };
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_serviceId,
      import.meta.env.VITE_templateId,
      e.target,
      import.meta.env.VITE_publicKey
    );
    resetForm();
    onClose();
  };
  return (
    <div className="w-full h-full flex mx-auto gap-2">
      <div className="w-[50%] h-1000 bg-red-200 ml-auto overflow-hidden">
        <img
          src={image}
          alt="mail illustration"
          className="object-cover h-full object-center p-0 m-0"
        />
      </div>
      <div className="w-[50%] h-full ml-auto p-4 pt-[70px] pb-[50px] bg-zinc-100 rounded-[2px]">
        <form
          onSubmit={onSubmit}
          className="w-full h-full flex flex-col gap-14 font-source"
        >
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
              className="bg-zinc-200 w-full text-md text-gray-800 border-b-2 border-slate-500"
            />
          </div>
          <div className="flex gap-4">
            <label className="text-md font-semibold text-gray-800 w-1/6">
              To:
            </label>
            <label className="w-full text-md text-gray-800 border-b-2 border-slate-500">
              brunosarti.bs@gmail.com
            </label>
          </div>
          <div className="flex flex-col gap-2 h-1/3">
            <label className="text-md font-semibold text-gray-800 w-1/6">
              Message:
            </label>
            <textarea
              name="message"
              onChange={onChange}
              value={form.message}
              placeholder="Type your message"
              className="bg-zinc-200 text-sm text-gray-800 h-[12rem] border-b-2 border-slate-500"
            />
          </div>
          <button
            type="submit"
            className={`w-2/4 py-1 bg-gray-800 text-center mx-auto rounded-sm mt-4 text-[#F0F0F0] font-source font-semibold relative left-[40%] hover:cursor-pointer`}
          >
            {"Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
