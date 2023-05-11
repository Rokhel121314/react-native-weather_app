import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useContext } from "react";
import UpcomingWeatherItem from "../components/UpcomingWeatherItem";
import { weatherContext } from "../../context/WeatherApi";

const UpcomingWeather = () => {
  const { weather } = useContext(weatherContext);
  const weatherData = weather.list;
  console.log("weatherData", weatherData);

  const { container, imageBackground, headerText } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={imageBackground}
        source={require("../../assets/bg_images/sunny_clouds.jpg")}>
        <Text style={headerText}>Upcoming Weather</Text>
        <FlatList
          data={weatherData}
          renderItem={({ item }) => (
            <UpcomingWeatherItem
              condition={item.weather[0].main}
              dt_txt={item.dt_txt}
              max={item.main.temp_max}
              min={item.main.temp_min}
            />
          )}
          keyExtractor={(_, index) => index}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpcomingWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  headerText: {
    fontSize: 22,
    marginBottom: 10,
    alignSelf: "center",
  },
});
