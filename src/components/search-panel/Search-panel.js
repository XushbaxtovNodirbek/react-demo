import { Context } from '../../context'
import './Search-panel.css'

import {  useContext, useState } from 'react'

// class SearchPanel1 extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       term: ''
//     }
//   }

//   searchHandler= (e) =>{
//     e.preventDefault()
//     this.setState({term: e.target.value})
//     this.props.updateTerm(e.target.value)
//   }
  
//   render(){
//     return (
//       <input
//         onChange={this.searchHandler}
//         type="text"
//         className="form-control search-input"
//         placeholder="Kinolarni qidirish"
//         value={this.state.term}
//       />
//     )
//   }
// }

const SearchPanel = () => {
  const [term,setTerm] = useState('')
  const {dispatch} = useContext(Context)

  const searchHandler = (e) => {
    e.preventDefault()
    setTerm(e.target.value)
    dispatch({type:"ON_TERM",payload:e.target.value})
  }

  return (
    <input
      onChange={searchHandler}
      type="text"
      className="form-control search-input"
      placeholder="Kinolarni qidirish"
      value={term}
    />
  )

}

export default SearchPanel
