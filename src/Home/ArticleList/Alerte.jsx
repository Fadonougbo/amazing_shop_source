import React,{ useCallback,useState} from "react"

export const Alerte=({errors})=>{

    const {quantity}=errors

    const [basicErrorClass,setBasicErrorClass]=useState("errorMessage")
    const [errorStatus,setErrorStatus]=useState(false)

    const alerteMessage=useCallback(()=>{
        if(Object.hasOwn(errors,"quantity") && errorStatus===false)
        {
            setBasicErrorClass("errorMessage error")

            setTimeout(()=>
            {
                setBasicErrorClass("errorMessage")
            },6000)

            setErrorStatus(true)
        }else if(!Object.hasOwn(errors,"quantity") && errorStatus===true)
        {
            setErrorStatus(false)
        }

    },[errors,errorStatus])

    alerteMessage()
    
  return <div className={basicErrorClass}><p>{quantity?.message}</p></div>
}