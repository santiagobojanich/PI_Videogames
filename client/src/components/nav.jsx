import React from "react";
import { NavLink } from "react-router-dom";
import nav from './Nav.module.css'


export default function Nav() {


    return (
        <div className={nav.container}>
            <img className={nav.image} src="https://www.levelaccess.com/wp-content/uploads/2017/10/videogameControler_Icon-216x300.png" />
            <div>

            </div>

            <div >
                <NavLink className={nav.home} to='/home'> HOME </NavLink>
            </div>
            <div >
                <NavLink className={nav.create} to='/videogame' > CREATE VIDEOGAME </NavLink>
            </div>
            <div >
                <NavLink className={nav.volver} to='/'> BACK </NavLink>
            </div>


        </div>
    )

}