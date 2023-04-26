import React from "react";
import { useDispatch} from "react-redux";
import { incrementCounter, remove } from "../../reducer/store.js";


export const RemoveCard=({name})=>{

    const dispatch=useDispatch()
    

    const click=()=>{
       
        dispatch(remove({name}))
        dispatch(incrementCounter())
    }

    return(<button onClick={click} >X</button>)
}