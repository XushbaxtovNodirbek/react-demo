import './Search-panel.css'

import { Component } from 'react'

class SearchPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }
  searchHandler= (e) =>{
    e.preventDefault()
    this.setState({term: e.target.value})
    this.props.updateTerm(e.target.value)
  }
  render(){
    return (
      <input
        onChange={this.searchHandler}
        type="text"
        className="form-control search-input"
        placeholder="Kinolarni qidirish"
        value={this.state.term}
      />
    )
  }
}

export default SearchPanel
