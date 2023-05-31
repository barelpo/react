import Stack from '@mui/material/Stack';
import SearchBox from './SearchBox/SearchBox';
import AlphabetBox from './AlphabetBox/AlphaetBox';
import { useEffect, useState } from 'react';
import axios from 'axios';

import CocktailItem from './CocktailList/CocktailItem/CocktailItem';
import CocktailList from './CocktailList/CocktailList';
import { LinearProgress } from '@mui/material';

const CocktailApp = () => {

  const [name, setName] = useState('')

  const [cocktailData, setCocktailData] = useState(null)

  const [selectedLetter, setSelectedLetter] = useState(null)

  const [cocktailListData, setCocktailListData] = useState(null)

  const [loading, setLoading] = useState(false)

  const getCocktail = async () =>{
    try{
      setLoading(true)
      setCocktailListData(null)
      let exactMatch = null
      let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name
      let newResp = await axios.get(url) 
      let drinks = newResp.data.drinks
      if (drinks){
        let exactMatch = drinks.find(cocktail => cocktail.strDrink.toLowerCase() === name.toLowerCase())
        if (exactMatch) {
          setCocktailData(exactMatch); 
        }
      } else {
        setCocktailData('Cocktail does not exist'); 
      }
    } catch (error){
      console.error(error)
    }finally{
      setLoading(false)
    }
  }


  const handleChipClick = (letter) => {
    setSelectedLetter(letter)
  }

  
  useEffect(() => {
    const getCoctailList = async () => {
      try{
        setLoading(true)
        setCocktailData(null)
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + selectedLetter
        let newResp = await axios.get(url)
        let drinks = newResp.data.drinks
        if (drinks){
          setCocktailListData(drinks)
        } else if (selectedLetter === null){ 
        } else {
          setCocktailListData("There are no cocktails starting with this letter!")
        }
      } catch (error){
        console.error(error)
      }finally{
        setLoading(false)
      }
    }

    getCoctailList()

  }, [selectedLetter])


  return(
    <Stack spacing={2} direction="column" justifyContent="center" alignItems="center"
      sx={{maxWidth: "700px", margin: "auto", marginTop: "5px"}}>

      <h1 style={{color: "blue", margin: "auto"}}>Welcome to Cocktail App</h1>

      <Stack direction="row" spacing={9}>


        <SearchBox name={name} setName={setName} handleClick={getCocktail} loading={loading} />
        
      

        <div style={{width: '200px'}}>

          <img 
            src='https://img.freepik.com/free-vector/cocktail-glass-white-background_1308-112632.jpg'
            style={{ objectFit: 'contain', width: '100%', height: '100%' }} />

        </div>
      </Stack>

      <AlphabetBox onLetterSelected={handleChipClick} loading={loading} />
      

      {cocktailData && <CocktailItem cocktailData={cocktailData} sx={{margin: "auto"}}/>}

      {cocktailListData && <CocktailList cocktailListData={cocktailListData} />}

    </Stack>
  )

}

export default CocktailApp;