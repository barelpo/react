import { List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

const DogsList = ({dogs, onDogSelected, selectedId}) =>{

  const items = Object.values(dogs).map((dog) => {
    return(
      <ListItemButton
        key={dog.id}
        selected={dog.id === selectedId}
        onClick={() =>{
          onDogSelected(dog.id)
          }}>
        <ListItemText primary={dog.label} />
      </ListItemButton>
    )
  })

  return(
    <List component="nav" >
      {items}
    </List>
  )
}

export default DogsList;