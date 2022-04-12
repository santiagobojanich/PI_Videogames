

const initialState = {
    videogames : [],
    videogame : {},
    backup: [],
    genres: []
 }
 

function rootReducer(state=initialState, action) {
  
    switch(action.type){
        case'get_videogames': 
        return {
            ...state,
            videogames: action.payload,
            backup: action.payload,
        }
        case 'get_videogame': 
        return {
            ...state,
            videogame: action.payload
        }
        case 'GET_GENRES':
         return {
             ...state,
             genres: action.payload
         }    
    
        case 'filter_by_letter' : 
        const vidBackup = state.backup
       const ordered = action.payload === 'ALL' ? vidBackup && vidBackup
       : action.payload === 'A-Z' ? vidBackup && vidBackup.sort(function (a,b) {
           if (a.name.toLowerCase() > b.name.toLowerCase()) {
               return 1
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1
            }
            return 0    
        }) : action.payload === 'Z-A' ? vidBackup  &&  vidBackup.sort(function (a,b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1 
            }
            return 0    
        }) : action.payload === 'Best' ? vidBackup && vidBackup.sort(function (a,b) {
            if (a.rating > b.rating) {
                return -1 
            }
            if (a.rating < b.rating) {
                return 1
            }
            return 0 
        }):  vidBackup  &&  vidBackup.sort(function (a,b) {
            if (a.rating > b.rating) {
                return 1
            }
            if (a.rating < b.rating) {
                return -1 
            }
            return 0    
        }) 
        
        return {
            ...state,
            videogames: ordered,
        }
        case 'CREATED_OR_API': 
        const Backup = state.backup 
        const result = action.payload ==='Created'? Backup && Backup.filter(game => game.id >= 800000) : 
        Backup && Backup.filter (game => game.id < 800000) 
        return {
            ...state, 
            videogames: result, 
        }
        case 'FILTER_BY_GENRE': 
        const backGenre = state.backup
        const resultGenre = backGenre && backGenre.filter (gen => gen.genres.includes(action.payload)) 
        return {
            ...state,
            videogames: resultGenre, 
        }
        case 'SEARCH_BY_NAME':
          return {
              ...state,
              videogames: action.payload
          }
        
        case 'POST_VIDEOGAME':
            return {
                ...state
            }
        default: return state
    }
}



export default rootReducer