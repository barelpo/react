import "./MovieImg.css"
const MovieImg = ({url}) =>{
  return(
    <div className="img">
      <img src={url}></img>
    </div>
  )
}

export default MovieImg