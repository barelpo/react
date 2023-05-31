import { Stack } from "@mui/material"

const CocktailList = ({cocktailListData}) => {


      if (typeof cocktailListData === 'string'){
      return(
        <h4>{cocktailListData}</h4>
      )} else{


        return(
          <Stack direction="column">
            {cocktailListData.map((drink, index) => (
              <h4 key={index}>{drink.strDrink}</h4>
            ))}
          </Stack>
        )
      }
}

export default CocktailList;