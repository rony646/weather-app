import React from 'react';

import WeatherCard from './WeatherCard/WeatherCard';

import './DetailsComponent.css';

const DetailsComponent = props => {

    let content;

    if(props.showMore) {
       content = 2
    }

    return(
        <div className={props.showMore ? 'open' : 'closed'} style={{transition: 'all 0.5s'}}>
            <div className="card-wrapper" style={{display: props.showMore ? 'flex' : 'none'}}>
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
            </div>
        </div>
    );
};

export default DetailsComponent;