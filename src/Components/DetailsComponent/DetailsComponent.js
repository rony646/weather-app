/*eslint eqeqeq:0*/

import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { apiKey } from '../../API-KEY'; // Open weather api key
import apiKeyLocationIq from '../../API-KEY-LOCATIONIQ';
import { LocationContext } from '../../contexts/LocationContext';
import WeatherCard from './WeatherCard/WeatherCard';

import './DetailsComponent.css';



const DetailsComponent = props => {
    const [renderCards, setRenderCards] = useState(<h1>Loading...</h1>)

    const fetchFiveDayWeather = (lat, lon) => {

        // This function fetchs five day weather day from openwweathermap api using a given latitude and longitude values *getting from iqlocaiton api

        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,current,minutely&appid=${apiKey}`)
        .then(res => {
           let data = res.data.daily.slice(1, 6);
           console.log(data)
           data = data.map((item, index) => {
               // Mock data from a diffrent location, just to fill the cards. I was unable to get this result from api for the given location so far.
               let getDay = new Date().getDate() + index;
               let getMonth = new Date().getMonth() + 1;
               let date = `${getDay}/${getMonth < 10 ? '0' + getMonth : getMonth}`
               return <WeatherCard 
                        key={item.dt} 
                        dayTemp={item.temp.day}
                        maxTemp={item.temp.max}
                        minTemp={item.temp.min}
                        date={date}
                        weatherResume={item.weather[0].description.toUpperCase()}
                        />
           })
           setRenderCards(data);
        })
    }

    const [location] = useContext(LocationContext);
    useEffect(() => {

        axios.get(`https://us1.locationiq.com/v1/search.php?key=${apiKeyLocationIq}&q=${location}&format=json`)
        .then(res => {
            let lat = res.data[0].lat
            let long = res.data[0].lon
            fetchFiveDayWeather(lat, long);
        })
        .catch(err => console.log(err))
    }, [location || props.showMore])

    

    return(
        <div className={props.showMore ? 'open' : 'closed'} style={{transition: 'all 0.5s'}}>
            <div className="card-wrapper" style={{display: props.showMore ? 'flex' : 'none'}}>
                {renderCards}
            </div>
        </div>
    );
};

export default DetailsComponent;