/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { useArticleList } from "./useArticleLists.jsx";

/**
 * Renvoie les articles de la categorie electronic
 * @returns JSX
 */
export const Electronic=()=>{

    const articles=useArticleList({serverPath:"electronics",picturesPath:"electronics"})

    return (

        <div id="">
          {articles}
        </div>
       
    )
}