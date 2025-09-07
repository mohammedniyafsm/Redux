import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import AddList from './components/AddList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddList />
    <TodoList />
    </>
  )
}

export default App
