import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopCard } from "./ShopCard.jsx";
import { getTotale } from "../../reducer/store.js";
import { Buy } from "./Buy.jsx";


export const Shopping=()=>{

    const articleList=useSelector((state)=>state.counter.articlesInfo)
    const dispatch=useDispatch()
    
    const cardList=articleList.map((el,key)=>
    {
        dispatch(getTotale({priceSum:el.price*el.quantity,name:el.name}))
        
        return <ShopCard key={key} info={el} />
    })

    const totale=useSelector((state)=>state.counter.totale)
    
    let globalePrice=0

    totale.forEach((el)=>globalePrice+=el.priceSum)



    return(
        <>
            <div id="table_container">
                {
                articleList.length>0?
                <table>{cardList} 
                    <tfoot>
                        <tr rowSpan={2}>
                        <Buy articlesInfo={articleList} globalePrice={globalePrice} >Acheter</Buy>
                        <td>T:{globalePrice}$</td>
                        </tr>
                    </tfoot>
                </table>
                :<h1>Panier Vide</h1>
                }
            </div>
        
        </>) 
}