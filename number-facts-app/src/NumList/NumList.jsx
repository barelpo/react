import { Stack } from "@mui/material";
import { useState } from "react";
import Chip from '@mui/material/Chip';

const NumList = ({facts, onNumSelected, handleDelete, selectedId}) =>{

  
  
  
  return(
    <Stack direction="row" spacing={1}>
       {Object.values(facts).map((fact) => (
        <Chip
          key={fact.id}
          label={fact.id.toString()}
          clickable
          onDelete={() => handleDelete(fact.id)}
          onClick = {() => onNumSelected(fact.id)}
          color={selectedId === fact.id ? 'primary' : 'default'}
        />
      ))}
    </Stack>
  )

}

export default NumList;