import React, { useRef } from "react";
import todo from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";

const Todo = () => {
  
    const inputRef = useRef();

    const add = () => {
      const inputText = inputRef.current.value;
      console.log(inputText);
    }

  return (
    <div className="bg-[linear-gradient(to_top,_lightgrey_0%,_lightgrey_1%,_#e0e0e0_26%,_#efefef_48%,_#d9d9d9_75%,_#bcbcbc_100%)] w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl place-self-center mt-11">
      {/* Title */}
      <div className="flex items-center mt-7 gap-2">
        <img src={todo} alt="" className="w-8" />
        <h1 className="text-3xl font-bold"><span className="bg-[linear-gradient(-60deg,_#ff5858_0%,_#f09819_100%)] text-transparent bg-clip-text">M</span>y <span className="bg-[linear-gradient(-60deg,_#ff5858_0%,_#f09819_100%)] text-transparent bg-clip-text">T</span>o-<span className="bg-[linear-gradient(-60deg,_#ff5858_0%,_#f09819_100%)] text-transparent bg-clip-text">D</span>o</h1>
      </div>

      {/* Input Box */}
      <div className="flex items-center my-7 bg-[linear-gradient(120deg,_#fdfbfb_0%,_#ebedee_100%)] rounded-4xl">
        <input
          type="text"
          ref={inputRef}
          placeholder="Add Your To Do"
          className="bg-transparent border-0 outline-none flex-1 h-12 pl-6 pr-2 placeholder: text-slate-800 font-semibold text-[20px]"
        />
        <button onClick={add} className="border-none rounded-full bg-[linear-gradient(-60deg,_#ff5858_0%,_#f09819_100%)] h-12 w-26 font-semibold text-[20px] text-gray-200">
          ADD+
        </button>
      </div>

      {/* To Do List */}
      <div>
        <Todoitems text="Create About Us Section"/>
        <Todoitems text="Update In Website"/>
      </div>
    </div>
  );
};

export default Todo;
