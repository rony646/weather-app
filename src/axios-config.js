import axios from 'axios';
import API_KEYS from './API-KEYS';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: `${API_KEYS.openWeather}`,
        units: 'metric'
    }
})

export default instance;