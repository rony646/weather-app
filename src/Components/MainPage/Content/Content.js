import React, { useContext } from 'react';
import { AnimateOnChange } from 'react-animation';

import { WeatherDataContext } from '../../../contexts/WeatherDataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

import './Content.css';

const Content = props => {

    const [weatherData, setWeatherData] = useContext(WeatherDataContext);

    console.log(props.showMore, 'From content')

    if(!weatherData) {
        return <div>Error</div>
    }

    return(
        <AnimateOnChange>
            <div className="content">
                <div className="weather-content">
                    <span>{weatherData.weather[0].description.toUpperCase()}</span>
                    <span className="temperature">{weatherData.main.temp.toFixed()}°</span>
                    <span>IN {weatherData.name.toUpperCase()}, {weatherData.sys.country.toUpperCase()}</span>
                </div>
                <button className="button" onClick={props.setShowMore}>
                    <FontAwesomeIcon icon={props.showMore ? faArrowCircleDown : faArrowAltCircleUp} className="button-icon" size="2x" />
                </button>
            </div>
        </AnimateOnChange>
        
    );
};

export default Content;