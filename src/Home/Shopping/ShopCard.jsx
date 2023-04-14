import React from "react";
import { useSelector } from "react-redux";


export const ShopCard=({info})=>{

    const {img,name,quantity,price,path}=info

    const totale=useSelector((state)=>state.counter.totale)
    

    let globalePrice=0

    totale.forEach((el)=>globalePrice+=el.priceSum)


    return (

        <>
            <table>
                <thead>
                    <tr>
                        <th>article</th>
                        <th>nom</th>
                        <th>prix</th>
                        <th>quantité</th>
                        <th>totale</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><img src={`../../../public/pictures/${path}/${img}`} alt="" /></td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td>{price*quantity}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>T:{globalePrice}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}