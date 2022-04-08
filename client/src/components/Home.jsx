import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from 'react'
import { Getvideogames,filterByLetter, createdOrApi, getGenres, filterByGenre } from "../actions";
import Card from "./Card";
import home from './home.module.css'
import Paginado from "./Paginado";

export default function HomeVideogames() {
    const dispatch = useDispatch() // para no tener que usar mapDispatchToprops
    const videogames = useSelector(state => state.videogames) // uso hook de mapStateToprops
    const genres = useSelector(state => state.genres)
    //--------------------------------------------------------------------------------------------- paginado
    const [ActualPage, SetActualPage] = useState(1)
    const [VideogamesPP, SetVideogamesPP] = useState(15)
    const [order, setOrder] = useState('')
    const LastVideogame = Math.ceil(ActualPage * VideogamesPP)
    const FirstVideogame = LastVideogame - VideogamesPP
    const ActualVideogames = videogames.slice(FirstVideogame, LastVideogame)
    const indicador = (number) => {
        SetActualPage(number)
    }
    //-------------------------------------------------------------------------------------------------

    useEffect(() => {                        //voy a usar useEffect para que me muestre cuando el componente se monte, sino en un refresh se me rompe toda la pagina
        dispatch(Getvideogames())
        dispatch(getGenres())
    },[dispatch])

    
    
    function handleFilterByLeter(e){
      dispatch(filterByLetter(e.target.value))
      setOrder('order' + e.target.value)
    }   
    
    function handleFilterByOrigin(e){
        dispatch(createdOrApi(e.target.value))
        setOrder('order' + e.target.value)
    }
    function handleFilterByGenre(e) {
        dispatch(filterByGenre(e.target.value))
        setOrder('order' + e.target.value)
    }
    
    
    return (
        <div className={home.back}>
            <div className={home.buts}>
               
                <NavLink to='/videogame' className={home.buts}> CREATE VIDEOGAME </NavLink>
                <NavLink to='/' className={home.buts}> VOLVER </NavLink>
            </div>
            <div>
           
           <select onChange={(e) => handleFilterByLeter(e)}>
               <optgroup label="Alfabetic Order">
               <option value='A-Z'> A-Z </option>
               <option value='Z-A'> Z-A </option>
               </optgroup>
              <optgroup label="Rating Order">
               <option value='Best'> Best </option>
               <option value='Worst'> Worst </option>
              </optgroup>
           </select>
           
           <select onChange={(e) => handleFilterByOrigin(e)}>   
               <option value='Created'> Created </option>
               <option value='Api'> API </option>
           </select>
          
          <select onChange={(e) => handleFilterByGenre(e)}> 
              {genres && genres.map(gen =>{
                  return (
                      <option value={gen.name}> {gen.name} </option>
                  )
              })}
          </select>
            
    
            
            </div>


            <div>
                <Paginado VideogamesPP={VideogamesPP} videogames={videogames.length} indicador={indicador} />
            </div>

            {ActualVideogames && ActualVideogames.map(game => {
                return (
                    <div key={game.name} className={home.container}>
                        <Card
                            id={game.id}
                            key={game.name}
                            name={game.name}
                            image={game.image}
                            genres={game.genres} />
                    </div>
                )
            })}

        </div>
    )



}
