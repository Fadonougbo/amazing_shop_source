/* eslint-disable no-unused-vars */
/* eslint-disable @babel/new-cap */
import React from "react";
import {jsPDF} from "jspdf"
import { getGlobaleHtml } from "../../js/htmlpdf";

export const Buy=({articlesInfo,globalePrice,children})=>{

    const doc = new jsPDF({
        orientation:"l"
    });

    
    const click=()=>{
        const page=getGlobaleHtml(articlesInfo,globalePrice);

        doc.html(page, {
            x:30,
            y:30
         }).save("amazing shop")
    
    }

    return(
        <button id="buy" onClick={click}>
            {children}
        </button>) 
}