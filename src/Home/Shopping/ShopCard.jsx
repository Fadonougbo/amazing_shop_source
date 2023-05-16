/* eslint-disable react/self-closing-comp */
import React from "react";
import { RemoveCard } from "./RemoveCard.jsx";

export const ShopCard=({info})=>{

    const {img,name,quantity,price,path}=info


    return (

        <>
            
                <thead>
                    <tr>
                        <th>article</th>
                        <th>nom</th>
                        <th>prix</th>
                        <th>quantité</th>
                        <th>totale</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="img_td" >
                            <img src={`../../../public/pictures/${path}/${img}`} alt="" />
                        </td>
                        <td>{name}</td>
                        <td>{price}$</td>
                        <td>{quantity}</td>
                        <td>{price*quantity} $</td>
                        <td><RemoveCard name={name} /></td>
                    </tr>
                </tbody>
            
        </>
    )
}