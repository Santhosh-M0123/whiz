import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;


export const getAutofillLocation = async (query) => {
    try{
        const url = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`;
        let response = await axios.get(url);
        if(response){
            return response.data;
        }else{
            throw new Error("Something went wrong");
        }
    }catch(e){
        return false;
    }
}