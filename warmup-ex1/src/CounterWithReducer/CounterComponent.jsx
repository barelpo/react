import { useReducer, useState } from "react"
import CounterButton from "./CounterButton"
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { CounterReducer } from "./CounterReducer";


const CounterComponent = () => {
    const [counter, dispatch] = useReducer(CounterReducer, 0)

    return(
        <Stack direction={'column'} spacing={3}>
            <Stack direction={'row'}>
                <CounterButton clickHandler={() => dispatch({type: 'reduceCounter'})} plus={false}/>
                <p>{counter}</p>
                <CounterButton clickHandler={() => dispatch({type: 'increaseCounter'})} />
            </Stack>
            <Button color="secondary" onClick={() => dispatch({type: 'resetCounter'})}>RESET</Button>
        </Stack>
        
    )
}

export default CounterComponent