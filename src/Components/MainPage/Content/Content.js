import React from 'react';

import './Content.css';

const Content = props => {
    return(
        <div className="content">
            <span>IT'S A CLOUDY DAY</span>
            <span className="temperature">20°</span>
            <span>IN SÃO PAULO, BRAZIL</span>
        </div>
    );
};

export default Content;