import { useState } from 'react';
import MovieImg from '../MovieImg/MovieImg';
import MovieRating from '../MovieRating/MovieRating';
import './MovieCard.css'

const MovieCard = ({movie}) => {

    const [likes, setLikes] = useState(0)
    console.log('Rendering MovieCard', movie.name)

    return(
        <div className="movie-card">
            <MovieImg url={movie.url}/>
            <div className='movie-details'>
                <p>{movie.name}</p>
                <MovieRating rating={movie.rating}/>
                {likes > 0 && 
                    <p>Likes: {likes}</p>
                }
            </div>
            <div>
                <button className='like-btn' onClick={() => setLikes((prev) => prev+1)}>
                    Like
                </button>
            </div>
        </div>
    )
}

export default MovieCard;