import "./App-info.css";

const AppInfo = ({allMovies,favoriteMovies,likestMovies}) => {
    return (
        <div className="app-info">
            <p className="fs-3 text-uppercase">barcha kinolar soni: {allMovies}</p>
            <p className="fs-4 text-uppercase">ko'rilgan kinolar soni: {favoriteMovies}</p>
            <p className="fs-4 text-uppercase">sevimli kinolar soni: {likestMovies}</p>
        </div>
    )
}

export default AppInfo;