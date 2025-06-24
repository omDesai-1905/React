import Chai from "./chai"
function App() {

  
  const userName = "Om desai"
  return(
    // <div> {/* only one tag allowed  in jsx return */} 
    //   <h1>Welcome to Vite React</h1>
    //   <Chai/>
    // </div>

    <> 
      <h1>Welcome to Vite React with {userName}</h1>
      <Chai/>
    </>
  )
}

export default App
