import "./App.css";
import { Component } from "react";
import AppInfo from "../app-info/App-info";
import AppFilter from "../app-filter/App-filter";
import SearchPanel from "../search-panel/Search-panel";
import MovieList from "../movie-list/Movie-list";
import MovieAddForm from "../movies-add-form/Movie-add-form";
import {v4 as uuidv4} from 'uuid' // uuid paketini import qilamiz


class App extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[
                {id: 1, title: 'Rick and Jany', countViewes: 89,favorite: false, like: false},
                {id: 2, title: 'Wednesday', countViewes: 777,favorite: false, like: false},
                {id: 3, title: 'Sweet Home', countViewes: 99,favorite: false, like: false},
            ],
            term: ''
        }
    }

    addMovie = (item) => {
        // e.preventDefault();
        // this.setState(({data}) => {
        //     const newArr = [...data,{...item,id:uuidv4()}]
        //     console.log(newArr);
        // })
        const newItem = {...item,id:uuidv4(),favorite:false,like:false}
        this.setState(({data}) => ({data:[...data,newItem]}))
    }

    // onLike = (id) => {
    //     console.log(id);
    //     this.setState(({data}) => ({data : data.map(item =>{
    //         if(item.id === id){
    //             return {...item,like:!item.like} //  bu ishlaydi nima uchun? buni bilmayman
    //             // item.like = !item.like   bu ishlamaydi nima uchun? buni bilmayman
    //         }
    //         return item
    //     })}))
    // }
    // onFavorite = (id) => {
    //     this.setState(({data}) => ({data : data.map(item =>{
    //         if(item.id === id){
    //             return {...item,favorite:!item.favorite} //  bu ishlaydi nima uchun? buni bilmayman
    //         }
    //         return item
    //     })}))
    // }
    // TOGGLE FUNCTION
    onToggle = (id,prop) => {
        this.setState(({data}) => ({data : data.map(item =>{
            if(item.id === id){
                return {...item,[prop]:!item[prop]} //  bu ishlaydi nima uchun? buni bilmayman
            }
            return item
        })}))
    }
    // DELETE FUNCTION
    onDelete = (id) => {
        this.setState(({data}) => ({data:data.filter(item => item.id !== id)}))
    }

    searchMovies = ( arr, term ) => {
        if(term.length === 0){
            return arr
        }
        return arr.filter(item => item.title.toLowerCase().indexOf(term.toLowerCase())> -1)
    }

    updateTerm = (term) => this.setState({term})
    
    render(){
        const {data, term} = this.state
        const visibleItems = this.searchMovies(data,term)
        return (
            <div className='App font-monospace'>
                <div className='content'>
                    <AppInfo 
                      allMovies={this.state.data.length}
                      favoriteMovies={this.state.data.filter(item => item.favorite).length}
                      likestMovies={this.state.data.filter(item => item.like).length}
                    />
                    <div className="search-panel">
                        <SearchPanel updateTerm={this.updateTerm}/>
                        <AppFilter/>
                    </div>
                    <MovieList 
                    onDelete={this.onDelete}
                    onToggle={this.onToggle}
                    data={visibleItems}/>
                    <MovieAddForm addMovie = {this.addMovie}/>
                </div>
            </div>
            );
    }
}

export default App;