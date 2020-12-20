import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.css'

const SearchBar = props => {
    return(
        <div className="searchbar">
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            <input type="text" placeholder="Type your location..." style={{border: "none"}} ></input>
        </div>
    );
};

export default SearchBar;