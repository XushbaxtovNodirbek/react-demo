import { useContext } from 'react';
import './Movie-list-item.css'
import { Context } from '../../context';

const MovielistItem = (props) => {

    const {movieTitle, countViewes , favorite , like ,id} =  props;

    const {dispatch} = useContext(Context)
    
    const onDelete = () => dispatch({type:"ON_DELETE",payload:id}),
    onToggle = (e) => dispatch({type:"ON_TOGLE",payload:{id,prop:e.currentTarget.getAttribute('data-toggle')}})

    return (
      <li className={`list-group-item d-flex justify-contenet-between ${favorite && 'favorite'} ${like && 'like'}`}>
          <span data-toggle='like' onClick={onToggle} className='list-group-item-label'>{movieTitle}</span>
          <input type='number' className='.list-group-item-input' defaultValue={countViewes} />
          <div className='d-flex justify-contenet-center align-items-center'>
              <button data-toggle='favorite' onClick={onToggle} type='button' className='btn-cookie btn-sm'>
                  <i className='fas fa-cookie'></i>
              </button>
              <button type='button' className='btn-trash btn-sm'>
                  <i className='fas fa-trash' onClick={onDelete}></i>
              </button>
              <i className='fas fa-star'></i>
          </div>
      </li>
    )
}

export default MovielistItem;