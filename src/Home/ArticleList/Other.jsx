/* eslint-disable @babel/object-curly-spacing */
import { useArticleList } from "./useArticleLists.jsx";

/**
 * Renvoie les articles de la categorie other
 * @returns JSX
 */
export const Other=()=>{

    const articles=useArticleList({serverPath:"autres",picturesPath:"others"})

    return articles
}