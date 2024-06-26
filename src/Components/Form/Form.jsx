import { questions } from "../../db";
import { useState } from "react";
import { formatRow } from "../../utils/formatRow";
import { postAnswer } from "../../utils/postAnswer";
import { useReset } from "../../utils/useReset";
import debounce from "debounce";

export default function Form() {
  const [form, setForm, resetForm] = useReset({
    question1: [],
    question2: [[], { other: "" }],
  });
  const [disabledInput, setDisabledInput] = useState(true);
  const isBlank =
    !form.question1.length &&
    !form.question2[0].length &&
    !form.question2[1].other;
  const colorBook = {
    1: "text-green-700",
    2: "text-blue-500",
    3: "text-yellow-500",
    4: "text-orange-400",
    5: "text-rose-500",
  };

  const onClickOne = (e) => {
    const formCopy = { ...form };
    const skill = e.target.id;
    if (!formCopy.question1.includes(skill)) {
      formCopy.question1.push(skill);
    } else {
      formCopy.question1 = formCopy.question1.filter((n) => n !== skill);
    }
    setForm({ ...formCopy });
  };
  const onClickTwo = (e) => {
    const formCopy = { ...form };
    const skill = e.target.value;
    if (!formCopy.question2[0].includes(skill)) {
      formCopy.question2[0].push(skill);
    } else {
      formCopy.question2[0] = formCopy.question2[0].filter((n) => n !== skill);
    }
    setForm({ ...formCopy });
  };
  const onChangeOther = (e) => {
    const formCopy = { ...form };
    formCopy.question2[1].other = e.target.value;
    setForm({ ...formCopy });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isBlank) {
      const response = await postAnswer({
        row: formatRow(form),
        table_name: "Answers",
      });
      if (Object.keys(response).length === 11) {
        console.log("success"); // could replace with toast
        resetForm();
        setDisabledInput(true);
      }
    }
  };
  const onSubmitDebounced = debounce(onSubmit, 300, true);
  return (
    <div className="flex flex-col h-full w-[90%] bg-[#F0F0F0] drop-shadow-md rounded-md p-2 py-4 max-md:mx-auto max-md:mb-4">
      <form className="m-auto w-[95%]">
        <div className="flex flex-col mx-auto">
          <div className="bg-[#F0F0F0] flex flex-col w-full mx-auto p-2 border-1 border-black drop-shadow-md text-xs font-source font-semibold z-5">
            <label htmlFor="question1">
              1. Would you click on these skills in order of importance for you
              or for the position you were looking to fill ?
            </label>
            <span
              className="ml-auto cursor-pointer"
              onClick={() => setForm({ ...form, question1: [] })}
            >
              Clear
            </span>
          </div>
          <div className="flex flex-col bg-gray-300 pb-1">
            {questions.skills.map((skill, index) => (
              <div
                id={skill}
                key={skill}
                onClick={onClickOne}
                className={
                  "flex relative justify-center w-[95%] m-auto font-source font-semibold cursor-pointer border-b-[1px] border-gray-400" +
                  ` ${
                    colorBook[form.question1.indexOf(skill) + 1] || "text-black"
                  } ${index === questions.skills.length - 1 && "border-none"}`
                }
              >
                <span className="absolute left-10">
                  {form.question1.indexOf(skill) >= 0
                    ? form.question1.indexOf(skill) + 1
                    : ""}
                </span>
                {skill}
              </div>
            ))}
          </div>
          <div className="bg-[#F0F0F0] flex flex-col w-full mx-auto p-2 border-1 border-black drop-shadow-md text-xs font-source font-semibold z-5">
            <label htmlFor="question2">
              2. Were you looking for something you didn’t find here ?
            </label>
            <span
              className="ml-auto cursor-pointer"
              onClick={() => {
                setForm({ ...form, question2: [[], { other: "" }] });
                setDisabledInput(true);
              }}
            >
              Clear
            </span>
          </div>
          <div className="flex flex-col bg-gray-300 pb-2 pt-1 px-6">
            {questions.not.map((skill) => (
              <div
                key={skill}
                className="flex relative justify-start w-[95%] m-auto font-source font-semibold text-sm gap-2"
              >
                <input
                  type="checkbox"
                  checked={form.question2[0].includes(skill)}
                  value={skill}
                  onChange={onClickTwo}
                  className="cursor-pointer"
                />
                <span className="">{skill}</span>
              </div>
            ))}
            <div
              key={"other"}
              className="flex relative justify-start w-[95%] m-auto font-source font-semibold text-sm gap-2"
            >
              <input
                type="checkbox"
                value="Other"
                checked={!disabledInput}
                className=""
                onChange={() => {
                  setDisabledInput((prev) => !prev);
                  setForm({
                    ...form,
                    question2: [[...form.question2[0]], { other: "" }],
                  });
                }}
              />
              <span className="">{"Other:"}</span>
              <input
                type="text"
                value={form.question2[1].other}
                onChange={onChangeOther}
                disabled={disabledInput}
                className="disabled:bg-slate-200"
              />
            </div>
          </div>
        </div>
        <div
          onClick={onSubmitDebounced}
          className={`w-1/3 text-center align-middle font-source font-bold m-auto py-2 cursor-pointer ${
            isBlank && "text-gray-300 cursor-default"
          }`}
        >
          Submit
        </div>
      </form>
    </div>
  );
}
