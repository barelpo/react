import { useState } from "react"

const ClickCounter = () =>{

  const [counter, setCounter] = useState(0)
  
  const handleIncrement = () =>{
    setCounter(counter+1)
  }

  const handleReset = () =>{
    setCounter(0)
  }



  return(
    <>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>npm run startReset</button>
      <p>{counter}</p>
    </>

  )
}

export default ClickCounter