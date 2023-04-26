/* eslint-disable react/self-closing-comp */
/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import panier from "../../../public/pictures/utiles/panier.svg"

/**
 * Affiche le panier 
 * 
 * @returns JSX
 */
export const Counter=()=>{

    const counter=useSelector((state)=>state.counter.value)

    return (

        <section id="counter" >
            <Link to={"/shopping"}><img src={panier} alt="" /></Link>
            <span>{counter}</span> 
        </section>
    )
}