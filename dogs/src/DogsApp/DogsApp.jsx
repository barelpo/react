import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import DogPicture from '../DogPicture/Dogpicture';
import axios from 'axios';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Gallery from '../DogsGallery/Gallery';

const URL = 'https://random.dog/woof.json'

const DogsApp = () =>{

  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const getDog = async () =>{
    setLoading(true)
    try{
      let response = null
      do{
        response = await axios.get(URL)
        console.log(response)
      } while (!(response.data.url.endsWith('jpg') ||
              response.data.url.endsWith('jpeg') ||
              response.data.url.endsWith('png')))
      
        setUrl(response.data.url)
    }catch (error){
      console.error(error)
      setLoading(false)
    }
  }

  return(
    <Stack spacing={2} direction="column"
      sx={{maxWidth: '480px', margin: 'auto', marginTop: '2em'}}>
      
      {loading
      ?
      <LinearProgress />
      :
      <Button variant="contained" onClick={getDog} disabled={loading}>Show me a dog</Button>
      }
      
      {url &&
        <DogPicture url={url} onImgLoaded={()=>setLoading(false)}/>
      }

      <Gallery url={url} loading={loading} onDiscard={()=>setUrl(null)} />


    </Stack>


  )
}

export default DogsApp;