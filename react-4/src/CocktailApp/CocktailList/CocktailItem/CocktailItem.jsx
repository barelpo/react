import { Stack } from "@mui/material";


const CocktailItem = ({cocktailData}) => {

  if (typeof cocktailData === 'string'){
    return(
      <h4>Cocktail does not exist in the system</h4>
    )
  } else{

    const ingredients = Object.keys(cocktailData)
      .filter(key => key.startsWith('strIngredient') && cocktailData[key] !== null)
      .map(key => cocktailData[key])

    const measures = Object.keys(cocktailData)
      .filter(key => key.startsWith('strMeasure') && cocktailData[key] !== null)
      .map(key => cocktailData[key])


    return(
      <Stack spacing={2} direction="column" 
        sx={{maxWidth: "600px", margin: "auto", marginTop: "5px"}}>
          

          <Stack spacing={20} direction="row">
            <Stack spacing={2} direction="column">
              <h3 style={{ borderBottom: "1px solid black" }}>{cocktailData.strDrink}</h3>
            </Stack>
            <div style={{width: '150px'}}>
              <img src={cocktailData.strDrinkThumb}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}/>
            </div>
          </Stack>

          <h3 style={{ borderBottom: "1px solid black" }}>Ingridients:</h3>
          

          <Stack spacing={6} direction="row" sx={{margin: "auto"}} justifyContent="center">
            <Stack direction="column">
              {ingredients.map((ingredient, index) => (
                <h4 key={index}>{ingredient}</h4>
              ))}
            </Stack>
            <Stack direction="column">
            {measures.map((measure, index) => (
                <h4 key={index}>{measure}</h4>
              ))}
            </Stack>
          </Stack>

          <h4>Instructions: {cocktailData.strInstructions}</h4>


      </Stack>
    )
  }}



export default CocktailItem;
