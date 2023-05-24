import logo from './logo.svg';
import './App.css';
import MovieCard from './MovieCard/MovieCard';
import { MOVIES } from './data';
import ToDoApp from './todo/ToDoApp/ToDoApp';

function App() {
  // return (
  //   <div>
  //     <MovieCard movie={MOVIES[0]}/>
  //     <MovieCard movie={MOVIES[1]}/>
  //     <MovieCard movie={MOVIES[2]}/>
  //   </div>
  // );

  return(
    <ToDoApp />
  )




}

export default App;
 