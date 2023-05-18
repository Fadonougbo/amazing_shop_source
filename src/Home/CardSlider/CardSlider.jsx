/* eslint-disable react/self-closing-comp */
/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { useEffect } from "react";
import Glide from '@glidejs/glide';

/**
 * Affiche un slider
 * @returns JSX
 */
export const CardSlider=()=>{

    useEffect(()=>{

        const glide=new Glide('.glide',{
            type:"carousel",
            autoplay:true,
            keyboard:true,
            animationDuration:5000,
            animationTimingFunc:"ease"
        })

        glide.mount()
    },[])

    return (
        <div id="card_slider" >
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <section className="glide__slides">
                        <section className="glide__slide banner banner_1">
                        </section>
                        <section className="glide__slide banner banner_2">
                        </section>
                    </section>
                </div>
                <div className="glide__bullets" data-glide-el="controls[nav]">
                        <button className="glide__bullet" data-glide-dir="=0"></button>
                        <button className="glide__bullet" data-glide-dir="=1"></button>
                </div>
            </div>
        </div>
        
    )
}