import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icons from "../assets/delete.png";

const Todoitems = ({ text, id, isComplete, delete_todo, toggle }) => {
  return (
    <div className="flex items-center my-2 sm:my-3 gap-2 sm:gap-3 px-2 sm:px-4">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        {/* Tick / Untick Icon */}
        <img
          src={isComplete ? tick : not_tick}
          alt=""
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        />

        {/* Todo Text */}
        <p
          className={`ml-2 sm:ml-3 text-sm sm:text-base md:text-lg text-slate-700 decoration-gray-600 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>

      {/* Delete Icon */}
      <img
        onClick={() => delete_todo(id)}
        src={delete_icons}
        alt="delete"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer"
      />
    </div>
  );
};

export default Todoitems;
