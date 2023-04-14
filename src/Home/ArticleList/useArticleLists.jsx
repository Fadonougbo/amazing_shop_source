import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Article } from "./Article.jsx";
import ky from "ky";

/**
 * Fetch les articles d'une categorie  a l'aide du chemin db.json de la categorie 
 * et du chemin du dossier contenant les images
 * renvoie un tableau qui contien list des articles sous form de composant article
 * 
 * @param {{serverPath:string,picturesPath:string}} 
 * @returns string
 */
export const useArticleList=({serverPath,picturesPath})=>
{

    const [article,setArticle]=useState({elements:[]})

    useEffect(()=>{

        ky(`http://localhost:3000/${serverPath}`,{

            method:"get",
            retry: {
                limit: 15,
                methods: ['get'],
                statusCodes: [413],
                backoffLimit: 4000
            }
        })
        .json()
        .then((data)=>{

            setArticle((s)=>
            {
                return {...s,elements:data}
            })
        })
        
    },[serverPath])


   const articles=article.elements.map((el,key)=>
   {
     return <Article info={el} path={picturesPath} key={key} />
   })

   return article.elements.length>0?articles:<h1>Chargement...</h1>
}