
import { NavLink } from 'react-router-dom'
import land from './landing.module.css'
export default function LandingPage(){
  
  return(
   <div className={land.back}>
      <div>
        <h1 className={land.title}> VIDEOGAMES </h1>
      </div>
        <div>
          <NavLink to='/home' className={land.link}> 
          PLAY! 
        </NavLink>
          </div>
    </div>
  )
      

  
}