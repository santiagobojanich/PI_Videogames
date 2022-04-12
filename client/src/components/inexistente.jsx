import { NavLink } from "react-router-dom";

export default function Inexistente () {
    return (
       <div> 
          WRONG PAGE
          <NavLink to ='/'> REDIRECT TO HOME </NavLink>
       </div>

    )
} 