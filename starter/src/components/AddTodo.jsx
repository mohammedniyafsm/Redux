import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';


function AddTodo() {
    const [value,setValue] = useState("");
    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTodo({
            title : value
        }))
        setValue("")
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
        value={value}
         onChange={(e)=>setValue(e.target.value)}
         placeholder='Add Todo'
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddTodo
