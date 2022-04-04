
import axios from 'axios'


export default function Getvideogames () {
  return async function (dispatch) {
    let response = await axios.get ('http://localhost:3001/videogames')
    return dispatch({type:'get_videogames', payload: response.data})
 
}  
 
}