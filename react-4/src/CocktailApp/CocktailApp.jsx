import Stack from '@mui/material/Stack';
import SearchBox from './SearchBox/SearchBox';
import AlphabetBox from './AlphabetBox/AlphaetBox';

const CocktailApp = () => {

  return(
    <Stack spacing={2} direction="column" 
      sx={{maxWidth: "700px", margin: "auto", marginTop: "5px"}}>

      <h1 style={{color: "blue", margin: "auto"}}>Welcome to Cocktail App</h1>

      <Stack direction="row" spacing={9}>
      
        <SearchBox />

        <div style={{width: '200px'}}>

          <img 
            src='https://img.freepik.com/free-vector/cocktail-glass-white-background_1308-112632.jpg'
            style={{ objectFit: 'contain', width: '100%', height: '100%' }} />

        </div>
      </Stack>

      <AlphabetBox />

    </Stack>
  )

}

export default CocktailApp;