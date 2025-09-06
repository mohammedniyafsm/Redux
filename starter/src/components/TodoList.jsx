import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleCheckbox } from '../redux/todoSlice';


function TodoList() {
    const todos = useSelector((state)=>state.todo);
    const dispatch = useDispatch();


    const handleDelete =(id)=>{
        dispatch(deleteTodo({
           id : id,
        }))
    }

    const handleCheckBox =(id,completed)=>{
       dispatch(toggleCheckbox({
         id : id,
         completed : !completed,
       }))
    }

  return (
    <div>
        {todos.map((todo)=>(
            <div className="" key={todo.id} style={{padding : "20px"}}>
                <input type="checkbox" checked={todo.completed} onChange={()=>handleCheckBox(todo.id,todo.completed)} />
                <button>{todo.title}</button>
                <button onClick={()=>handleDelete(todo.id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default TodoList
