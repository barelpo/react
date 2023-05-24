import './MovieImg.css'

const MovieImg = ({url}) => {
    
    console.log('Rendering MovieImg', url)

    return(
        <div className='movie-img-div'>
            <img className='movie-img' src={url}></img>
        </div>
    )
}

export default MovieImg;