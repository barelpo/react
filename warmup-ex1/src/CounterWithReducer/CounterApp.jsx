import { Stack } from "@mui/material"
import CounterComponent from "./CounterComponent"

const CounterApp = () => {
    return(

        <Stack spacing={2} justifyContent="center"
        alignItems="center"> 
            <h2>Counter App</h2>
            <CounterComponent />
        </Stack>

    )
}

export default CounterApp