
import axios from 'axios'



export function Getvideogames() {
  return async function (dispatch) {
    let response = await axios.get('http://localhost:3001/videogames')
    return dispatch({ type: 'get_videogames', payload: response.data })

  }

}

export function getvideogame(id) {
return async function (dispatch) {
   let response = await axios.get(`http://localhost:3001/videogame/${id}`)
   return dispatch ({type: 'get_videogame', payload: response.data})  
}
}


export function filterByLetter (payload) {
 return ({type:'filter_by_letter', payload})
}

export function createdOrApi (payload) {
  return ({type: 'CREATED_OR_API', payload})
}

export function getGenres () {
  return async function (dispatch) {
    let response = await axios.get('http://localhost:3001/genres')
    return dispatch({type:'GET_GENRES', payload: response.data})
  }
}

export function filterByGenre (payload) {
  return ({type:'FILTER_BY_GENRE', payload})
}