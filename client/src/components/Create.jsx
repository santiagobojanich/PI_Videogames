import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postVideogame, getGenres } from "../actions";

export default function Create() {
  const dispatch = useDispatch();
  const [input, setinput] = useState({
    name: "",
    description: "",
    released: "",
    rating: 0,
    plataforms: [],
    image: "",
    genres: [],
  });
  const Genres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  function handleInput(e) {
    setinput({
     ...input,
    [e.target.name] : e.target.value
    });
  }

  function handleSelect (e) {
      setinput ({
          ...input,
          genres: [...input.genres, e.target.value]
      })
  }
  function handlePlat (e){
    setinput({
      ...input,
      plataforms: [...input.plataforms, e.target.value]
    })
  }
  function handleSubmit (e){
      e.preventDefault()
      console.log(input)
      dispatch(postVideogame(input))
      setinput({name: "",
      description: "",
      released: "",
      rating: 0,
      plataforms: "",
      image: "",
      genres: [],})
     return alert('Created!')
      
    }
    
    
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={input.name}
              name="name"
              placeholder="Insert name..."
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div>
            <label>
            Description:
            </label>
            <input
              value={input.description}
              type="text"
              name="description"
              placeholder="Insert description..."
              onChange={(e) => handleInput(e)}
           />
          </div>
          <div>
            <label>
             Released:
            </label>
            <input
              value={input.released}
              type="text"
              name="released"
              placeholder="Insert release date"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div>
           <label>
            Rating:
            </label> 
            <input
              value={input.rating}
              type="number"
              name="rating"
              step="0.01"
              min="0"
              max="5"
              placeholder="Insert rating..."
              onChange={(e) => handleInput(e)}
            />
          </div>
         
          <div>
            <label>
            Image:
            </label>
            <input
              value={input.image}
              name="image"
              type="text"
              placeholder="Url image..."
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div>
           <label>
            Platforms:
            </label> 
           <select onChange={(e) => handlePlat(e)}>
            <option value='PC'> PC </option>
            <option value='Linux'> Linux </option>
            <option value='macOS'> macOS </option>
            <option value='Xbox Series X/S'> Xbox Series X/S </option>
            <option value='Xbox One'> Xbox One </option>
            <option value='Xbox 3'> Xbox 3 </option>
            <option value='PS5'> PS5  </option>
            <option value='PS4'> PS4 </option>
            <option value='PS3'> PS3 </option>
            <option value='Nintendo'> Nintendo </option>
           </select>
          </div>
          <div>
             <label>
              Genres:
             </label>
            <select onChange={(e) => handleSelect(e)}>         
            {Genres && Genres.map(gen => {
               return(
                   <option key={gen.name} value={gen.name}> {gen.name} </option>
               )
           })}    
            </select>
          </div>
        </div>
        <div>
        <ul> <li> {input.genres && input.genres.map(gen => gen + ' ,')} </li> </ul>
        </div>
        <div>
          <button type="submit"> Create </button>
        </div>
      </form>
    </div>
  );
}
