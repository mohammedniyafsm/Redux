import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, addUserAsync, deleteUser, deleteUserAsync, getUserAsync } from './redux/userSlice';

function App() {
  const [value, setValue] = useState("");
   const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getUserAsync())
  },[])

   const data = useSelector((state)=>state.user);


  
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(value.trim() == "") return ;
    dispatch(addUserAsync({
      name : value 
    }))
    setValue("");
     console.log(data)
  }
const handleDelete=(id)=>{
      dispatch(deleteUserAsync(id))
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        <button type='submit'>Add</button>
      </form>

      {data.map((s)=>(
        <div key={s.id}>

          <div >{s.name}<button onClick={()=>handleDelete(s.id)}>delte</button> </div>
        </div>
      ))}
    </>
  )
}

export default App
