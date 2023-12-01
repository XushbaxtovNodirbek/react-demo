import "./App.css";

import AppInfo from "../app-info/App-info";
import AppFilter from "../app-filter/App-filter";
import SearchPanel from "../search-panel/Search-panel";
import MovieList from "../movie-list/Movie-list";
import MovieAddForm from "../movies-add-form/Movie-add-form";

const App = () => (
    <div className='App font-monospace'>
        <div className='content'>
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <MovieList/>
            <MovieAddForm/>
        </div>
    </div>
);

export default App;