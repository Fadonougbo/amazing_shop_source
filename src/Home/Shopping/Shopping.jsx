import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopCard } from "./ShopCard.jsx";
import {setArticlePrice } from "../../reducer/store.js";
import { Buy } from "./Buy.jsx";

/**
 * Composant pour afficher un  element du panier
 * 
 */
export const Shopping=()=>{

    const {articlesInfo,panierArticlesInfo}=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
    
    const cardList=articlesInfo.map((article,key)=>
    {   
        return <ShopCard key={key} info={article} />
    })

     useEffect(()=>{

        articlesInfo.forEach((article)=>
        {
            dispatch(setArticlePrice({totalPrice:article.price*article.quantity,name:article.name}))
            
        })

     },[articlesInfo,dispatch])   

    
    let globalePrice=0
    panierArticlesInfo.forEach((article)=>globalePrice+=article.totalPrice)

    return(
        <>
                {articlesInfo.length>0?
                    <div id="panier_content">
                        <div id="action" >
                            <Buy articlesInfo={articlesInfo} globalePrice={globalePrice} >Je valide les achats</Buy>
                           <button id="total">A payer: {globalePrice}$</button> 
                        </div>
                        <div id="article_list" >
                            {cardList} 
                        </div>
                    </div>
                :<div id="empty_card"><h1 >Panier Vide</h1></div>     
                }
            
        </>) 
}