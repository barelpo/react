const MovieRating = ({rating}) =>{
  
  const textColor = rating <= 5 ? "red" : "black"
  
  return(
    <>
      <p style={{color: textColor}}>Rating: {rating}</p>
      {rating === 10 &&
        <p>WOW</p>
      }
    </>
  )
}

export default MovieRating