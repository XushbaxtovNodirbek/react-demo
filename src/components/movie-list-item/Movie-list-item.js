import './Movie-list-item.css'

const MovielistItem = () => {
  return (
    <li className='list-group-item d-flex justify-contenet-between'>
        <span className='list-group-item-label'>Rick and Jany</span>
        <input type='number' className='.list-group-item-input' defaultValue='979' />
        <div className='d-flex justify-contenet-center align-items-center'>
            <button type='button' className='btn-cookie btn-sm'>
                <i className='fas fa-cookie'></i>
            </button>
            <button type='button' className='btn-trash btn-sm'>
                <i className='fas fa-trash'></i>
            </button>
            <i className='fas fa-star'></i>
        </div>
    </li>
  )
}

export default MovielistItem;