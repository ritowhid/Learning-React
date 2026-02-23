import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)
  const [message, setMessage] = useState("")
  // let counter = 15

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
      setMessage("")
    } else {
      setMessage("You reached maximum value")
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      setMessage("")
    } else {
      setMessage("You reached minimum value")
    }
  }

  return (
    <>
      <h1>Learning the React JS</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>

      <br />

      <button onClick={removeValue}>Remove Value {counter}</button>

      {message && <p>{message}</p>}
      <p>footer: {counter} </p>
    </>
  )
}

export default App
