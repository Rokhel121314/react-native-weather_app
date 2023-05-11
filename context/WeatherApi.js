import { useState, useEffect, createContext } from "react";
import * as Location from "expo-location";
import Axios from "axios";

export const weatherContext = createContext(null);
const ApiKey = process.env["WEATHER_API_KEY"];

function WeatherContext({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);

  console.log("lat", latitude, "long", longitude);

  const gettingUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  };

  useEffect(() => {
    gettingUserLocation();

    if (latitude && longitude) {
      fetchWeatherData();
    } else return;
  }, [latitude, longitude]);

  const fetchWeatherData = async () => {
    try {
      setIsLoading(true);
      const { data } = await Axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${ApiKey}&units=metric`
      );

      setWeather(data);
      setIsLoading(false);
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
      setError("Could not fetch weather");
    }
  };

  return (
    <weatherContext.Provider value={{ weather, isLoading, error }}>
      {children}
    </weatherContext.Provider>
  );
}

export default WeatherContext;
