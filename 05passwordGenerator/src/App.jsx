import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charcterAllowed, setCharAllowed] = useState(false)
  const [passwrod, setPassword] = useState("")

  // useref hook
  const passwordRef = useRef(null)

  const passwrodGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) {
      str += "0123456789"
    }
    if(charcterAllowed) {
      str += "!@$%&*_+-[]{}~`"
    }
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charcterAllowed, ])
  useEffect(() => {passwrodGenerator()
  }, [length, numberAllowed, charcterAllowed, passwrodGenerator])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select() // select the text in the input //optional
    passwordRef.current?.setSelectionRange(0, 3) // select the first 3 characters //optional
    window.navigator.clipboard.writeText(passwrod)
  }, [passwrod])
  return (
    <>
      <div className='w-full
        max-w-md 
        mx-auto 
        shadow-md 
        rounded-lg 
        px-4 my-8 
        text-orange-500 
        bg-gray-800 py-3'>
        <h1 className='text-white
          text-center 
          my-3'>Password Generator</h1>
        <div className="flex
          shadow 
          rounded-lg 
          overflow-hidden mb-4">
          <input type="text" 
            value={passwrod} 
            className='outline-none 
            bg-gray-700 
            text-white 
            px-3 py-3 
            w-full 
            my-0.5 h-full'  
            placeholder='password' 
            readOnly ref={passwordRef}/>
          <button className='outline-none 
            bg-blue-700 
            text-white 
            px-3 py-0.5 
            shrink-0 
            cursor-pointer' onClick={copyPasswordToClipBoard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
              min={6} max={100} 
              value={length} 
              className='curser-pointer' 
              onChange={(e)=> {setLength(e.target.value)}}/>
            <label htmlFor="">Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
              defaultChecked={numberAllowed} 
              id='numberInput' 
              onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}/>
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
              defaultChecked={charcterAllowed} 
              id='characterInput' 
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}/>
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
