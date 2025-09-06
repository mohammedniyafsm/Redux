import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
    <AddTodo />
    <TodoList />
    </>
  )
}

export default App
