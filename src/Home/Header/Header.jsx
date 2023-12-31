/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { Seach } from "./Seach";
import { Counter } from "./Counter";
import { Navigation } from "./Navigation";

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
                        <img src="pictures/utiles/shop.svg" alt="logo" />
                    </section>
                    <Seach/>
                    <Counter/>
                </div>
                <Navigation/>
            </header>
        </>

    )
}