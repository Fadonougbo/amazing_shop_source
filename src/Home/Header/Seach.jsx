/* eslint-disable @babel/object-curly-spacing */
import React from "react";

export const Seach=()=>{

    return (
        <section id="seach" >
            <div id="input_container" >
               <input type="seach" name="seach" placeholder="Seach Elements" /> 
            </div>
            <div id="select_container" >
                <select name="" id="">
                    <optgroup label="All categories">
                        <option value="opta">opta</option>
                        <option value="optb">optb</option>
                        <option value="optc">optc</option>
                    </optgroup>
                </select>
            </div>
        </section>
    )
}