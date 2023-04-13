/* eslint-disable @babel/object-curly-spacing */
import React, { useState } from "react";
import { Header } from "./Header/Header";
import { CardSlider } from "./CardSlider/CardSlider";
import { Aside } from "./Aside/Aside";
import { MainView } from "./MainView";
import { ArticleList } from "./ArticleList/ArticleList.jsx";
import { createContext } from "react";

/**
 * Context qui envoie la la function changeCurrentCard
 * au Categorie
 */
export const cardContext=createContext()

export const counterContext=createContext()

/**
 * Composant Home contient les composants:Header,CardSlider,MainView,Aside,Article List
 * 
 * @returns JSX
 */
export const Home=()=>{

    const [currentCategorie,setCurrentCategorie]=useState({categories:"Fashion"})
    const [counter,setCounter]=useState({value:0})


    const changeCurrentCard=(val)=>{

        setCurrentCategorie((s)=>{

            return {...s,categories:val}
        })
    }

    return (
        <>  
                <counterContext.Provider value={counter.value} >
                    <Header/>
                </counterContext.Provider>
                <CardSlider/>
                <MainView>
                    <cardContext.Provider value={changeCurrentCard}>
                        <Aside/> 
                    </cardContext.Provider>
                        <ArticleList currentCategorie={currentCategorie.categories} />
                </MainView>
            
        </>
        
    )
}