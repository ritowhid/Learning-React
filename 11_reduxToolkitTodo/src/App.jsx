import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gray-800 p-8 flex flex-col items-center">
      {/* App title */}
      <h1 className="text-4xl font-bold text-white mb-8">My Todos</h1>

      {/* Add Todo input */}
      <AddTodo />

      {/* Todo list */}
      <Todos />
    </div>
  )
}

export default App