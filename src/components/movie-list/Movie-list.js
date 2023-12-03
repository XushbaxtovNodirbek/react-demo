import './movie-list.css'
import MovielistItem from '../movie-list-item/Movie-list-item'

const MovieList = ({data}) => {
  return (
    <ul className='movie-list'>
      {data.map(item =>(
        <MovielistItem key={item.id} movieTitle={item.title} countViewes={item.countViewes} favorite={item.favorite}/>
      ))}
    </ul>
  )
}

export default MovieList
