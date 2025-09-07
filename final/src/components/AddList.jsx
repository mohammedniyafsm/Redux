import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

function AddList() {
    const [value,setValue] = useState("");
    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addTodo(
           { title : value}
        ))
        setValue("")
    }

    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder='Add new Todo'
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default AddList
