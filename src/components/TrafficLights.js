import React, { useState } from 'react'; 

const TrafficLights = ({lightState, lightColor, setlights, classShadow, typeLight}) => {

    const turnLightOn = () => {

        if(typeLight === 'red'){
            setlights({
                redState: true,
                yellowState: false,
                greenState: false
            })
        }else if(typeLight === 'yellow'){
            setlights({
                redState: false,
                yellowState: true,
                greenState: false
            })
        }else if(typeLight === 'green'){
            setlights({
                redState: false,
                yellowState: false,
                greenState: true
            })
        } 
    } 

    return (
        <div className={  `${lightColor} ${lightState ? classShadow : ''}` } onClick={( ) => turnLightOn()}> </div>
    )  
} 

export default TrafficLights;