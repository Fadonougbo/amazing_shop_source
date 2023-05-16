/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { useContext } from "react";
import { cardContext } from "../Home.jsx";

/**
 * Composant represantant une categorie
 * 
 *
 */
export const Categorie=({info})=>{

    const {name,img}=info

    const [changeCurrentCard,currentCategorieName]=useContext(cardContext)

    const change=()=>{
        changeCurrentCard(name)
    }

    return (
        <div id="categorie" onClick={change} className={name===currentCategorieName?"active_categorie":""} >
            <img src={`../../../public/pictures/category/${img}`} alt="logo" />
            <h2>{name}</h2>
        </div>
    )
}