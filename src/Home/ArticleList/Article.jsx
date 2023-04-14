import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';
import { useDispatch } from "react-redux";
import { addArticle, incrementCounter } from "../../reducer/store.js";
import add from "../../../public/pictures/utiles/add.svg"

/**
 * 
 * Represante un article d'une categorie
 * @param {element info,path info} param0 
 * @returns JSX.Element
 */
export const Article=({info,path})=>{

    const {name,img,price,quantity_available}=info

    const dispatch=useDispatch()
    
    const shema=z.object({
        quantity:z.coerce.number().min(1).max(quantity_available)
    })

    const {register,handleSubmit,formState:{errors}}=useForm({

        resolver:zodResolver(shema)
    })

    const {quantity}=errors

    const submit=(data)=>{

        const {quantity}=data
        dispatch(addArticle({quantity,img,name,price,path}))
        dispatch(incrementCounter())
        
    }

    return (

        <div className="article" >
            <span>{price} $</span>
            <section className="imgContainer" >
                <img src={`../../../public/pictures/${path}/${img}`} alt="" />
            </section>
            <section className="articleInfoContainer">
                <h3>{name}</h3>
                <p>quantité disponible: {quantity_available}</p>
            </section>
            <section className="formContainer" >
                <form action="" onSubmit={handleSubmit(submit)}>
                    <div className="quantityInfo" >
                        <input type="number" id="quantity" min="1" defaultValue="1" {...register("quantity")} />
                        <button><img src={add} alt="" /></button>
                    </div>
                    <div>
                        {quantity?.message && <p>{quantity.message}</p> }
                    </div>
                </form>
            </section>
        </div>
    )

}