/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { useContext } from "react";
import { cardContext } from "../Home.jsx";

/**
 * Composant represantant une categorie
 * 
 * @param {*} param0 
 * @returns 
 */
export const Categorie=({info})=>{

    const {name,img}=info

    const changeCurrentCard=useContext(cardContext)

    const change=()=>{
        changeCurrentCard(name)
    }

    return (
        <div id="categorie"onClick={change}>
            <img src={`../../../public/pictures/category/${img}`} alt="logo" />
            <h2>{name}</h2>
        </div>
       
    )
}