import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopCard } from "./ShopCard.jsx";
import {setArticlePrice } from "../../reducer/store.js";
import { Buy } from "./Buy.jsx";


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

     },[articlesInfo])   

    
    let globalePrice=0
    panierArticlesInfo.forEach((article)=>globalePrice+=article.totalPrice)

    return(
        <>
            <div id="table_container">
                {
                articlesInfo.length>0?
                <table>{cardList} 
                    <tfoot>
                        <tr rowSpan={2}>
                        <Buy articlesInfo={articlesInfo} globalePrice={globalePrice} >Je valide les achats</Buy>
                        <td>A payer : {globalePrice}$</td>
                        </tr>
                    </tfoot>
                </table>
                :<h1>Panier Vide</h1>
                }
            </div>
        
        </>) 
}