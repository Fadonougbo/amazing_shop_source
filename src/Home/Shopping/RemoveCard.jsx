import React from "react";
import { useDispatch} from "react-redux";
import {incrementPanierCounter, removeArticle } from "../../reducer/store.js";


export const RemoveCard=({name})=>{

    const dispatch=useDispatch()
    

    const click=()=>{
       
        dispatch(removeArticle({name}))
        dispatch(incrementPanierCounter())
    }

    return(<button onClick={click} >X</button>)
}