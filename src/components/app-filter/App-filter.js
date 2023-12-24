import { useContext } from 'react';
import './App-filter.css';
import { Context } from '../../context';

const AppFilter = () => {
    const {state,dispatch} = useContext(Context)
    const updateFilter = (name) => {
        dispatch({type:"ON_FILTER",payload:name})
    }

    return (<div className='btn-group'>
        {btns.map(btn => 
            <button key={btn.name} onClick={()=>updateFilter(btn.name)} className={`${(btn.name === state.filter?'btn btn-dark':'btn btn-outline-dark')}`} type='button'>{btn.label}</button>
        )}
        {/* <button className='btn btn-outline-dark' type='button'>Sevimlilar</button>
        <button className='btn btn-outline-dark' type='button'>Eng ko'p ko'rilgan</button> */}
    </div>)
}

const btns = [
    {name:'all',label:'Barchasi'},
    {name:'favorite',label:'Sevimlilar'},
    {name:'popular',label:'Eng ko\'p ko\'rilgan'}
]

export default AppFilter;