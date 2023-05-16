import React  from "react";
import { Fashion } from "./Fashion.jsx";
import { Electronic } from "./Electronic.jsx";
import { Other } from "./Other.jsx";

/**
 * Affiche les articles liés à une categorie
 * 
 * @param {{currentCategorie}} currentCategorie nom de la categorie visible 
 * 
 */
export const ArticleList=({currentCategorie})=>{

    let x;

    switch (currentCategorie) {

        case "Electronic": x=<Electronic/> ; break;

        case "Other": x=<Other/> ; break;
    
        default: x=<Fashion/>; break;
    }


    return(<div id="articleList">{x}</div>) ;
}