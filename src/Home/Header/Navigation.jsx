/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation=()=>{

    return (

        <section id="nav_container" >
           <nav>
                <NavLink to="/"  
                className={
                    ({ isActive }) =>isActive ? "activeNavLink" : "noNavActiveLink"}
                >
                    Home
                </NavLink>
           </nav>
        </section>
    )
}
