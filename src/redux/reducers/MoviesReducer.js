const initialState = {
    Data:[]
}

const MoviesReducers =(state = initialState, action)=>{
    switch(action.type){
        case "getMovies" :
        return {
            ...state,
            Data: action.payload
        }
        default:
      return state;
    }
}

export default MoviesReducers