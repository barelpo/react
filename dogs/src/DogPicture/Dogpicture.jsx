const DogPicture = ({url, onImgLoaded, size='480px'}) =>{

  return(
    <img src={url} style={{
        width: size, height: size, 
        objectFit: 'cover',
        borderRadius: '10px'
      }}
      onLoad={onImgLoaded}></img>
  )
}

export default DogPicture;