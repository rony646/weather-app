import React from 'react';

import Quote from './Quote/Quote';
import Content from './Content/Content'


import './MainPage.css';

const MainPage = props => {
    return(
        <div className="main-page">
            <Quote />
            <Content />
        </div>
    );
};

export default MainPage;