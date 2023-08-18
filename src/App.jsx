/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import {createRoot} from "react-dom/client"
import { Home } from "./Home/Home.jsx";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import { Header } from "./Home/Header/Header.jsx";
import { store } from "./reducer/store.js";
import { Provider } from "react-redux";
import { Shopping } from "./Home/Shopping/Shopping.jsx";
import { Footer } from "./Home/Footer/Footer.jsx";

/**
 * Composant principale
 *
 */
const App=()=>{

    return(
        <Provider store={store} >
            
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="shopping" element={<Shopping/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>

        </Provider>
        
    ) 
}

const root=createRoot(document.querySelector("#app"))

root.render(<App/>)