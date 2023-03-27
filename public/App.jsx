/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import {createRoot} from "react-dom/client"
import { Home } from "../src/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";


const App=()=>{

    return(

        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home/>} />
            </Routes>
            
        </BrowserRouter>
        
    ) 
}

const root=createRoot(document.querySelector("#app"))

root.render(<App/>)