import React, { useState } from 'react';
import './App.css';

import { LocationProvider } from './contexts/LocationContext';
import { WeatherDataProvider } from './contexts/WeatherDataContext';
import { QuoteProvider } from './contexts/QuoteContext';

import MainPage from './Components/MainPage/MainPage';
import DetailsComponent from './Components/DetailsComponent/DetailsComponent';

function App() {


  const [showMore, setShowMore] = useState(false);



  const showMoreHandler = () => {
    setShowMore(!showMore);
  }

  return (
    <div className="container" >
      <QuoteProvider>
        <WeatherDataProvider>
        <LocationProvider>
          <MainPage setShowMore={showMoreHandler} showMore={showMore}/>
          <DetailsComponent showMore={showMore}/>
        </LocationProvider>
        </WeatherDataProvider>
      </QuoteProvider>
      
      
    </div>
  );
}

export default App;
