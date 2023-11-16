export default function Feedback() {
  return (
    <div className="flex w-full bg-green-100 p-2 pb-12">
        <div className="flex flex-col w-1/2 pl-8">
            <h1 className="font-work font-extrabold text-[70px] leading-[65px] text-green-100 drop-shadow-dark">
                Would you mind a question?
            </h1>
            <div className="mt-10 mr-10">
                <p className="font-source font-semibold text-xs text-gray-800">
                    I am always looking to dig deeper into some topic as well as 
                    incorporating new tech to my stack... these are just two super fast
                    multiple choice style questions that will help me become a more 
                    relevant developer.
                </p>
                <br />
                <p className="font-source font-semibold text-xs text-gray-800">
                    If you would like to contact me directly you can use the social 
                    media links on the right margin of this page.
                </p>
            </div>
        </div>
    </div>
  )
}
