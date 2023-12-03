import './Movie-list-item.css'
import {Component} from 'react';

class MovielistItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      favorite: false,
      like: false
    }
  }
  onCookie = () => {
    this.setState(({favorite}) => ({
      favorite: !favorite
    })) 
  }
  onLike = () => {
    this.setState(({like}) => ({
      like: !like
    }))
  }

  render(){
    const {movieTitle, countViewes } = this.props;
    const {favorite,like} = this.state;

    return (
      <li className={`list-group-item d-flex justify-contenet-between ${favorite && 'favorite'} ${like && 'like'}`}>
          <span onClick={this.onLike} className='list-group-item-label'>{movieTitle}</span>
          <input type='number' className='.list-group-item-input' defaultValue={countViewes} />
          <div className='d-flex justify-contenet-center align-items-center'>
              <button onClick={this.onCookie} type='button' className='btn-cookie btn-sm'>
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
}

export default MovielistItem;