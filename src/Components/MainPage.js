import React from 'react';

import Quote from '../Components/Quote/Quote'

import './MainPage.css';

const MainPage = props => {
    return(
        <div className="main-page">
            <Quote />
            <div className="content">
                <p>weather resume</p>
                <p>Current temperature</p>
                <p>Location</p>
            </div>
        </div>
    );
};

export default MainPage;