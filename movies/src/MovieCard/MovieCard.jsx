import { useState } from 'react';
import MovieImg from '../MovieImg/MovieImg';
import MovieRating from '../MovieRating/MovieRating';
import './MovieCard.css';

const MovieCard = ({movie}) => {

  const [likes, setLikes] = useState(movie.likes)

  return(
    <div className="movie-card">
      <MovieImg url={movie.url}/>
      <div className="movie-detail">
        <p>{movie.name}</p>
        <MovieRating rating={movie.rating}/>
      </div>
      <div>
        <button onClick={() => setLikes((prev) => prev + 1)}>Like</button>
        {likes>0 && 
          <p>{likes} likes</p>
        }
      </div>

    </div>
  )
}

export default MovieCard;