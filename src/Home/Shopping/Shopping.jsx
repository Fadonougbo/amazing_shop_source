import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopCard } from "./ShopCard.jsx";
import { getTotale } from "../../reducer/store.js";
import { Buy } from "./Buy.jsx";
import { useEffect } from "react";


export const Shopping=()=>{

    const {articlesInfo,totale}=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
    
    const cardList=articlesInfo.map((el,key)=>
    {   
        return <ShopCard key={key} info={el} />
    })

     useEffect(()=>{

        articlesInfo.forEach((el)=>
        {
            dispatch(getTotale({priceSum:el.price*el.quantity,name:el.name}))
            
        })

     },[articlesInfo])   

    
    let globalePrice=0
    totale.forEach((el)=>globalePrice+=el.priceSum)

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