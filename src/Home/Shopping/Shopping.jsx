import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopCard } from "./ShopCard.jsx";
import { getTotale } from "../../reducer/store.js";


export const Shopping=()=>{

    const articleList=useSelector((state)=>state.counter.articlesInfo)
    const dispatch=useDispatch()
    
    const cardList=articleList.map((el,key)=>
    {
        dispatch(getTotale({priceSum:el.price*el.quantity,name:el.name}))
        
        return <ShopCard key={key} info={el} />
    })
console.log(articleList);

    return(
        <>
            <div>{articleList.length>0?cardList:<h1>Panier Vide</h1>}</div>
        
        </>) 
}