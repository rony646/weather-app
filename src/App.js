import React from 'react';
import './App.css';

import { LocationProvider } from './contexts/LocationContext';
import { WeatherDataProvider } from './contexts/WeatherDataContext';
import { QuoteProvider } from './contexts/QuoteContext';

import MainPage from './Components/MainPage/MainPage';

function App() {

  console.log(window.innerHeight)

  return (
    <div className="container" >
      <QuoteProvider>
        <WeatherDataProvider>
        <LocationProvider>
          <MainPage />
        </LocationProvider>
        </WeatherDataProvider>
      </QuoteProvider>
      
      {/*<div>
        <h1>Lower menu</h1>
      </div>*/}
    </div>
  );
}

export default App;
