import { useState } from "react";
import Result from "../Result/Result";
import SearchBox from "../SearchBox/SearchBox";
import "./InterFace.css";
import { IMG_DATA } from "../data";
import Navigate from "../Navigate/Navigate";

const InterFace = () => {

  const [relAnimalData, setRelAnimalData] = useState([])
  const [url, setUrl] = useState('')
  const [listLen, setListLen] = useState(0)
  const[index, setIndex] = useState(0)


  const searchAnimal = (animal) =>{
    if (IMG_DATA.hasOwnProperty(animal)){
      setRelAnimalData(IMG_DATA[animal])
      setUrl(IMG_DATA[animal][0])
      setListLen(IMG_DATA[animal].length)
      setIndex(0)
    } else{
      setUrl('')
    }

  }

  const handleNextPic = () =>{
    setIndex(index+1)
    setUrl(relAnimalData[index+1])
  }

  const handlePrevPic = () =>{
    setIndex(index-1)
    setUrl(relAnimalData[index-1])
  }


  return(

    <div>
      <SearchBox searchFunc={searchAnimal} />
      <Result firstUrl={url} />
      <Navigate urlQty={listLen} nextPic={handleNextPic} prevPic={handlePrevPic} index={index}/>
    </div>
  )
}

export default InterFace;