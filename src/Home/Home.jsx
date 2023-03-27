/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { Header } from "./Header/Header";
import { CardSlider } from "./CardSlider/CardSlider";
import { Aside } from "./Aside/Aside";

export const Home=()=>{

    return (
        <>
            <Header/>
            <CardSlider/>
            <Aside/>
        </>
        
    )
}