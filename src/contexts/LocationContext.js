import React, { createContext, useState } from 'react';

export const LocationContext = createContext();

export const  LocationProvider = props => {

    const [location, setLocation] = useState('Sao paulo');

    console.log('A localização agora é: ', location);

    return(
        <LocationContext.Provider value={[location, setLocation]}>
            {props.children}
        </LocationContext.Provider>
    );
};