/* eslint-disable no-unused-vars */
/* eslint-disable @babel/new-cap */
import React from "react";
import {jsPDF} from "jspdf"
import { getGlobaleHtml } from "../../js/htmlpdf";

export const Buy=({articlesInfo,globalePrice,children})=>{

    const doc = new jsPDF({
        
    });
    
    const click=()=>{

        const p=getGlobaleHtml(articlesInfo,globalePrice);
        doc.setFont("helvetica");
        doc.setFontSize(9);
        doc.html(p, {
            callback: function (doc) {
              doc.save("test.pdf");
            }
         });

         console.log(doc.getFontSize());
    }

    return(
        <button id="buy" onClick={click}>
            {children}
        </button>) 
}