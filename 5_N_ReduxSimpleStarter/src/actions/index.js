const API_KEY = '2445eeb6abd048fd6f1b627ac2172ec7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    return {
        type: FETCH_WEATHER
    };
}