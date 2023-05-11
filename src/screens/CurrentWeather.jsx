import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import { weatherContext } from "../../context/WeatherApi";
import { ActivityIndicator } from "react-native";

export default function CurrentWeather() {
  const { weather, isLoading, error } = useContext(weatherContext);

  const currentWeatherType = weather?.list[0].weather[0].main;
  const currentWeatherMessage = weather?.list[0].weather[0].description;
  const currentTemperature = weather?.list[0].main.temp;
  const currentTempMin = weather?.list[0].main.temp_min;
  const currentTempMax = weather?.list[0].main.temp_max;
  const currentTempFeelsLike = weather?.list[0].main.feels_like;

  console.log(
    "test",
    currentTemperature,
    currentTempFeelsLike,
    currentTempMax,
    currentTempMin,
    currentWeatherMessage
  );
  const {
    weatherContainer,
    temperatureStyle,
    temperatureFeels,
    highLowContainer,
    highLowText,
    statusContainer,
    weatherStatus,
    message,
    activityIndicatorWrapper,
    currentWeatherBackground,
    bgImage,
  } = styles;

  if (isLoading && !weather?.list) {
    return (
      <View style={activityIndicatorWrapper}>
        <ActivityIndicator size={100} color={"tomato"} />
      </View>
    );
  }

  return (
    <SafeAreaView style={currentWeatherBackground}>
      <ImageBackground
        style={bgImage}
        source={{
          uri: weatherType[currentWeatherType].bgURL,
        }}>
        <View style={weatherContainer}>
          <Feather
            name={weatherType[currentWeatherType].icon}
            size={150}
            color={"black"}
          />
          <Text style={temperatureStyle}>{`${currentTemperature}°C`}</Text>
          <Text
            style={
              temperatureFeels
            }>{`Feels like ${currentTempFeelsLike}°C`}</Text>
          <View style={highLowContainer}>
            <Text style={highLowText}>{`High: ${currentTempMax}°C`}</Text>
            <Text style={highLowText}>{`Low: ${currentTempMin}°C`}</Text>
          </View>
        </View>
        <View style={statusContainer}>
          <Text style={weatherStatus}>{`${currentWeatherMessage}`}</Text>
          <Text style={message}>{weatherType[currentWeatherType].message}</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  currentWeatherBackground: {
    flex: 1,
  },
  activityIndicatorWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
  },
  weatherContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temperatureStyle: {
    fontSize: 90,
    fontWeight: 400,
  },
  temperatureFeels: {
    fontSize: 32,
    // color: "white",
  },
  highLowContainer: {
    flexDirection: "row",
  },
  highLowText: {
    fontSize: 28,
    marginHorizontal: 10,
    // color: "white",
  },
  statusContainer: {
    paddingHorizontal: 20,
  },
  weatherStatus: {
    fontSize: 36,
    // color: "white",
  },
  message: {
    fontSize: 28,
    // color: "white",
  },
});
