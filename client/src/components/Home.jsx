import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {useEffect} from 'react'
import Getvideogames from "../actions";
import Card from "./Card";
import home from './home.module.css'
import Paginado from "./Paginado";

export default function HomeVideogames () {
 const dispatch = useDispatch() // para no tener que usar mapDispatchToprops
 const videogames = useSelector (state=> state.videogames) // uso hook de mapStateToprops
 const [ActualPage, SetActualPage] = useState (1)
 const [VideogamesPP, SetVideogamesPP] = useState(15)
 const LastVideogame = Math.ceil (ActualPage * VideogamesPP)
 const FirstVideogame  = LastVideogame - VideogamesPP
 const ActualVideogames = videogames.slice (FirstVideogame, LastVideogame)
const indicador = (number) => {
   SetActualPage(number)
}


 useEffect(()=>{                        //voy a usar useEffect para que me muestre cuando el componente se monte, sino en un refresh se me rompe toda la pagina
     dispatch(Getvideogames())       
 }, [])

return (
    <div className={home.back}>
    <div className={home.buts}>
    <NavLink to='/videogame' className={home.buts}> CREATE VIDEOGAME </NavLink>
    <NavLink to='/' className={home.buts}> VOLVER </NavLink>
    </div>
    
    {ActualVideogames && ActualVideogames.map(game => { 
     return (
    <div key={game.name} className={home.container}>
    <Card 
    key={game.name}
    name={game.name} 
    image={game.image} 
    genres={game.genres}/> 
   </div> 
    )})}
    <div>
    <Paginado  VideogamesPP={VideogamesPP} videogames={videogames.length} indicador={indicador} />
    </div>
    </div>
)



}
