import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import { QuoteContext } from '../../../contexts/QuoteContext';

import SearchBar from '../SearchBar/SearchBar';

import './Quote.css';

const Quote = props => {

    const [quote, setQuote] = useContext(QuoteContext);

    return (
        <div className="wrapper">
            <div className="quote">
                <div>
                    <q>{quote.quote}</q>
                    <p className="author">{quote.author}</p>
                </div>
                <FontAwesomeIcon icon={faRedo} size="lg" style={{margin: "0 10px 0 0 "}} className="reload-icon"/>
            </div>
            <SearchBar />
        </div>
        
    );
};

export default Quote;