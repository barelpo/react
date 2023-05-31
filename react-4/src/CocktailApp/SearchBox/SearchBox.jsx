import { Button, Input, Stack } from "@mui/material";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';


const SearchBox = ({handleClick, name, setName, loading}) => {

  return(

    <Stack spacing={2} direction="column" 
      sx={{maxWidth: "600px", margin: "auto", marginTop: "5px"}}>
      
      <h3 style={{color: "blue"}} color="blue">You can search by cocktail name:</h3>

      <Stack spacing={4} direction="row">

        <Input
          color="primary"
          placeholder="Insert cocktail name"
          size="md"
          onChange={(event) => setName(event.target.value)}>
        </Input>

        {loading
          
          ?
        
          <CircularProgress />

          :

          <Button variant="outlined" onClick={()=>handleClick()}>
          Search
          </Button>
        }
        
        
      </Stack>

    </Stack>

  )

}

export default SearchBox;