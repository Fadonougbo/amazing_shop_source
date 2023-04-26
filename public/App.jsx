/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import {createRoot} from "react-dom/client"
import { Home } from "../src/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Header } from "../src/Home/Header/Header.jsx";
import { store } from "../src/reducer/store.js";
import { Provider } from "react-redux";
import { Shopping } from "../src/Home/Shopping/Shopping.jsx";

/**
 * Composant principale
 * @returns JSX
 */
const App=()=>{

    return(
        <Provider store={store} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>} >
                        <Route  path="/" element={<Home/>} />
                        <Route path="shopping" element={<Shopping/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
        
    ) 
}

const root=createRoot(document.querySelector("#app"))

root.render(<App/>)