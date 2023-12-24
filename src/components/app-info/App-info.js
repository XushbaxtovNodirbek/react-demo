import { useContext } from "react";
import "./App-info.css";
import { Context } from "../../context";

const AppInfo = () => {
    const {state} = useContext(Context),
    {data} = state;
    return (
        <div className="app-info">
            <p className="fs-3 text-uppercase">barcha kinolar soni: {data.length}</p>
            <p className="fs-4 text-uppercase">ko'rilgan kinolar soni: {data.filter(item => item.favorite).length}</p>
            <p className="fs-4 text-uppercase">sevimli kinolar soni: {data.filter(item => item.like).length}</p>
        </div>
    )
}

export default AppInfo;