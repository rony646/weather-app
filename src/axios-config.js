import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: `${apiKey}`,
        units: 'metric'
    }
})

export default instance;