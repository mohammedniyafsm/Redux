import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteTodo, getTodo, toggleBox } from '../redux/todoSlice';

function TodoList() {
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTodo())
    },[dispatch])

    const handleDelete =(id)=>{
        dispatch(deleteTodo(
            id,
        ))
    }

    const onChanageBox =(id,completed)=>{
        dispatch(toggleBox(
           { id:id ,completed :!completed}
        ))
    }

  return (
    <div>
      {todos.map((todo)=>(
        <div key={todo.id}>
        <input type="checkbox"  checked={todo.completed} onChange={()=>onChanageBox(todo.id,todo.completed)} />
        <button>{todo.title}</button>
        <button onClick={()=>handleDelete(todo.id)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
