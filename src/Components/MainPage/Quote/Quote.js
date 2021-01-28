import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import { QuoteContext } from '../../../contexts/QuoteContext';

import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';

import './Quote.css';

const Quote = props => {

    const [quote, setQuote] = useContext(QuoteContext);

    const fetchNewQuote = () => {
       axios.get('https://api.quotable.io/random')
       .then(res => {
           setQuote({
               quote: res.data.content,
               author: res.data.author
           });
       })
       .catch(err => {
           console.log(err);
       })
    };

    return (
        <div className="wrapper" >
            <div className="quote">
                <div>
                    <q>{quote.quote}</q>
                    <p className="author">{quote.author}</p>
                </div>
                <FontAwesomeIcon 
                    icon={faRedo} 
                    size="lg" 
                    style={{margin: "0 10px 0 0 "}} 
                    className="reload-icon"
                    onClick={fetchNewQuote}
                />
            </div>
            <SearchBar />
        </div>
        
    );
};

export default Quote;