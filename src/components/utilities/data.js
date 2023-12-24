const searchMovies = ( arr, term ) => {
    if(term.length === 0){
        return arr
    }
    return arr.filter(item => item.title.toLowerCase().indexOf(term.toLowerCase())> -1)
}

const filterMovies = (arr,filter) => {
    switch(filter){
        case 'favorite': {return arr.filter(item => item.like)}
        case 'popular': {return arr.sort((a,b) => b.countViewes - a.countViewes)}
        default: return arr
    }
}

export {searchMovies,filterMovies}