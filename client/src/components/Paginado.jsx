import React from 'react'

export default function Paginado ({VideogamesPP,videogames,indicador}) {
    const pages = []
   for  (let i=1; i<=Math.ceil(videogames/VideogamesPP); i++) {
       pages.push(i)
   }
  
   return (
       <nav>
           <ul>
           {pages && pages.map(page => (
                   <button key={page}onClick={() => indicador(page)}> {page} </button>
           ))}
            </ul>
       </nav>
   )

}
