import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import NumFact from '../NumFact/NumFact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Box, Divider, LinearProgress } from '@mui/material';
import NumList from '../NumList/NumList';



const NumApp = () =>{

  const [currFact, setCurrFact] = useState('')

  const [loading, setLoading] = useState(false)

  const [facts, setFacts] = useState({})

  const[selectedId, setSelectedId] = useState(null)
  
  const getFact = async () =>{
    try{
      setLoading(true)
      let response = await axios.get("http://numbersapi.com/random/math")
      console.log(response)
      setCurrFact(response.data)
    } catch (error){
      console.error(error)
    } finally{
      setLoading(false)
    }
  }

  const saveHandler = () =>{
    let currNum = parseInt(currFact.split(" ")[0])
    const fact = {id: currNum, data: currFact}
    setFacts({...facts, [currNum]: fact})
  }

  const handleDelete = (id) =>{
    const updatedFacts = {...facts}
    delete updatedFacts[id]
    setFacts(updatedFacts)
    if (selectedId === id){
      setSelectedId(null)
    }
  }
  
  return(
    <Stack spacing={2} direction="column" 
      sx={{maxWidth: "550px", margin: "auto", marginTop: "5px"}}>
      
      <h1 style={{color: "blue", margin: "auto"}}>Welcome to Numbers Facts</h1>

      {loading

      ?

      <LinearProgress />

      :

      <Button variant='contained' onClick={getFact}>SHOW ME AN INTERESTING FACT!</Button>
      }
      
      {currFact &&
      <Stack spacing={2} direction="row" sx={{marginTop: "10px"}}>

        <NumFact currFact={currFact}/>

        <Button onClick={saveHandler}>
          <FontAwesomeIcon icon={faThumbsUp} />
        </Button>

      </Stack>
      }



      {Object.keys(facts).length !== 0 && (
      <Stack direction="column" spacing={3}>
        <Divider />
        <h3 style={{color: "black"}}>Numbers you liked:</h3>
        <NumList facts={facts} handleDelete={handleDelete} onNumSelected={(id)=>{setSelectedId(id)}} selectedId={selectedId}/>
      </Stack>
      )}
      
      {selectedId &&
        <NumFact currFact={facts[selectedId].data} />
      }
      

    </Stack>
  )

}

export default NumApp;