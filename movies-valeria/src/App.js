import { useState } from 'react';
import './App.css';
import MovieCard from './MovieCard/MovieCard';
import { MOVIES } from './data';
import TodoApp from './todo/TodoApp/TodoApp';

function App() {

  console.log('Rendering App')

  // const items = MOVIES.map((movie) => {
  //   return <MovieCard key={movie.id} movie={movie}/>
  // })

  // return (
  //   <div className='movies'>
  //     {items}
  //   </div>
  // )
  
  return (
    <TodoApp />
  )


}

export default App;
