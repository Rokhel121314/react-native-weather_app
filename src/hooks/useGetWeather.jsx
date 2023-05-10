import { useEffect, useState } from "react";
import * as Location from "expo-location";

const ApiKey = process.env["WEATHER_API_KEY"];

export const useGetWeather = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);

  const fetchWeatherData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.log("error", error);
      setError("Could not fetch weather");
    } finally {
      setIsLoading(false);
    }
  };

  const gettingUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
    await fetchWeatherData();
  };

  useEffect(() => {
    gettingUserLocation();
  }, [latitude, longitude]);

  return { weather, isLoading, error };
};
