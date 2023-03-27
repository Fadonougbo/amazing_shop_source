/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { Seach } from "./Seach";
import { Counter } from "./Counter";
import { Navigation } from "./Navigation";

export const Header=()=>{

    return (

        <header>
            <div id="head" >
                <section id="logo">
                    <span>commerce</span>
                </section>
                <Seach/>
                <Counter/>
            </div>
            <Navigation/>
        </header>
    )
}