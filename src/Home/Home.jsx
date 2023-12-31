/* eslint-disable @babel/object-curly-spacing */
import React, { useState } from "react";
import { CardSlider } from "./CardSlider/CardSlider";
import { Aside } from "./Aside/Aside";
import { MainView } from "./MainView";
import { ArticleList } from "./ArticleList/ArticleList.jsx";
import { createContext } from "react";

/**
 * Context qui envoie la function changeCurrentCard
 * au Categorie
 */
export const cardContext=createContext()

/**
 * Composant Home contient les composants:Header,CardSlider,MainView,Aside,Article List
 * 
 * @returns JSX
 */
export const Home=()=>{

    const [currentCategorie,setCurrentCategorie]=useState({categories:"Vetements"})

    const changeCurrentCard=(val)=>{

        setCurrentCategorie((state)=>{

            return {...state,categories:val}
        })
    }

    const currentCategorieName=currentCategorie.categories

    return (
        <>  
               <CardSlider/>
                <MainView>
                    <cardContext.Provider value={[changeCurrentCard,currentCategorieName]}>
                        <Aside/> 
                    </cardContext.Provider>
                        <ArticleList currentCategorie={currentCategorieName} />
                </MainView>
        </>
        
    )
}