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
            animationDuration:4000,

        })

        glide.mount()
    },[])

    return (
            <div id="card_slider" >
                <div className="glide" id="slider_container">
                    <div className="glide__track"  data-glide-el="track">
                        <section className="glide__slides">
                            <section className="glide__slide perso_container">
                                <div>
                                    <h2>-50% sur tous vos achats</h2>
                                    <p><em>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam doloribus accusamus commodi, error veniam alias laudantium dolorem praesentium cupiditate obcaecati tempora aperiam, culpa labore porro! Consectetur quis esse error totam?</em></p>
                                    <a href="#">visiter</a>
                                </div>
                                <img  src="pictures/carousel/flash-1.png" alt="" />
                            </section>
                            <section className="glide__slide perso_container">
                                <div>
                                    <h2>-50% sur tous vos achats</h2>
                                    <p><em>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam doloribus accusamus commodi, error veniam alias laudantium dolorem praesentium cupiditate obcaecati tempora aperiam, culpa labore porro! Consectetur quis esse error totam?</em></p>
                                    <a href="#">visiter</a>
                                </div>
                                <img  src="pictures/carousel/flash-2.png" alt="" />
                            </section>
                            <section className="glide__slide perso_container">
                                <div>
                                    <h2>-50% sur tous vos achats</h2>
                                    <p><em>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam doloribus accusamus commodi, error veniam alias laudantium dolorem praesentium cupiditate obcaecati tempora aperiam, culpa labore porro! Consectetur quis esse error totam?</em></p>
                                    <a href="#">visiter</a>
                                </div>
                                <img  src="pictures/carousel/flash-3.png" alt="" />
                            </section>
                        </section>
                    </div>
                    <div className="glide__bullets" data-glide-el="controls[nav]">
                            <button className="glide__bullet" data-glide-dir="=0"></button>
                            <button className="glide__bullet" data-glide-dir="=1"></button>
                            <button className="glide__bullet" data-glide-dir="=1"></button>
                    </div>
                </div>
            </div>
        
    )
}