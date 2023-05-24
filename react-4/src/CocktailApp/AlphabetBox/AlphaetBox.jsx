import { Button, Chip, Input, Stack } from "@mui/material";

const AlphabetBox = () => {

  const AlphabetRow = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
    return (
      <Stack direction="row" spacing={1}>
        {Array.from(alphabet).map((letter) => (
          <Chip 
            key={letter} 
            variant="outlined" 
            size="small"
            clickable
            color="primary"
            label={letter}
            />
        ))}
      </Stack>
    );
  };


  return(
    <Stack spacing={2} direction="column"
      sx={{maxWidth: "700px", margin: "auto", marginTop: "5px"}}>
      
      <h3 style={{color: "blue"}} color="blue">You can search by first letter as well:</h3>

      <Stack spacing={3} direction="column" sx={{maxWidth: "700px", alignItems:"center"}}>
        
        <AlphabetRow />

      </Stack>

    </Stack>
  )

}

export default AlphabetBox;