import './movie-list.css'
import MovielistItem from '../movie-list-item/Movie-list-item'
import { filterMovies,searchMovies } from '../utilities/data'
import { useContext } from 'react'
import { Context } from '../../context'

const MovieList = () => {
  const {state} =useContext(Context)
  const data = filterMovies(searchMovies(state.data,state.term),state.filter)
  return (
    <ul className='movie-list'>
      {data.map(item =>(
        <MovielistItem 
        key={item.id} 
        id={item.id} 
        like={item.like} 
        movieTitle={item.title} 
        countViewes={item.countViewes} 
        favorite={item.favorite} 
        />
      ))}
    </ul>
  )
}

export default MovieList