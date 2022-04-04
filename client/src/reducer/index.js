const initialState = {
    videogames : []
}


function rootReducer(state=initialState, action) {

    switch(action.type){
        case'get_videogames': 
        return {
            ...state,
            videogames: action.payload
        }
        default: return state
    }
}

export default rootReducer