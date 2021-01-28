import React, { createContext, useState } from 'react';

export const WeatherDataContext = createContext();

export const  WeatherDataProvider = props => {

    const [weatherData, setWeatherData] = useState();

    return(
        <WeatherDataContext.Provider value={[weatherData, setWeatherData]}>
            {props.children}
        </WeatherDataContext.Provider>
    );
};