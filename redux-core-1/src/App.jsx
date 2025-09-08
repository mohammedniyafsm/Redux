import { Fragment, useEffect, useState } from 'react';
import './App.css'
import {store} from "./store";
import { addTodo, deleteTodo, getTodo } from './action';

function App() {
  const [value,setValue] = useState("");
  const [data,setData] = useState(store.getState())
  
  useEffect(()=>{
    const unsubscribe = store.subscribe(()=>{
      setData(store.getState());
    })
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault();
    store.dispatch(addTodo(value))
    setValue("")
  }

  const handleDelete=(id)=>{
    store.dispatch(deleteTodo(id))
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit'>Add</button>
    </form>
    {data.map((s)=>(
      <Fragment key={s.id}>
      <div  className="">{s.id}{s.name}
      <button onClick={()=>handleDelete(s.id)}>Delete</button>
      </div>
      </Fragment>
    ))}
    </>
  )
}

export default App
