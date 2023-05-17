import React from "react";
import { useDispatch} from "react-redux";
import {incrementPanierCounter, removeArticle } from "../../reducer/store.js";


export const RemoveCard=({name})=>{

    const dispatch=useDispatch()
    

    const click=()=>{
       
        dispatch(removeArticle({name}))
        dispatch(incrementPanierCounter())
    }

    return(<button className="remove" onClick={click}>Supprimer</button>)
}