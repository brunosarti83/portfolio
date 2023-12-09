import Form from "../../Components/Form/Form";

export default function Feedback() {
  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100%_-_90px)] w-full bg-teal-100 max-md:pt-4">
      <div className="flex flex-col md:w-[55%] pl-8 pr-4 mt-2">
        <h1 className="font-work font-extrabold text-[65px] leading-[55px] md:text-[85px] md:leading-[72px] text-teal-100 drop-shadow-dark">
          Would you <p className="break-keep">mind a</p> question?
        </h1>
        <div className="m-12 ml-0">
          <p className="font-source font-semibold text-[14px] text-gray-800">
            I am always looking to dig deeper into some topic as well as
            incorporating new tech to my stack... these are just two super fast
            multiple choice style questions that will help me become a more
            relevant developer.
          </p>
          <br />
          <p className="font-source font-semibold text-[14px] text-gray-800">
            If you would like to contact me directly you can use the social
            media links on the right margin of this page.
          </p>
        </div>
      </div>
      <div className="h-[100%] md:w-[40%] m-auto">
        <Form />
      </div>
    </div>
  );
}
