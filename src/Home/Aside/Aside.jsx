/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { Categorie } from "./Categorie";
import ky from "ky";
import { useState } from "react";
import { useEffect } from "react";

/**
 * 
 * @returns Affiche les categories sur le aside
 */
export const Aside=()=>{

    const [state,setState]=useState({ categories:[] })

    useEffect(()=>
    {
        ky("http://localhost:3000/categories",
        {
            method:"get"
        }).json()
        .then((data)=>{
            
            setState((s)=>{
                return {...s,categories:data}
            })
        })

    },[])

    

    const categories=state.categories.map((el,key)=>
    {
        return <Categorie info={el} key={key} />
    })

    return (
        <aside>
            <div>
               {categories} 
            </div>
        </aside>
        
    )
}