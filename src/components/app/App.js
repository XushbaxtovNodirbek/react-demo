import "./App.css";

import AppInfo from "../app-info/App-info";
import AppFilter from "../app-filter/App-filter";
import SearchPanel from "../search-panel/Search-panel";
import MovieList from "../movie-list/Movie-list";
import MovieAddForm from "../movies-add-form/Movie-add-form";

const App = () => {
    const data =[
        {id: 1, title: 'Rick and Jany', countViewes: 89,favorite: false},
        {id: 2, title: 'Wednesday', countViewes: 777,favorite: true},
        {id: 3, title: 'Sweet Home', countViewes: 99,favorite: false},
    ]
    return (
    <div className='App font-monospace'>
        <div className='content'>
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <MovieList data={data}/>
            <MovieAddForm/>
        </div>
    </div>
    );
}

export default App;