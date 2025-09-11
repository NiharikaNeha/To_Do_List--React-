import React, { useEffect, useRef, useState } from "react";
import todo_img from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";

const Todo = () => {
  const [ToDo, setToDo] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setToDo((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const delete_todo = (id) => {
    setToDo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setToDo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(ToDo));
  }, [ToDo]);

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      add();
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start sm:items-center bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-300 px-3 py-6 sm:py-10">
      <div className="w-full max-w-md sm:max-w-2xl bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-5 sm:p-8 flex flex-col">
        
        {/* Title */}
        <div className="flex items-center justify-center sm:justify-start gap-2 mb-6">
          <img src={todo_img} alt="todo" className="w-8 sm:w-10" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center sm:text-left">
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
              My To-Do
            </span>
          </h1>
        </div>

        {/* Input Box */}
        <div className="flex flex-col sm:flex-row items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-inner p-2 sm:p-3 mb-6">
          <input
            type="text"
            ref={inputRef}
            placeholder="Add your task..."
            onKeyDown={handleKeyPress}   // 👈 added here
            className="bg-transparent border-0 outline-none flex-1 h-12 px-3 sm:px-4 placeholder:text-gray-500 font-medium text-[15px] sm:text-[17px]"
          />
        </div>
        
        <button
          onClick={add}
          className="w-full sm:w-28 mt-3 sm:mt-0 sm:ml-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400
          h-12 font-semibold text-[15px] sm:text-[17px] text-white shadow-md hover:shadow-lg transition-all active:scale-95"
        >
          ADD +
        </button>

        {/* To Do List */}
        <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] sm:max-h-[450px] pr-1 
          scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {ToDo.length > 0 ? (
            ToDo.map((item) => (
              <Todoitems
                key={item.id}
                text={item.text}
                id={item.id}
                isComplete={item.isComplete}
                delete_todo={delete_todo}
                toggle={toggle}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center mt-6 text-sm sm:text-base">
              🎉 No tasks yet! Add one above.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
