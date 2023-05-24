import { useState } from 'react'
import './Season.css'

const Season = () =>{
  // let season = "Summer"

  const [ind, setInd] = useState(1)

  const seasons = ['Spring', 'Summer', 'Fall', 'Winter']

  const handleClick = () =>{
    if (ind === 3){
      setInd(0)
    }
    else{
      setInd(ind + 1)
    }
  }

  return(
    <div className="bordered-div">
      <h2>{seasons[ind]}</h2>
      <button onClick={handleClick}>Next season</button>
    </div>
  )
}

export default Season;