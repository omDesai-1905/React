import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { set } from 'mongoose';

function App() {
  let [counter, setCounter] = useState(5);
  // let counter = 5;

  const addValue = () => {
    if(counter < 20) {
      counter += 1;
      setCounter(counter);
    }
  }
  const removeValue = () => {
    if(counter > 0) {
      counter -= 1;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>om desai</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
