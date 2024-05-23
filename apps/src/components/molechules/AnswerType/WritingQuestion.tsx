import React from "react";

interface WritingQuestionProp{
  classname? : string;
}

const WritingQuestion:React.FC<WritingQuestionProp> = ({classname}) => {
  return (
    <div>
      <div className={`w-full mt-4 ${classname}`}>
        <input
          type="text"
          className=" w-2/3 pl-3  lg:py-2 border-b border-dashed border-black focus:outline-none focus:border-blue-500 bg-white "
          placeholder="Answer"
        />
      </div>
    </div>
  );
};

export default WritingQuestion;
