/* eslint-disable @babel/object-curly-spacing */
import React from "react";

export const Categorie=({info})=>{

    const {name,img}=info


    return (
        <div id="categorie">
            <img src={`../../../public/pictures/category/${img}`} alt="logo" />
            <h2>{name}</h2>
        </div>
       
    )
}