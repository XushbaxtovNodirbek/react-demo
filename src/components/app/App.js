import "./App.css";

import AppInfo from "../app-info/App-info";
import AppFilter from "../app-filter/App-filter";
import SearchPanel from "../search-panel/Search-panel";

const App = () => (
    <div className='App'>
        <div className='content'>
            <AppInfo/>
            <div>
                <SearchPanel/>
                <AppFilter/>
            </div>
        </div>
    </div>
);

export default App;