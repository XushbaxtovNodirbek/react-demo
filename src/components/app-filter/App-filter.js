import './App-filter.css';

const AppFilter = (props) => {

    const updateFilter = (name) => {
        props.updateFilter(name)
    }

    return (<div className='btn-group'>
        {btns.map(btn => 
            <button key={btn.name} onClick={()=>updateFilter(btn.name)} className={`${(btn.name === props.filter?'btn btn-dark':'btn btn-outline-dark')}`} type='button'>{btn.label}</button>
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