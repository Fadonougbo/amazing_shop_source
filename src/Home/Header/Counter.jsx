/* eslint-disable react/self-closing-comp */
/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/**
 * Affiche le panier 
 * 
 * @returns JSX
 */
export const Counter=()=>{

    const counter=useSelector((state)=>state.counter.value)



    return (

        <section id="counter" >
           <Link to={"/shopping"}><span>{counter}</span></Link> 
        </section>
    )
}