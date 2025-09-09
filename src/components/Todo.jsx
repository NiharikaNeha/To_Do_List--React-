import React from 'react'
import todo from '../assets/todo_icon.png'

const Todo = () => {
  return (
    <div className='bg-[linear-gradient(to_top,_lightgrey_0%,_lightgrey_1%,_#e0e0e0_26%,_#efefef_48%,_#d9d9d9_75%,_#bcbcbc_100%)] w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

        {/* Title */}
        <div className='flex items-center mt-7 gap-2'>
            <img src={todo} alt=""/>
            <h1 className='text-3xl font-bold'>My To Do</h1>
        </div>
    </div>
  )
}

export default Todo