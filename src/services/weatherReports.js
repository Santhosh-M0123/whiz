import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getCurrentWeather = async (location) => {
    try{
        const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`;
        let response = await axios.get(url);
        if(response){
            return response.data;
        }else{
            throw new Error("Something went wrong")
        }
    }catch(e){
        return false;
    }
}

export const getWeatherForcast = async (location,days = 6) => {
    try{
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=yes&alerts=yes`;
        let response = await axios.get(url);
        if(response){
            return response.data;
        }else{
            throw new Error("Something went wrong")
        }
    }catch(e){
        return false;
    }
}