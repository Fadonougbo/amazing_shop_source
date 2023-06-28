import React,{useState} from "react"
import { useRef } from "react"
import { useEffect } from "react"

export const Alerte=({errors})=>{

    const {quantity}=errors

    const [basicErrorClass,setBasicErrorClass]=useState("errorMessage")

    const xRef=useRef()

    useEffect(()=>{

        if(Object.hasOwn(errors,"quantity"))
        {
            setBasicErrorClass("errorMessage error")

            setTimeout(()=>
            {   
                setBasicErrorClass("errorMessage")

            },2000)

        }

    },[errors])
    
  return <div  ref={xRef} className={basicErrorClass} ><p>{quantity?.message}</p></div>
}