import { createContext, useReducer } from "react";
import {v4 as uuidv4} from 'uuid'

export const Context = createContext();

const initialState = {
    data: [
            {id: 1, title: 'Rick and Jany', countViewes: 89,favorite: false, like: false},
            {id: 2, title: 'Wednesday', countViewes: 777,favorite: false, like: false},
            {id: 3, title: 'Sweet Home', countViewes: 99,favorite: false, like: false},
          ],
    term: "",
    filter: "all",
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ON_DELETE":
            const newData = state.data.filter((item) => item.id !== payload);
            return { ...state, data: newData };

        case "ON_FILTER":
            return {...state,filter:payload}

        case 'ADD_MOVIE':
            const newItem = {...payload,id:uuidv4(),favorite:false,like:false}
            return {...state,data:[...state.data,newItem]}

        case 'ON_TERM':
            return {...state,term:payload}

        case 'ON_TOGLE':
            const {id,prop} = payload
            const newArr = state.data.map(item =>{
                if(item.id === id){
                    return {...item,[prop]:!item[prop]}
                }
                return item
            })
            return {...state,data:newArr}

        case 'ON_DELETE':
            return {...state,data:state.data.filter(item => item.id !== payload)}

        default:return state;
    }
};

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
