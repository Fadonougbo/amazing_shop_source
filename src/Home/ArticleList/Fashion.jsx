/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { useArticleList } from "./useArticleLists.jsx";

/**
 * Renvoie les articles de la categorie Fashion
 * @returns JSX
 */
export const Fashion=()=>{

    const articles=useArticleList({serverPath:"fashions",picturesPath:"fashions"})

    return (

        <div id="">
           {articles}
        </div>
       
    )
}