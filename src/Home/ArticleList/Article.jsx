import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';

/**
 * 
 * Represante un article d'une categorie
 * @param {element info,path info} param0 
 * @returns JSX.Element
 */
export const Article=({info,path})=>{

    const {name,img,price,quantity_available}=info
    
    const shema=z.object({
        quantity:z.coerce.number().min(1).max(quantity_available)
    })

    const {register,handleSubmit,formState:{errors}}=useForm({

        resolver:zodResolver(shema)
    })

    const {quantity}=errors

    const submit=(data)=>{

          console.log(data);
    }

    return (

        <div>
            <span>{price}</span>
            <section>
                <img src={`../../../public/pictures/${path}/${img}`} alt="" />
            </section>
            <section>
                <h3>{name}</h3>
                <p>quantity available: {quantity_available}</p>
            </section>
            <section>
                <form action="" onSubmit={handleSubmit(submit)}>
                    <div>
                        <input type="number" id="quantity" min="1" defaultValue="1" {...register("quantity")} />
                        <button>add</button>
                    </div>
                    <div>
                        {quantity?.message && <p>{quantity.message}</p> }
                    </div>
                </form>
            </section>
        </div>
    )

}