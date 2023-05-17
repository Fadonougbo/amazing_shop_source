/* eslint-disable react/self-closing-comp */
import React from "react";
import { RemoveCard } from "./RemoveCard.jsx";

export const ShopCard=({info})=>{

    const {img,name,quantity,price,path}=info

    return (

        <>
                <div className="card_container" >
                    <section className="img_card">
                        <img src={`pictures/${path}/${img}`} alt="" />
                    </section>
                    <section className="info_card">
                        <p>Nom: <span>{name}</span></p>
                        <p>Prix: <span>{price}$</span></p>
                        <p>Quantité: <span>{quantity}</span></p>
                        <p>Prix tolal: <span>{price*quantity}$</span></p>
                        <RemoveCard name={name} />
                    </section>
                </div>
            
        </>
    )
}