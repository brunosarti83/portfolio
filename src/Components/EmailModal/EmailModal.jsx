export default function EmailModal({ onClose }) {
  return (
    <div className="w-[90%] mx-auto py-4">
      <form className="w-full flex flex-col gap-2 font-source">
        <div className="flex gap-4">
          <label className="text-md font-semibold text-gray-800 w-1/6">
            From:
          </label>
          <input
            type={"email"}
            className="rounded-sm w-full text-md text-gray-800"
          />
        </div>
        <div className="flex gap-4">
          <label className="text-md font-semibold text-gray-800 w-1/6">
            To:
          </label>
          <label className="text-md text-gray-800">
            brunosarti.bs@gmail.com:
          </label>
        </div>
        <br />
        <br />
        <div className="flex flex-col gap-2 h-1/3">
          <label className="text-md font-semibold text-gray-800 w-1/6">
            Message:
          </label>
          <textarea className="text-sm text-gray-800 h-[12rem] rounded-sm" />
        </div>
        <div className="w-1/4 py-1 bg-gray-800 text-center mx-auto rounded-sm mt-4 text-[#F0F0F0] font-source font-semibold">
          Send
        </div>
      </form>
    </div>
  );
}
