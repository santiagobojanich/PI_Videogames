
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from 'react'
import { getvideogame } from "../actions";
  

export default  function Detail() {
    const videogame = useSelector(state => state.videogame)
    const dispatch = useDispatch()
    let { id } = useParams()
  

  useEffect(() => {
        dispatch(getvideogame(id))
    }, [dispatch, id,videogame])

    
    return (
       <div>
    
       <div>
           <NavLink to='/home'> BACK </NavLink>
       </div>

       <div>
            <h1> {videogame.name} </h1>
            <p> {videogame.description} </p>
            <span>{videogame.rating} </span>
            <ul> {videogame.platforms.map(plat => {
                return (
                    <li key={plat}> {plat} </li>
                )
            })}</ul>
            <p>Genres: || {videogame.genres.map(gen=> `${gen} || ` )}</p>
        </div>
      </div>
    )
}