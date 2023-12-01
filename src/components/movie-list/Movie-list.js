import './movie-list.css'
import MovielistItem from '../movie-list-item/Movie-list-item'

const MovieList = () => {
  return (
    <div className='movie-list'>
      <MovielistItem/>
      <MovielistItem/>
      <MovielistItem/>
      <MovielistItem/>
    </div>
  )
}

export default MovieList
