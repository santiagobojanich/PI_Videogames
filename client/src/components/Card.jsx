import React from "react";
import homeS from './home.module.css' 
export default function Card ({name,image,genres}){

  return (

    <div className={homeS.card}>
      <img src={image} alt='hola'/>
       <div className={homeS.contenido}>
        <h2>{name}</h2>
      <ul> 
       {genres.map(gen => <li key={gen}> {gen}</li>)} 
      </ul>    
        </div>
      
      
     
    </div> 
    
    )
}