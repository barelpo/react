import { useState } from "react"
import "./Navigate.css"

const Navigate = ({urlQty, nextPic, prevPic, index}) =>{


  const next = (event) => {
    event.preventDefault()
    nextPic()
  }

  const prev = (event) => {
    event.preventDefault()
    prevPic()
  }

  return(

    <div className="navigate">
      
      { index > 0
        ?
        <button onClick={(event) => prev(event)}>Previous</button>
        :
        <p></p>
      }

      <p>{index+1}/{urlQty}</p>
      
      {index < urlQty 
        ?
        <button onClick={(event) => next(event)}>Next</button>
        :
        <p></p>
      }
    </div>

  )

}

export default Navigate