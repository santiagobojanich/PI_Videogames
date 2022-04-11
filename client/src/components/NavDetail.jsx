import React from "react";
import { NavLink } from "react-router-dom";
import nav from './navDetail.module.css'


export default function NavDetail() {

 
    return (
        <div className={nav.container}>
         <img className={nav.image} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a4834c31-12f6-456b-b0d8-5fae29b9a2e9/dedv72e-9d9e849e-7fed-40f0-b7b4-49209ce6243c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0ODM0YzMxLTEyZjYtNDU2Yi1iMGQ4LTVmYWUyOWI5YTJlOVwvZGVkdjcyZS05ZDllODQ5ZS03ZmVkLTQwZjAtYjdiNC00OTIwOWNlNjI0M2MuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nKjRQVTqfppvofLnpoEnsPK6UVET8sVVAvIXaOVIiXY" />
        <div>
          
        </div>    
            
            <div>
            <NavLink className={nav.home} to='/home'> HOME </NavLink>
            </div>
            <div>
            <NavLink className={nav.create} to='/videogame' > CREATE VIDEOGAME </NavLink>
            </div>
                <div>
            <NavLink  className={nav.volver} to='/'> EXIT </NavLink>
            </div>

       
        </div>
    )

}