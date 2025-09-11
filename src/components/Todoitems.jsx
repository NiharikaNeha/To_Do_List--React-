import React from "react";
import tick from "../assets/tick.png";
import not_tick from '../assets/not_tick.png'
import delete_icons from "../assets/delete.png";

const Todoitems = ({ text, id, isComplete, delete_todo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
        <p className={`text-slate-700 ml-4 text-[17px] decoration-gray-600 ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>

      <img
        onClick={() => {
          delete_todo(id);
        }}
        src={delete_icons}
        alt=""
        className="w-3.5 h-3.5 cursor-pointer"
      />
    </div>
  );
};

export default Todoitems;
