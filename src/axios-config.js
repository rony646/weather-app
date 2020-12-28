import axios from 'axios';
import { apiKey } from './API-KEY';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: `${apiKey}`,
        units: 'metric'
    }
})

export default instance;