import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getvideogame } from "../actions";
import detail from "./detail.module.css";
import NavDetail from "./NavDetail";
export default function Detail() {
  const videogame = useSelector((state) => state.videogame);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getvideogame(id));
  }, [dispatch, id]);
  if(!videogame) {
    return (
      <p> 'Game not Found'</p>
    )
  }
 
  return (
    <div className={detail.background}>
      
       <div>
        <NavDetail/>      
        </div> 

      <div className={detail.back}>
        <div>
        
        <h1 className={detail.data}> 
        {videogame.name} 
        </h1>
        
        <p className={detail.text}> 
        {videogame.description} 
        </p>
        
        <span className={detail.rating}>Rating: 
        {videogame.rating} 
        </span>
        
        <ul className={detail.list}>
          Platforms
           
          { videogame.platforms &&
            videogame.platforms.map((plat) => {
                return <li key={plat}> {plat} </li>;
            })}   
        </ul>
        <p className={detail.genres}>
          Genres: {"  "}
          {videogame.genres && videogame.genres.map((gen) => ` ${gen} ||`)}
        </p>
        </div>
      </div> 
    </div>
  );
}
