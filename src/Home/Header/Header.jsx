/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { Seach } from "./Seach";
import { Counter } from "./Counter";
import { Navigation } from "./Navigation";
import { Outlet } from "react-router-dom";
import shop from "../../../public/pictures/utiles/shop.svg"

/**
 * 
 * Affiche le header avec les composant 
 * Seach,Counter,Navigation
 * 
 * @returns JSX
 */
export const Header=()=>{

    return (
        <>
            <header>
                <div id="head" >
                    <section id="logo">
                        <img src={shop} alt="" />
                    </section>
                    <Seach/>
                    <Counter/>
                </div>
                <Navigation/>
            </header>
            <Outlet/>
        </>

    )
}