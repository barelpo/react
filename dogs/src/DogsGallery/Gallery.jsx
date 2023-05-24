import { Stack } from "@mui/material";
import DogsList from "./DogsList";
import DogPicture from "../DogPicture/Dogpicture";
import Button from '@mui/material/Button';
import { useState } from "react";

var INDEX = 1

const Gallery = ({url, loading, onDiscard}) =>{

  const[dogs, setDogs] = useState({})
  const[selectedId, setSelectedId] = useState(null)

  const saveHandler = () =>{
    const dog = {id: INDEX, label: `Dog ${INDEX}`, url}
    setDogs({...dogs, [INDEX]: dog})
    INDEX++
  }

  return(
    <>     
    
      { url && !loading &&
        
      <Stack spacing={2} direction="row"
      sx={{margin: "auto", justifyContent: "center"}}>
      <Button onClick={saveHandler}>Save</Button>
      <Button onClick={onDiscard}>Disacard</Button>
      </Stack>
      }


      <Stack direction={'row'} spacing={5}>
      <DogsList 
        dogs={dogs}
        onDogSelected = {(id)=>setSelectedId(id)} />
      <> {selectedId &&
        <DogPicture size="100px" url={dogs[selectedId].url} onImgLoaded={() => {}} />
      }</>
      </Stack>
    </>
  )

}

export default Gallery;