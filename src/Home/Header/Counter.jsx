/* eslint-disable react/self-closing-comp */
/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { useContext } from "react";
import { counterContext } from "../Home.jsx";

/**
 * Affiche le panier 
 * 
 * @returns JSX
 */
export const Counter=()=>{

    const counter=useContext(counterContext)

    return (

        <section id="counter" >
            <span>{counter}</span>
        </section>
    )
}