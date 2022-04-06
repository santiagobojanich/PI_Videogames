const initialState = {
    videogames : [],
    videogame : {}
}
 

function rootReducer(state=initialState, action) {

    switch(action.type){
        case'get_videogames': 
        return {
            ...state,
            videogames: action.payload
        }
        case 'get_videogame': 
        return {
            ...state,
            videogame: action.payload
        }
        default: return state
    }
}

export default rootReducer