import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { Getvideogames,filterByLetter, createdOrApi, getGenres, filterByGenre } from "../actions";
import Card from "./Card";
import home from './home.module.css'
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import Loadscreen from "./Loadscreen";
import Nav from "./nav";


export default function HomeVideogames() {
    const dispatch = useDispatch() // para no tener que usar mapDispatchToprops
    const videogames = useSelector(state => state.videogames) // uso hook de mapStateToprops
    const genres = useSelector(state => state.genres)
    const [loading, setloading] = useState(true)
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
        dispatch(Getvideogames()).then(()=> setloading(false))
        dispatch(getGenres())
    },[dispatch])

    
    
    function handleFilterByLeter(e){
      dispatch(filterByLetter(e.target.value))
      setOrder('order' + e.target.value)
      SetActualPage(1)
    }   
    
    function handleFilterByOrigin(e){
        dispatch(createdOrApi(e.target.value))
        setOrder('order' + e.target.value)
        SetActualPage(1)
    }
    function handleFilterByGenre(e) {
        dispatch(filterByGenre(e.target.value))
        setOrder('order' + e.target.value)
        SetActualPage(1)
    }
    
    if(loading) return <Loadscreen/>
    return (
        <div className={home.back}>
             <div>
               <Nav/>
            </div>          
           
            <div>
                <SearchBar/>
            </div>
            
            
           <div className={home.filters}>
           <select className={home.filterS} onChange={(e) => handleFilterByLeter(e)}>
               <option value='ALL'>Order By</option>
               <optgroup label="Alfabetic Order">
               <option value='A-Z'> A-Z </option>
               <option value='Z-A'> Z-A </option>
               </optgroup>
              <optgroup label="Rating Order">
               <option value='Best'> Best </option>
               <option value='Worst'> Worst </option>
              </optgroup>
           </select>
           
           <select className={home.filterS} onChange={(e) => handleFilterByOrigin(e)}>   
               <option>Origin</option>
               <option value='Created'> Created </option>
               <option value='Api'> API </option>
           </select>
          
          <select className={home.filterS} onChange={(e) => handleFilterByGenre(e)}> 
              <option> Genres </option>
              {genres && genres.map(gen =>{
                  return (
                      <option key={gen.name} value={gen.name}> {gen.name} </option>
                  )
              })}
          </select>
            
            </div>


            <div className={home.pagPosition}>
                <Paginado VideogamesPP={VideogamesPP} videogames={videogames.length} indicador={indicador} />
            </div>
            <div>
            <h1 className={home.pageNumb}> PAGE: {ActualPage} </h1>
            </div> 
            
            <div className={home.container}>
            { ActualVideogames.length === 0 ? <div className={home.not}> We don't have games of this type. ADD ONE!  </div> :
             ActualVideogames.map(game => {
                 return (
                     <div key={game.name}>
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

        </div>
    )



}
