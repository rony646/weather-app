import React from 'react';

import WeatherCard from './WeatherCard/WeatherCard';

import './DetailsComponent.css';

const DetailsComponent = props => {

    let content;

    if(props.showMore) {
       content = <div className={props.showMore ? 'open' : 'closed'} style={{transition: 'all 0.5s'}}>
                    <WeatherCard />
                    <WeatherCard />
                    <WeatherCard />
                    <WeatherCard />
                    <WeatherCard />
                </div>
    }

    return(
        <>
        {content}
        </>
    );
};

export default DetailsComponent;