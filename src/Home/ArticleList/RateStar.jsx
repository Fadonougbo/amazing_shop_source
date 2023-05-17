/* eslint-disable react/display-name */
/* eslint-disable @babel/object-curly-spacing */
import React,{ memo } from "react"

export const RateStar=memo(()=>{

    const starRepeatNumber=Math.ceil( (Math.random() )*5 )
    
    const starImgList=[]

    for (let index = 1; index <= starRepeatNumber; index++) {
        
        starImgList.push(<img src="pictures/utiles/yellowstar.svg" alt="star" key={index} />)  
    }

    if(starImgList.length<5)
    {
        const rest=5-starImgList.length

        for (let index = 1; index <= rest; index++) {
        
            starImgList.push(<img src="pictures/utiles/blackstar.svg" alt="star" key={starImgList.length+index} />)  
        }
    }

    return <p>{starImgList}</p>
})