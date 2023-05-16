/* eslint-disable @babel/object-curly-spacing */
import { useArticleList } from "./useArticleLists.jsx";

/**
 * Renvoie les articles de la categorie Fashion
 * @returns JSX
 */
export const Fashion=()=>{

    const articles=useArticleList({serverPath:"fashions",picturesPath:"fashions"})
    
    return articles
}