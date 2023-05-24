import { useState } from "react"
import "./Result.css"
const Result = ({firstUrl}) => {

  // console.log(relAnimalData)

  return(
    <div>
      <img src={firstUrl} />
    </div>
  )
}

export default Result;