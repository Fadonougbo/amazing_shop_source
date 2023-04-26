/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Bar de navigation
 * @returns JSX
 */
export const Navigation=()=>{

    return (

        <section id="nav_container" >
           <nav>
                <NavLink to="/"  
                className={
                    ({ isActive }) =>isActive ? "activeNavLink navLInk" : "noNavActiveLink navLInk"}
                >
                    Home
                </NavLink>
                <NavLink to="/shopping"  
                className={
                    ({ isActive }) =>isActive ? "activeNavLink navLInk" : "noNavActiveLink navLInk"}
                >
                    Panier
                </NavLink>
           </nav>
        </section>
    )
}
