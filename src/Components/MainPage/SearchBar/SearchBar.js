import React, { useContext, useState, useEffect} from 'react';

import axios from '../../../axios-config';

import { LocationContext } from '../../../contexts/LocationContext';
import { WeatherDataContext } from '../../../contexts/WeatherDataContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


import './SearchBar.css'

const SearchBar = () => {


    const [inputValue, setInputValue] = useState('São paulo');
    const [location, setLocation] = useContext(LocationContext);
    const [weatherData, setWeatherData] = useContext(WeatherDataContext)

    useEffect(() => {
        axios.get(`weather?q=${location}`).
        then(res => {
            setWeatherData(res.data);
        })
        .catch(err => {
            console.log(err);
            return null;
        })
    }, [location])

    

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value)
    }

    const submitLocationHandler = (e) => {
        e.preventDefault()
        setLocation(inputValue)
    }

    return(
        <div>
            <form className="searchbar" onSubmit={submitLocationHandler}>
                <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                <input 
                    type="text" 
                    placeholder="Type your location..." 
                    style={{border: "none"}} 
                    value={inputValue} 
                    onChange={inputChangeHandler}>
                </input>
            </form>
        </div>
    );
};

export default SearchBar;