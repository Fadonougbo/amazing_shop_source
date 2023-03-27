import React from "react";

/**
 * 
 * Represante un article d'une categorie
 * @param {element info,path info} param0 
 * @returns JSX.Element
 */
export const Article=({info,path})=>{

    const {name,img,price,quantity_available}=info

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
                <input type="number" name="quantity" id="quantity" defaultValue="1" />
                <button>add</button>
            </section>
        </div>
    )

}