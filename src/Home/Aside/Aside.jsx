/* eslint-disable @babel/object-curly-spacing */
import React,{useState,useEffect} from "react";
import { Categorie } from "./Categorie";
import ky from "ky";

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
                method:"get",
                retry: {
                    limit: 15,
                    methods: ['get'],
                    statusCodes: [413],
                    backoffLimit: 4000
                }

            }).json()
            .then((data)=>{
                
                setState((s)=>{
                    return {...s,categories:data}
                })
            })

            /* ky("db.json",
            {
                method:"get",
                retry: {
                    limit: 15,
                    methods: ['get'],
                    statusCodes: [413],
                    backoffLimit: 4000
                }

            }).json()
            .then((data)=>{
                
                console.log(data);
            }) */
    

    },[])

    const categories=state.categories.map((categorie,key)=>
    {
        return <Categorie info={categorie} key={key} />
    })

    return (
        <aside>
            <div>
               {state.categories.length>0?categories:<h1>Chargement...</h1>} 
            </div>
        </aside>
        
    )
}