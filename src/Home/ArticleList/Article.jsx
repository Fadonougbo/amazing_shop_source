import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';
import { useDispatch, useSelector } from "react-redux";
import {addArticleOrChangeQuantity,incrementPanierCounter } from "../../reducer/store.js";
import { RateStar } from "./RateStar.jsx";
import { Alerte } from "./Alerte.jsx";

/**
 * 
 * Represante un article d'une categorie
 * @param {element info,path info} param0 
 * @returns JSX.Element
 */
export const Article=({info,path})=>{

    const {name,img,price,quantity_available}=info

    const {articlesInfo}=useSelector((state)=>state.counter)

    const dispatch=useDispatch()


    /**
     * Recupère les infos sur l'article courant 
     */
    const currentArticleFromStore=articlesInfo.find((article)=>article.name===name)

    /**
     * Form validation
     */
    const shema=z.object({
        quantity:z.coerce.number().min(1,{message:"Changer de valeur"}).max(quantity_available,{message:"Cette quantité n'est pas disponible"})
    })

    const {register,handleSubmit,formState:{errors}}=useForm({

        resolver:zodResolver(shema)
    
    })

    const submit=(data)=>{
        const {quantity}=data
        dispatch(addArticleOrChangeQuantity({quantity,img,name,price,path}))
        dispatch(incrementPanierCounter())
        
    }


    return (

        <div className="article" >
            <span id="price" >{price} $</span>
            <Alerte errors={errors}  />
            <section className="imgContainer" >
                <img src={`pictures/${path}/${img}`} alt="" />
            </section>
            <div id="foot" >
                <section className="articleInfoContainer">
                    <h3>{name}</h3>
                    <RateStar/>
                    <p>quantité disponible: <strong>{quantity_available}</strong></p>
                </section>
                <section className="formContainer" >
                    <form action="" onSubmit={handleSubmit(submit)}>
                        <div className="quantityInfo" >
                            <input type="number" id="quantity" min="1" defaultValue={currentArticleFromStore?.quantity||1} {...register("quantity")} />
                            <button><span>Add to card</span> <img src="pictures/utiles/add.svg" alt="" /></button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )

}