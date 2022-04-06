
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