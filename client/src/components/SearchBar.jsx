import React from "react";
import { useState } from "react";
import { SearchByName } from "../actions";
import { useDispatch } from "react-redux";
import home from './home.module.css'
export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setname] = useState ('')
    
function handleChange (e){
    e.preventDefault()
    setname (e.target.value)
}
    
function handleSubmit (e) {
    e.preventDefault()
    dispatch(SearchByName(name))
}    
    return (
        <div className={home.searchPosition}>
            <input className={home.search}  type='text' placeholder="Search..." onChange={(e) => handleChange(e)}/>
            <button className={home.searchButton}type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}