import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postVideogame, getGenres, Getvideogames } from "../actions";
import create from './create.module.css'
import NavDetail from "./NavDetail";

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
  const [Errors, setErrors] = useState({})
  const videogames = useSelector (state => state.videogames)
 
  function validate(input) {
    let errors={}
    if(input.name[0] === ' '){
    errors.name ='Should not have space behind '
  }
  else  if (!input.name){
    errors.name= 'Missing name'
  } else if(videogames.filter(game => game.name === input.name).length > 0 ){
   errors.name = 'Name already exist'
  }
  if(input.description[0] === ' '){
    errors.description ='Should not have space behind '
  } else if(!input.description) {
    errors.description = 'Missing description'
  }
  
  if(!input.released){
    errors.released = 'Missing Date'
  }
  else if(!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(input.released)){
   errors.released = 'Wrong format. Example: XX-XX-XXXX'
  }
  
  if(input.rating < 0 || input.rating > 5) {
    errors.rating = 'Rating must be between 0 and 5'
  }
  return errors   
}

  useEffect(() => {
    dispatch(Getvideogames())
    dispatch(getGenres());
  }, []);

  function handleInput(e) {
    setinput({
     ...input,
    [e.target.name] : e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name] : e.target.value}))
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
    <div className={create.background}>
     <div>
       <NavDetail />
     </div>
     
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={create.back}>
          <div>
            <label>Name:</label>
            <input
              className={create.inputName}
              type="text"
              value={input.name}
              name="name"
              placeholder="Insert name..."
              onChange={(e) => handleInput(e)}
            />
            {Errors.name && ( <p> {Errors.name} </p>)}
          </div>
          <div>
            <label>
            Description:
            </label>
            <input
              className={create.inputDescription}
              value={input.description}
              type="text"
              name="description"
              placeholder="Insert description..."
              onChange={(e) => handleInput(e)}
           />
          {Errors.description && ( <p> {Errors.description} </p>)}
          </div>
          <div>
            <label>
             Released:
            </label>
            <input
              className={create.inputReleased}
              value={input.released}
              type="text"
              name="released"
              placeholder="Insert release date"
              onChange={(e) => handleInput(e)}
            />
          </div>
          {Errors.released && (<p> {Errors.released} </p>)}
          <div> 
           <label>
            Rating:
            </label> 
            <input
              className={create.inputRating}
              value={input.rating}
              type="number"
              name="rating"
              step="0.01"
              min="0"
              max="5"
              placeholder="Insert rating..."
              onChange={(e) => handleInput(e)}
            />
            {Errors.rating && (<p> {Errors.rating} </p>)}
          </div>
         
          <div>
            <label>
            Image:
            </label>
            <input
              className={create.inputImage}
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
        <ul> <li> {input.genres && input.genres.map(gen => gen + '||')} </li> </ul>
        </div>
        <div>
          <button type="submit"> Create </button>
        </div>
      </form>
    </div>
  );
}
