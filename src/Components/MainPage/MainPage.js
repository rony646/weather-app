import React, { useContext } from 'react';

import Backgrounds from '../../utils/backgrounds';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';

import Quote from './Quote/Quote';
import Content from './Content/Content'


import './MainPage.css';

const MainPage = props => {

    const [weatherData, setWeatherData] = useContext(WeatherDataContext);
    let background = Backgrounds.rain;

    if(weatherData) {
        switch(weatherData.weather[0].main) {
            case "Clear":
                background = Backgrounds.clear;
                break;
            case "Clouds":
                background = Backgrounds.clouds;
                break;
            case "Dust":
                background = Backgrounds.dust;
                break;
            case "Sand":
                background = Backgrounds.sand;
                break;
            case "Fog":
                background = Backgrounds.fog;
                break;
            case "Haze":
                background = Backgrounds.haze;
                break;
            case "Smoke":
                background = Backgrounds.smoke;
                break;
            case "Mist":
                background = Backgrounds.mist;
                break;
            case "Snow":
                background = Backgrounds.snow;
                break;
            case "Rain":
                background = Backgrounds.rain;
                break;
            case "Drizzle":
                background = Backgrounds.drizzle;
                break;
            case "Thunderstorm":
                background = Backgrounds.thunderstorm;
                break;
            default:
                background = Backgrounds.clear;
                break;

        };
    }; // Set the background depeding on the weather

    

    return(
        <div className="main-page" style={{backgroundImage: `url(${background})`}}>
            <Quote showMore={props.showMore}/>
            <Content setShowMore={props.setShowMore} showMore={props.showMore}/>
        </div>
    );
};

export default MainPage;