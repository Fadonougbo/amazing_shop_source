/* eslint-disable no-unused-vars */
/* eslint-disable @babel/new-cap */
import React from "react";
import {jsPDF} from "jspdf"
import { getGlobaleHtml } from "../../js/htmlpdf";

export const Buy=({articlesInfo,globalePrice,children})=>{

    const doc = new jsPDF({
        orientation:"landscape"
    });
    
    const click=()=>{

        const p=getGlobaleHtml(articlesInfo,globalePrice);
  
        doc.html(p, {
            callback: function (doc) {
              doc.save("test.pdf");
            },
            x: 10,
            y: 10
         });
    }

    return(
        <td onClick={click}>
            {children}
        </td>) 
}