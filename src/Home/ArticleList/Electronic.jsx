/* eslint-disable @babel/object-curly-spacing */
import { useArticleList } from "./useArticleLists.jsx";

/**
 * Renvoie les articles de la categorie electronic
 * @returns JSX
 */
export const Electronic=()=>{

    const articles=useArticleList({serverPath:"electroniques",picturesPath:"electronics"})

    return (articles)
}