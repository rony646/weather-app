import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import SearchBar from '../SearchBar/SearchBar';

import './Quote.css';

const Quote = props => {
    return (
        <div className="wrapper">
            <div className="quote">
                <div>
                    <q>Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.</q>
                    <p className="author">Albert Einstein</p>
                </div>
                <FontAwesomeIcon icon={faRedo} size="md" style={{margin: "0 10px 0 0 "}} className="reload-icon"/>
            </div>
            <SearchBar />
        </div>
        
    );
};

export default Quote;