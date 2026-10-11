import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import {useState} from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi ",
        feelsLike: 38.17,
        humidity: 54,
        temp: 33.3,
        tempMax: 33.3,
        tempMin: 33.3,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <h2>Weather App By SIDDHI</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}