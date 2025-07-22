import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let newArr = [1, 2, 3, 4, 5]
  return (
    <>
      <h1 className='bg-blue-800 p-5 rounded-4xl'>Tailwind CSS</h1>
      {/* <Card channel="channel1" obj = {newArr}/> */}
      <Card userName = "om desai" btnText="Click Me"/>
      <Card userName={"abcd"} btnText="Submit"/>
    </>
  )
}

export default App
