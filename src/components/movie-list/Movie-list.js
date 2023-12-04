import './movie-list.css'
import MovielistItem from '../movie-list-item/Movie-list-item'

const MovieList = ({data,onDelete,onToggle}) => {
  return (
    <ul className='movie-list'>
      {data.map(item =>(
        <MovielistItem 
        key={item.id} 
        like={item.like} 
        movieTitle={item.title} 
        countViewes={item.countViewes} 
        favorite={item.favorite} 
        onDelete={() =>onDelete(item.id)} 
        onToggle={(e) => onToggle(item.id,e.currentTarget.getAttribute('data-toggle'))}
        />
      ))}
    </ul>
  )
}

export default MovieList
