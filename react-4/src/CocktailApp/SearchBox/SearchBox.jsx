import { Button, Input, Stack } from "@mui/material";


const SearchBox = () => {

  return(

    <Stack spacing={2} direction="column" 
      sx={{maxWidth: "600px", margin: "auto", marginTop: "5px"}}>
      
      <h3 style={{color: "blue"}} color="blue">You can search by cocktail name:</h3>

      <Stack spacing={4} direction="row">

        <Input
          color="primary"
          placeholder="Insert cocktail name"
          size="md">
        </Input>

        <Button variant="outlined">
          Search
        </Button>
      </Stack>

    </Stack>

  )

}

export default SearchBox;