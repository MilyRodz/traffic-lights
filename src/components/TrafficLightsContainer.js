import React, {Fragment, useState} from 'react';
import TrafficLights from './TrafficLights';

const TrafficLightsContainer = () =>  {

const lightColors = {
    redlight: 'red-light',
    yellowLight: 'yellow-light',
    greenLight: 'green-light'
}

const lightShadow = {
    redlightShadow: 'red-light-shadow',
    yellowLightShadow: 'yellow-light-shadow',
    greenLightShadow: 'green-light-shadow'
}

const [light, setlights] = useState({
  redState: false,
  yellowState: false,
  greenState: false
});
 
    return (
        <Fragment>
            <TrafficLights 
                lightState={light.redState} 
                lightColor={lightColors.redlight} 
                setlights={setlights} 
                classShadow={lightShadow.redlightShadow}
                typeLight={'red'} 
            />
            <TrafficLights 
                lightState={light.yellowState} 
                lightColor={lightColors.yellowLight} 
                setlights={setlights} 
                classShadow={lightShadow.yellowLightShadow} 
                typeLight={'yellow'} 
                />
            <TrafficLights 
                lightState={light.greenState} 
                lightColor={lightColors.greenLight} 
                setlights={setlights} 
                classShadow={lightShadow.greenLightShadow}         
                typeLight={'green'}         
            />
        </Fragment>
    ) 
    
}
export default TrafficLightsContainer;