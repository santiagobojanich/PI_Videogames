import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {useEffect} from 'react'
import Getvideogames from "../actions";
import Card from "./Card";
import home from './home.module.css'

export default function HomeVideogames () {
 const dispatch = useDispatch() // para no tener que usar mapDispatchToprops
 let videogames = useSelector (state=> state.videogames) // uso hook de mapStateToprops

 useEffect(()=>{                        //voy a usar useEffect para que me muestre cuando el componente se monte, sino en un refresh se me rompe toda la pagina
     dispatch(Getvideogames())       
 }, [])

return (
    <div className={home.back}>
    <div>
    <NavLink to='/videogame'> CREATE VIDEOGAME </NavLink>
    <NavLink to='/'> VOLVER </NavLink>
    </div>
    
    {videogames && videogames.map(game => { 
     return (
    <div key={game.name} className={home.container}>
    <Card 
    key={game.name}
    name={game.name} 
    image={game.image} 
    genres={game.genres}/> 
   </div> 
    )})}
    
    </div>
)



}
