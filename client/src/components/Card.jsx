import React from "react";
import { NavLink, useParams } from "react-router-dom";
import homeS from './home.module.css' 

export default function Card ({id,name,image,genres}){

  return (

    <div className={homeS.card}>
      <img src={image} alt='hola'/>
       <div className={homeS.contenido}>
        <NavLink className={homeS.name} to={`/videogame/${id}`}>{name}</NavLink>
      <ul> 
       {genres.map(gen => <li key={gen}> {gen}</li>)} 
      </ul>    
        </div>
      
      
     
    </div> 
    
    )
}